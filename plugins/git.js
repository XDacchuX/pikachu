const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://images.wallpapersden.com/image/download/pokemon-detective-pikachu-4k_a2lrZmWUmZqaraWkpJRsZ2WtbGdl.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot created by Ameer Suhail*
*Creator number : wa.me/919019218416?text=Hi%20Dacchu%20xY.%20*

*Bot setting video : https://youtu.be/_D4ZYuUSXjs*

*Friends Chat (Support)  :    https://t.me/RazeFriendsZone*

*About Owner :   https://t.me/The3xpert*

*Owner Id : https://t.me/XDacchuX*

*Girhub link : https://github.com/XDacchuX* 

*For More Details Contact Dacchu On Telegram ☝*
`}) 

}));
