# StickerWhatsAppBOT
<p align="center">

  <img alt="@stickerwhatsappbot" style="width: 150px;" src="https://github.com/DrelezTM/StickerWhatsAppBOT/assets/72683265/d3d504a6-7ce4-4937-8182-c37b8a86b456">
</p>
<div align="center">
  <h3>StickerWhatsAppBOT</h3>
  <p>Sticker WhatsAppBOT with <a href="https://github.com/pedroslopez/whatsapp-web.js/">whatsapp-web.js</a> and <a href="https://nodejs.org/en/">nodejs</a></p>
</div>
<div align="center">
  <a href="#warning">Warning</a> | <a href="https://dsc.gg/DrelezTM">Report Bug</a> | <a href="https://github.com/DrelezTM/StickerWhatsAppBOT/issues">Issues</a>
</div>

## Installation 📑
* Clone Repository
  ```sh
  git clone https://github.com/DrelezTM/StickerWhatsAppBOT
  ```
* Install Modules
  ```sh
  npm install
  ```
* Start
  ```sh
  npm start
  ```
* Scan QR
  <img alt="@stickerwhatsappbot" src="https://github.com/DrelezTM/StickerWhatsAppBOT/assets/72683265/2ce59cf0-f26b-4cd0-be1a-12f985720ad9">

* Ready
  <img alt="@stickerwhatsappbot" src="https://github.com/DrelezTM/StickerWhatsAppBOT/assets/72683265/76cc9f7a-6a5f-4fc2-896c-f54d9e1462f5">

 ## Configuration 🗝
* [config.json](https://github.com/DrelezTM/StickerWhatsAppBOT/blob/main/config/config.json)
  ```json
  {
    "name": "StickerBOT",
    "author": "@DrelezTM",
    "prefix": "!",
    "timezone": "Asia/Jakarta",
    "groups": true
  }
  ```
  * config.name : *name for the sticker* (string)
  * config.author : *name for sticker maker* (string)
  * config.prefix : *prefix for command* (string)
  * config.timezone : *timezone displays the time at the specified location* (string)
  * config.groups : *to filter whether bots can respond to group chats or not* (boolean)
* [console.txt](https://github.com/DrelezTM/StickerWhatsAppBOT/blob/main/config/console.txt)
  ```txt
  
    /$$$$$$   /$$     /$$           /$$                           /$$$$$$$   /$$$$$$  /$$$$$$$$
   /$$__  $$ | $$    |__/          | $$                          | $$__  $$ /$$__  $$|__  $$__/
  | $$  \__//$$$$$$   /$$  /$$$$$$$| $$   /$$  /$$$$$$   /$$$$$$ | $$  \ $$| $$  \ $$   | $$   
  |  $$$$$$|_  $$_/  | $$ /$$_____/| $$  /$$/ /$$__  $$ /$$__  $$| $$$$$$$ | $$  | $$   | $$   
   \____  $$ | $$    | $$| $$      | $$$$$$/ | $$$$$$$$| $$  \__/| $$__  $$| $$  | $$   | $$   
   /$$  \ $$ | $$ /$$| $$| $$      | $$_  $$ | $$_____/| $$      | $$  \ $$| $$  | $$   | $$   
  |  $$$$$$/ |  $$$$/| $$|  $$$$$$$| $$ \  $$|  $$$$$$$| $$      | $$$$$$$/|  $$$$$$/   | $$   
   \______/   \___/  |__/ \_______/|__/  \__/ \_______/|__/      |_______/  \______/    |__/   
  ```
  You can replace ascii in https://patorjk.com/software/taag/

## Features 📋
  |                   Features                  	| Status 	|
  |:-------------------------------------------:	|:------:	|
  | Image to Sticker                            	|    ✅   	|
  | Video to Sticker                            	|    ✅   	|
  | Gif to Sticker                              	|    ✅   	|
  | Sticker to Image                            	|    ✅   	|
  | Sticker to Video                            	|    ❎   	|
  | Change Sticker Name & Sticker Author        	|    ✅   	|
  | Prefix can be set in the config/config.json 	|    ✅   	|
  | Supports Reply Image to Sticker             	|    ✅   	|
  | Supports Reply Video to Sticker             	|    ✅   	|
  | Supports Reply Gif to Sticker               	|    ✅   	|
  | Supports Reply Stickers to Images           	|    ✅   	|

## Commands 💭
  <table class="tg">
    <thead>
      <tr>
        <th class="tg-0pky">Commands</th>
        <th class="tg-0pky">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-0pky">!sticker</td>
        <td class="tg-0pky">Make Image/Video/Gif into Sticker. You can also send Image/Video/Gif into Sticker directly without Command. [in the Caption or Reply message]</td>
      </tr>
      <tr>
        <td class="tg-0pky">!image</td>
        <td class="tg-0pky">Make Sticker into Image. You can also send Image/Video/Gif into Sticker directly without Command. [in the Reply message]</td>
      </tr>
      <tr>
        <td class="tg-0pky">!change &lt;name&gt; | &lt;author&gt;</td>
        <td class="tg-0pky">Change Sticker Name &amp; Sticker Author as you wish. [in the Reply message]</td>
      </tr>
    </tbody>
  </table>

## Built With 🛠
* [WhatsApp-web.js](https://github.com/pedroslopez/whatsapp-web.js/)
* [QRCode-Terminal](https://www.npmjs.com/package/qrcode-terminal)
* [Moment-Timezone](https://www.npmjs.com/package/moment-timezone)
* [Colors](https://www.npmjs.com/package/colors)
* [FS](https://www.npmjs.com/package/fs)

## Error or Bug 🐞
* [Discord](https://dsc.gg/DrelezTM)
* [YouTube](https://www.youtube.com/p/DrelezTM)
* [Instagram](https://www.instagram.com/DrelezTM)
* [Issues](https://github.com/DrelezTM/StickerWhatsAppBOT/issues)

## License 📜
* [License](https://github.com/DrelezTM/StickerWhatsAppBOT/blob/main/LICENSE)

## Warning 🚧
<p id="warning">Only works on Windows, MacOS, and Linux. <b>Can't work on Android/Termux</b>!</p>
