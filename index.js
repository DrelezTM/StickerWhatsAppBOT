const { Client, LocalAuth, Chat } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const moment = require('moment-timezone');
const colors = require('colors');
const fs = require('fs');

const client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
        headless: true,
        args: [ '--no-sandbox', '--disable-setuid-sandbox' ]
    },
    ffmpeg: './ffmpeg.exe',
    authStrategy: new LocalAuth({ clientId: "client" })
});
const config = require('./config/config.json');

client.on('qr', (qr) => {
    console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] Scan the QR below : `);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.clear();
    const consoleText = './config/console.txt';
    fs.readFile(consoleText, 'utf-8', (err, data) => {
        if (err) {
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] Console Text not found!`.yellow);
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] ${config.name} is Already!`.green);
        } else {
            console.log(data.green);
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] ${config.name} is Already!`.green);
        }
    });
});

client.on('message', async (message) => {
    const isGroups = message.from.endsWith('@g.us') ? true : false;
    if ((isGroups && config.groups) || !isGroups) {
        if (message.type == "image" || message.type == "video" || message.type  == "gif") {
            client.sendMessage(message.from, "*[⏳]* Loading..");
            try {
                const media = await message.downloadMedia();
                client.sendMessage(message.from, media, {
                    sendMediaAsSticker: true,
                    stickerName: config.name, // Sticker Name = Edit in 'config/config.json'
                    stickerAuthor: config.author // Sticker Author = Edit in 'config/config.json'
                }).then(() => {
                    client.sendMessage(message.from, "*[✅]* Successfully!");
                });
            } catch {
                client.sendMessage(message.from, "*[❎]* Failed!");
            }
        } else if (message.type == "sticker") {
            client.sendMessage(message.from, "*[⏳]* Loading..");
            try {
                const media = await message.downloadMedia();
                client.sendMessage(message.from, media).then(() => {
                    client.sendMessage(message.from, "*[✅]* Successfully!");
                });  
            } catch {
                client.sendMessage(message.from, "*[❎]* Failed!");
            }
        } else {
            client.getChatById(message.id.remote).then(async (chat) => {
                await chat.sendSeen();
            });
        }
    }
});

client.initialize();
