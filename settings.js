const fs = require('fs');
const chalk = require('chalk');

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['6285381172407']
global.packname = 'malaikat botz'
global.fazbot = 'WhatsApp-bot'
global.author = 'Malaikat Einsten\n\nBot number:6285381172407'
global.fazz = 'malaikat botz'
global.botname = 'malaikat botz'
global.listprefix = ['+','!']
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'
global.pairing_code = true

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://d.top4top.io/p_3283wjmw70.jpeg',
	thumbnail: fs.readFileSync('./src/media/faz.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://donatesuport.rf.gd/',
	gh: 'https://donatesuport.rf.gd/',
	gc: 'https://whatsapp.com/channel/0029Vaz7yJFHVvTYroi7o227',
	ch: '0029Vaz7yJFHVvTYroi7o227@newsletter',
}

global.limit = {
	free: 40,
	premium: 999999999999999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 0,
	vip: 0
}

global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'Fitur Khusus Owner!',
	admin: 'Fitur Khusus Admin!',
	botAdmin: 'Bot Bukan Admin!',
	group: 'Gunakan Di Group!',
	private: 'Gunakan Di Chat Pribadi!',
	prem: 'Khusus User Premium!',
	wait: 'Loading... . .',
	error: 'Error!',
	done: 'Done'
}

global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});