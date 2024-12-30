process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const gis = require('g-i-s');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { JSDOM } = require('jsdom');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const { Akinator, AkinatorAnswer } = require('aki-api');
const { exec, spawn, execSync } = require('child_process');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const prem = require('./src/premium');
const { LoadDataBase } = require('./src/message');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/exif');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addUang, setUang, transfer } = require('./lib/game');
const { pinterest, pinterest2, wallpaper, remini, wikimedia, quotesAnime, multiDownload, fazbotGpt, happymod, umma, ringtone, jadwalsholat, styletext, tiktokDl, facebookDl, instaStory, bk9Ai, ytMp4, ytMp3, mediafireDl, quotedLyo, simi } = require('./lib/screaper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, getAllHTML } = require('./lib/function');
// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

// Database Game
let suit = db.game.suit = []
let menfes = db.game.menfes = []
let tekateki = db.game.tekateki = []
let akinator = db.game.akinator = []
let tictactoe = db.game.tictactoe = []
let tebaklirik = db.game.tebaklirik = []
let kuismath = db.game.kuismath = []
let tebaklagu = db.game.tebaklagu = []
let tebakkata = db.game.tebakkata = []
let family100 = db.game.family100 = []
let susunkata = db.game.susunkata = []
let tebakbom = db.game.tebakbom = []
let tebakkimia = db.game.tebakkimia = []
let caklontong = db.game.caklontong = []
let tebaknegara = db.game.tebaknegara = []
let tebakgambar = db.game.tebakgambar = []
let tebakbendera = db.game.tebakbendera = []

module.exports = faz = async (faz, m, chatUpdate, store) => {
	try {
		
		await LoadDataBase(faz, m);
		
		const botNumber = await faz.decodeJid(faz.user.id)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (m.type === 'editedMessage') ? (m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage ? m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text : m.message.editedMessage.message.protocolMessage.editedMessage.conversation) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body.startsWith(a)) || '¿') : listprefix.find(a => body.startsWith(a)) || '¿'
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment().tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const setv = pickRandom(listv)
		const readmore = String.fromCharCode(8206).repeat(999)
		
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false

		// Fake
		const fkontak = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: 'faz'
			},
			message: {
				contactMessage: {
					displayName: (m.pushName || author),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		}
		
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
				db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		})
		
		// Auto Set Bio
		if (db.set[botNumber].autobio) {
			let setbio = db.set[botNumber]
			if (new Date() * 1 - setbio.status > 60000) {
				await faz.updateProfileStatus(`${faz.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`)
				setbio.status = new Date() * 1
			}
		}
		
		// Set Public
		if (!faz.public) {
			if (!isCreator) return m.reply(mess.owner)
		}
		
		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
			if (db.set[botNumber].autoread && faz.public) faz.readMessages([m.key]);
		}
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }}} : { [chats.type]: chats.msg }
					await faz.relayMessage(m.chat, pesan, {})
				}
			}
			
			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match('chat.whatsapp.com/')) {
					const isGcLink = new RegExp(`https://chat.whatsapp.com/${await faz.groupInviteCode(m.chat)}`, 'i').test(m.text);
					if (isGcLink) return
					await faz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await faz.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Link❗*'}, ...m.key }}}, {})
				}
			}
			
			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 6000) {
					await faz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await faz.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Virtex❗*'}, ...m.key }}}, {})
					await faz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg.nativeFlowMessage && m.msg.nativeFlowMessage.messageParamsJson && m.msg.nativeFlowMessage.messageParamsJson.length > 3500) {
					await faz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await faz.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Bug❗*'}, ...m.key }}}, {})
					await faz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
			
		}
		
		// Filter Bot
		if (m.isBot) return
		
		// Mengetik
		if (db.set[botNumber].autotyping && faz.public && isCmd) {
			await faz.sendPresenceUpdate('composing', m.chat)
		}
		
		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['Wa\'alaikumusalam','Wa\'alaikumusalam wr wb','Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
			m.reply(pickRandom(jwb_salam))
		}
		
		// Cek Expired
		prem.expiredCheck(faz, premium);
		
		// TicTacToe
		let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				m.reply({
					'-3': 'Game telah berakhir',
					'-2': 'Invalid',
					'-1': 'Posisi Invalid',
					0: 'Posisi Invalid',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				db.users[m.sender].limit += 3
				db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await faz.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await faz.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.reply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`)
					delete suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) faz.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				if (!roof.pilih2) faz.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						m.reply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
					}
					delete suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
				if (!roof.pilih2) faz.sendMessage(roof.p2, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) faz.sendMessage(roof.p, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				faz.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete suit[roof.id]
			}
		}
		
		// Tebak Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				faz.sendMessage(m.chat, { react: {text: '❌', key: m.key }})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`);
					faz.sendMessage(m.chat, { react: { text: '😂', key: m.key }})
					delete tebakbom[m.sender];
				} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].uang += 6000
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Uang 💰 *+6000*`);
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		
		// Akinator
		if (m.sender in akinator) {
			if (m.quoted && akinator[m.sender].key == m.quoted.id) {
				if (budy == '5') {
					akinator[m.sender].isWin = false
					await akinator[m.sender].cancelAnswer()
					let { key } = await m.reply(`🎮 Akinator Game Back :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
					akinator[m.sender].key = key.id
				} else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
					faz.sendMessage(m.chat, { react: { text: '🎊', key: m.key }})
					delete akinator[m.sender]
				} else {
					if (!isNaN(budy)) {
						if (akinator[m.sender].isWin) {
							let { key } = await faz.sendMessage(m.chat, { image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }}, { quoted: m })
							akinator[m.sender].key = key.id
						} else {
							await akinator[m.sender].answer(budy)
							if (akinator[m.sender].isWin) {
								let { key } = await faz.sendMessage(m.chat, { image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }}, { quoted: m })
								akinator[m.sender].key = key.id
							} else {
								let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
								akinator[m.sender].key = key.id
							}
						}
					}
				}
			}
		}
		
		// Game
		const games = { tebaklirik, tekateki, tebaklagu, tebakkata, kuismath, susunkata, tebakkimia, caklontong, tebaknegara, tebakgambar, tebakbendera }
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if (m.quoted && id == m.quoted.id) {
				if (gameName == 'kuismath') {
					jawaban = game[m.chat + id].jawaban
					const difficultyMap = { 'noob': 1, 'easy': 1.5, 'medium': 2.5, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
					let randMoney = difficultyMap[kuismath[m.chat + id].mode]
					if (!isNaN(budy)) {
						if (budy.toLowerCase() == jawaban) {
							db.users[m.sender].uang += randMoney * 1000
							await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${randMoney * 1000}*`)
							delete kuismath[m.chat + id]
						} else m.reply('*Jawaban Salah!*')
					}
				} else {
					jawaban = game[m.chat + id].jawaban
					let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
					let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
					if (jawabBenar) {
						db.users[m.sender].uang += bonus * 1
						await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${bonus}*`)
						delete game[m.chat + id]
					} else m.reply('*Jawaban Salah!*')
				}
			}
		}
		
		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
				m.reply(caption)
				if (isWin || isSurender) delete family100[m.chat]
			}
		}
		
		// Menfes
		if (!m.isGroup) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await faz.relayMessage(menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			m.reply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		
		
		switch(command) {
			// Tempat Add Case
			

case 'wallpaperphone': case 'wallphone':
let anu = await wallpaper(text)
var notnot = JSON.parse(fs.readFileSync('./src/media/wallhp.json'))
var hasil = pickRandom(notnot)
await faz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break

case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!isPremium) return m.reply(mess.prem)
				if (!teks1 || !teks2 || !teks3) return m.reply(`Contoh : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				faz.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
			
			// Owner Menu
			case 'setbio': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Mana text nya?')
				faz.setStatus(q)
				m.reply(`*Bio telah di ganti menjadi ${q}*`)
			}
			break
			case 'setppbot': {
				if (!isCreator) return m.reply(mess.owner)
				if (!/image/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await faz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await faz.query({
						tag: 'iq',
						attrs: {
							to: botNumber,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await faz.updateProfilePicture(botNumber, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delppbot': {
				if (!isCreator) return m.reply(mess.owner)
				await faz.removeProfilePicture(faz.user.id)
				m.reply('Sukses')
			}
			break
			case 'join': {
				if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply('Masukkan Link Group!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				m.reply(mess.wait)
				await faz.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
					if (res.data == 409) return m.reply('Bot Sudah Join Di Grup Tersebut❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					if (res.data == 500) return m.reply('Grup Penuh❗');
				})
			}
			break
			case 'leavegc': {
				if (!isCreator) return m.reply(mess.owner)
				await faz.groupLeave(m.chat).then(() => faz.sendFromOwner(owner, 'Sukses Keluar Dari Grup', m, { contextInfo: { isForwarded: true }}))
			}
			break
			case 'blokir': case 'block': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await faz.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'listblock': {
				let anu = await faz.fetchBlocklist()
				m.reply(`Total Block : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await faz.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'adduang': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nContoh:\n${prefix + command} 62xxx 1000`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await faz.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].uang) {
					addUang(args[1], nmrnya, db)
					m.reply('Sukses Add Uang')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'addlimit': {
    if (!isCreator) return m.reply(mess.owner);

    // Validasi input
    if (!args[0] || !args[1] || isNaN(args[1])) {
        return m.reply(`Kirim/tag Nomernya!\nContoh:\n${prefix + command} 62xxx 10`);
    }

    // Memastikan nomor WhatsApp terdaftar
    const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const onWa = await faz.onWhatsApp(nmrnya);
    if (!onWa.length > 0) {
        return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!');
    }

    // Menambahkan limit tanpa memeriksa limit yang ada di database
    const limitToAdd = parseInt(args[1]); // Jumlah limit yang ingin ditambahkan

    // Jika user belum ada di database, tambahkan user dan set limit
    if (!db.users[nmrnya]) {
        db.users[nmrnya] = { limit: 0 }; // Tambahkan user jika belum ada di database
    }

    // Menambahkan limit ke user
    db.users[nmrnya].limit += limitToAdd;

    // Kirim pesan sukses
    m.reply(`Sukses menambahkan ${limitToAdd} limit untuk ${args[0]}. Limit sekarang: ${db.users[nmrnya].limit}`);
}
break
			case 'listpc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					if (store.messages[i] && store.messages[i].array && store.messages[i].array[0]) {
						let nama = store.messages[i].array[0].pushName
						teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
					}
				}
				await faz.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					let metadata = store.groupMetadata[i] || await faz.groupMetadata(i)
					teks += `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				await faz.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'creategc': case 'buatgc': {
				if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply(`Contoh:\n${prefix + command} *Nama Gc*`)
				let group = await faz.groupCreate(q, [m.sender])
				let res = await faz.groupInviteCode(group.id)
				await faz.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`, detectLink: true }, { quoted: m });
				await faz.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await faz.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Contoh:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30 hari`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await faz.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (teks2) {
					if (db.users[nmrnya] && db.users[nmrnya].limit) {
						prem.addPremiumUser(nmrnya, teks2.replace(/[^0-9]/g, '') + 'd', premium);
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2} hari`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium
					} else m.reply('Nomer tidak terdaftar di BOT !')
				} else {
					m.reply(`Masukkan waktunya!\Contoh:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`)
				}
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Contoh:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && db.users[nmrnya].limit) {
					if (prem.checkPremiumUser(nmrnya, premium)) {
						premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
						fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.free
					} else {
						m.reply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`)
					}
				} else m.reply('Nomer tidak terdaftar di BOT !')
			}
			break
			case 'listpr': case 'listprem': case 'listpremium': {
				if (!isCreator) return m.reply(mess.owner)
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${db.users[userprem.id].limit}\n➸ *Uang*: ${db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				m.reply(txt)
			}
			break
			case 'upsw': {
				if (!isCreator) return m.reply(mess.owner)
				const statusJidList = Object.keys(db.users)
				const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				if (quoted.isMedia) {
					if (/image|video/.test(quoted.mime)) {
						await faz.sendMessage('status@broadcast', {
							[`${quoted.mime.split('/')[0]}`]: await quoted.download(),
							caption: text || m.quoted?.body || ''
						}, { statusJidList })
						faz.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
					} else if (/audio/.test(quoted.mime)) {
						await faz.sendMessage('status@broadcast', {
							audio: await quoted.download(),
							mimetype: 'audio/mp4',
							ptt: true
						}, { backgroundColor, statusJidList })
						faz.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
					} else m.reply('Only Support video/audio/image/text')
				} else if (quoted.text) {
					await faz.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
						textArgb: 0xffffffff,
						font: Math.floor(Math.random() * 9),
						backgroundColor, statusJidList
					})
					faz.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
				} else m.reply('Only Support video/audio/image/text')
			}
			break
			case 'bc': case 'broadcast': case 'bcall': {
    if (!isCreator) return m.reply(mess.owner); // Hanya untuk owner
    if (!text) throw `Teks mana?\n\nContoh:\n${prefix + command} Halo semuanya!`;

    try {
        // Ambil semua kontak dari riwayat chat
        let chats = await store.chats.all();
        let anu = chats
            .filter(v => v.id.endsWith('@s.whatsapp.net')) // Hanya kontak pribadi
            .map(v => v.id);

        if (anu.length === 0) throw 'Tidak ada kontak untuk broadcast.';

        // Notifikasi awal
        m.reply(`Mengirim Broadcast ke ${anu.length} kontak.\nEstimasi waktu selesai: ${anu.length * 1.5} detik.`);

        // Kirim Broadcast
        for (let yoi of anu) {
            await sleep(1500); // Delay 1.5 detik per pengiriman
            let broadcastMessage = `*「 Broadcast Bot 」*\n\n${text}\n\n_*Pesan ini dikirim oleh owner bot.*_`;

            try {
                await faz.sendMessage(yoi, {
                    text: broadcastMessage,
                    footer: 'Powered by malaikat botz',
                }, { quoted: fkontak });

                console.log(`Berhasil mengirim broadcast ke ${yoi}`);
            } catch (error) {
                console.error(`Gagal mengirim broadcast ke ${yoi}:`, error.message);
            }
        }

        m.reply('Broadcast selesai!');
    } catch (error) {
        console.error('Error saat broadcast:', error.message);
        m.reply(`Terjadi kesalahan saat broadcast: ${error.message}`);
    }
}
break
case 'bcgc': case 'bcgroup': {
    if (!isCreator) return m.reply(mess.owner); // Hanya untuk owner
    if (!text) throw `Teks mana?\n\nContoh:\n${prefix + command} Halo semuanya!`;

    // Filter hanya grup
    let anu = await store.chats.all()
        .filter(v => v.id.endsWith('@g.us')) // Hanya grup
        .map(v => v.id);

    m.reply(`Mengirim Broadcast ke ${anu.length} grup.\nEstimasi waktu selesai: ${anu.length * 1.5} detik.`);

    for (let yoi of anu) {
        await sleep(1500); // Delay 1.5 detik per pengiriman
        let broadcastMessage = `*「 Broadcast Bot 」*\n\n${text}\n\n_*Pesan ini dikirim oleh owner bot.*_`;

        try {
            await faz.sendMessage(yoi, {
                text: broadcastMessage,
                footer: 'Powered by malaikat botz',
            }, { quoted: fkontak });
        } catch (error) {
            console.error(`Gagal mengirim broadcast ke ${yoi}:`, error.message);
        }
    }

    m.reply('Broadcast selesai!');
}
break
			case 'addcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !text.startsWith('case')) return m.reply('Masukkan Casenya!')
				fs.readFile('faz.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisi = data.indexOf("case '19rujxl1e':");
					if (posisi !== -1) {
						const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
						fs.writeFile('faz.js', codeBaru, 'utf8', (err) => {
							if (err) {
								m.reply('Terjadi kesalahan saat menulis file: ', err);
							} else {
								m.reply('Case berhasil ditambahkan');
							}
						});
					} else {
						m.reply('Gagal Menambahkan case!');
					}
				});
			}
			break
			case 'getcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				try {
					const getCase = (cases) => {
						return "case"+`'${cases}'`+fs.readFileSync("faz.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
					}
					m.reply(`${getCase(text)}`)
				} catch (e) {
					m.reply(`case ${text} tidak ditemukan!`)
				}
			}
			break
			case 'delcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				fs.readFile('faz.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
					const modifiedData = data.replace(regex, '');
					fs.writeFile('faz.js', modifiedData, 'utf8', (err) => {
						if (err) {
							m.reply('Terjadi kesalahan saat menulis file: ', err);
						} else {
							m.reply('Case berhasil dihapus dari file');
						}
					});
				});
			}
			break
			case 'getsession': {
				if (!isCreator) return m.reply(mess.owner)
				await faz.sendMessage(m.chat, {
					document: fs.readFileSync('./fazdev/creds.json'),
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, { quoted: m });
			}
			break
			case 'deletesession': case 'delsession': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./fazdev', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));					
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Session File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./fazdev/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah Session', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'deletesampah': case 'delsampah': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./database/sampah', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['gif', 'png', 'bin','mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
					let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Sampah File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./database/sampah/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'donate': case 'donasi': {
    await faz.sendMessage(m.chat, {
        text: `Berikut adalah informasi untuk donasi:\n\n✨ *Dana*: 085876902820\n✨ *Saweria*: https://saweria.co/Fahrilgg\n\nDukungan Anda sangat berarti!`, 
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Join For More Info'
						}
					}
				}, { quoted: fkontak });
			}
			break
			
			// Group Menu
			case 'add': case 'addmember': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await faz.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
							for (let i of res) {
								let invv = await faz.groupInviteCode(m.chat)
								if (i.status == 408) return m.reply('Dia Baru-Baru Saja Keluar Dari Grub Ini!')
								if (i.status == 401) return m.reply('Dia Memblokir Bot!')
								if (i.status == 409) return m.reply('Dia Sudah Join!')
								if (i.status == 500) return m.reply('Grub Penuh!')
								if (i.status == 403) {
									await faz.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`, mentions: [numbersOnly] }, { quoted : m })
									await faz.sendMessage(`${numbersOnly ? numbersOnly : '6285381172407@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, detectLink: true, mentions: [numbersOnly, m.sender] }, { quoted : fkontak }).catch((err) => m.reply('Gagal Mengirim Undangan!'))
								} else if (i.status !== 200) {
									m.reply('Berhasil Add User')
								}
							}
						})
					} catch (e) {
						m.reply('Terjadi Kesalahan! Gagal Add User')
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await faz.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal Kick User!'))
				}
			}
			break
			case 'promote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await faz.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await faz.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await faz.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await faz.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setppgroups': case 'setppgrup': case 'setppgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply('Reply Gambar yang mau dipasang di Profile Bot')
				if (!/image/.test(mime) && /webp/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await faz.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await faz.query({
						tag: 'iq',
						attrs: {
							to: m.chat,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await faz.updateProfilePicture(m.chat, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return m.reply('Reply pesan yang mau di delete')
				await faz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let response = await faz.groupInviteCode(m.chat)
				await faz.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await faz.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: m });
			}
			break
			case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await faz.groupRevokeInvite(m.chat).then((a) => {
					m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`)
				}).catch((err) => m.reply('Gagal!'))
			}
			break
			case 'group': case 'grup': case 'grupset': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let teks = text.split(' ')
				let set = db.groups[m.chat]
				switch (teks[0]) {
					case 'close': case 'open':
					await faz.groupSettingUpdate(m.chat, teks[0] == 'close' ? 'announcement' : 'not_announcement').then(a => m.reply(`*Sukses ${teks[0] == 'open' ? 'Membuka' : 'Menutup'} Group*`))
					break
					case 'antilink': case 'antivirtex': case 'antidelete': case 'welcome': case 'mute': case 'antitoxic': case 'waktusholat': case 'nsfw':
					if (teks[1] == 'on' || teks[1] == 'true') {
						if (set[teks[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[teks[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (teks[1] == 'off' || teks[1] == 'false') {
						set[teks[0]] = false
						m.reply('*Sukse Change To Off*')
					} else {
						m.reply(`❗${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
					}
					break
					default:
					m.reply(`${m.metadata.subject}\n- Mute : ${set.mute ? '✅' : '❌'}\n- Anti Link : ${set.antilink ? '✅' : '❌'}\n- Anti Virtex : ${set.antivirtex ? '✅' : '❌'}\n- Anti Delete : ${set.antidelete ? '✅' : '❌'}\n- Welcome : ${set.welcome ? '✅' : '❌'}\n\nContoh:\n${prefix + command} antilink off`)
				}
			}
			break
			case 'ppcouple': {
    try {
        // Ambil data dari sumber JSON
        let response = await fetch('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');
        let data = await response.json();

        // Pilih pasangan secara acak
        let randomCouple = data[Math.floor(Math.random() * data.length)];

        // Kirimkan gambar pasangan (male)
        await faz.sendMessage(m.chat, {
            image: { url: randomCouple.male },
            caption: 'Couple Male\n\`©malaikat botz\`',
        }, { quoted: m });

        // Kirimkan gambar pasangan (female)
        await faz.sendMessage(m.chat, {
            image: { url: randomCouple.female },
            caption: 'Couple Female\n\`©malaikat botz\`',
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengambil data couple.');
    }
}
break
			case 'tagall': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await faz.sendMessage(m.chat, { text: teks, mentions: m.metadata.participants.map(a => a.id) }, { quoted: m })
			}
			break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				faz.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'totag': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
				delete m.quoted.chat
				await faz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await faz.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => m.reply('Gagal'))
			}
			break
			
			// Bot Menu
			case 'owner': {
				await faz.sendContact(m.chat, owner, m);
			}
			break
			case 'profile': case 'profil': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await m.reply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`)
			}
			break
			case 'leaderboard': case 'peringkat': {
				const entries = Object.entries(db.users).sort((a, b) => b[1].uang - a[1].uang).slice(0, 10).map(entry => entry[0]);
				let teksnya = '╭──❍「 *LEADERBOARD* 」❍\n'
				for (let i = 0; i < entries.length; i++) {
					teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].uang.toLocaleString('id-ID')}\n│\n`
				}
				m.reply(teksnya + '╰──────❍');
			}
			break
			case 'req': case 'request': {
				if (!text) return m.reply('Mau Request apa ke Owner?')
				await faz.sendMessage(m.chat, { text: `*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_` }, { quoted: m })
				await faz.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'lapor': case 'report': {
				if (!text) return m.reply('Mau lapor apa ke Owner?')
				await faz.sendMessage(m.chat, { text: `*Laporan Telah Terkirim Ke Owner*\n_Terima Kasih🙏_` }, { quoted: m })
				await faz.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nLapor ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'totalfitur': {
				const total = ((fs.readFileSync('./faz.js').toString()).match(/case '/g) || []).length
				m.reply(`Total Fitur : ${total}`);
			}
			break
			case 'daily': case 'claim': {
				daily(m, db)
			}
			break
			case 'transfer': case 'tf': {
				transfer(m, args, db)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				faz.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'tagme': {
				faz.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break
			case 'runtime': case 'tes': case 'bot': {
				let teks = text.split(' ')
				let set = db.set[botNumber]
				switch(teks[0]) {
					case 'mode':
					if (!isCreator) return m.reply(mess.owner)
					if (teks[1] == 'public') {
						if (faz.public) return m.reply('*Sudah Aktif Sebelumnya*')
						faz.public = set.public = true
						m.reply('*Sukse Change To Public Usage*')
					} else if (teks[1] == 'self') {
						faz.public = set.public = false
						m.reply('*Sukse Change To Self Usage*')
					} else {
						m.reply('Mode self/public')
					}
					break
					case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix':
					if (!isCreator) return m.reply(mess.owner)
					if (teks[1] == 'on') {
						if (set[teks[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[teks[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (teks[1] == 'off') {
						set[teks[0]] = false
						m.reply('*Sukse Change To Off*')
					} else {
						m.reply(`${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
					}
					break
					case 'set': case 'settings':
					let settingsBot = Object.entries(set).map(([key, value]) => {
						let list = key == 'status' ? new Date(value).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
					}).join('\n');
					m.reply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}`);
					break
					default:
					if (!isCreator) return m.reply(mess.owner)
					if (teks[0] || teks[1]) m.reply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Read Sw : *${prefix + command} readsw on/off*\n- Multi Prefix : *${prefix + command} multiprefix on/off*`)
				}
				if (!teks[0] && !teks[1]) return faz.sendMessage(m.chat, { text: `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*` }, { quoted: m })
			}
			break
			case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				m.reply(respon)
			}
			break
			case 'speedtest': case 'speed': {
				m.reply('Testing Speed...')
				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py --share')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) m.reply(stdout)
					if (stderr.trim()) m.reply(stderr)
				}
			}
			break
			case 'afk': {
    let user = db.users[m.sender];
    user.afkTime = +new Date();
    user.afkReason = text;
    m.reply(`@${m.sender.split('@')[0]} sekarang telah AFK\ndengan alasan${text ? ': ' + text : ''}`, { quoted: fkontak });
}
break
			case 'readviewonce': case 'readviewone': case 'rvo': {
			    if (!isPremium) return m.reply(mess.prem)
				if (!m.quoted) return m.reply(`Reply view once message\nContoh: ${prefix + command}`)
				try {
					if (m.quoted.msg.viewOnce) {
						m.quoted.msg.viewOnce = false
						await faz.sendMessage(m.chat, { forward: m.quoted }, { quoted: m })
					} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
						m.quoted.msg.message.audioMessage.viewOnce = false
						m.quoted.msg.message.audioMessage.contextInfo = { forwardingScore: 1, isForwarded: true, mentionedJid: [m.sender] }
						await faz.relayMessage(m.chat, m.quoted.msg.message, {})
					} else {
						m.reply(`Reply view once message\nContoh: ${prefix + command}`)
					}
				} catch (e) {
					m.reply('Media Tidak Valid!')
				}
			}
			break
			case 'inspect': {
				if (!text) return m.reply('Masukkan Link Group!')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return m.reply('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await faz.groupGetInviteInfo(code).then(anu => {
					let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu
					let par = `*Nama Gc* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Jumlah Member* : ${size}\n*Gc Dibuat Tanggal* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*Nama GC Diubah Oleh* : @${subjectOwner.split('@')[0]}` : '*Nama GC Diubah Oleh* : -'}\n${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					faz.sendTextMentions(m.chat, par, m);
				}).catch((res) => {
					if (res.data == 406) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
				});
			}
			break
			case 'addmsg': {
				if (!m.quoted) return m.reply('Reply Pesan Yang Ingin Disave Di Database')
				if (!text) return m.reply(`Contoh : ${prefix + command} file name`)
				let msgs = db.database
				if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`)
			}
			break
			case 'delmsg': case 'deletemsg': {
				if (!text) return m.reply('Nama msg yg mau di delete?')
				let msgs = db.database
				if (text == 'allmsg') {
					db.database = {}
					m.reply('Berhasil menghapus seluruh msg dari list pesan')
				} else {
					if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
					delete msgs[text.toLowerCase()]
					m.reply(`Berhasil menghapus '${text}' dari list pesan`)
				}
			}
			break
			case 'getmsg': {
				if (!text) return m.reply(`Contoh : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
				let msgs = db.database
				if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`)
				await faz.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
				let seplit = Object.entries(db.database).map(([nama, isi]) => { return { nama, message: getContentType(isi) }})
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
				}
				m.reply(teks)
			}
			break
			case 'q': case 'quoted': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				const anu = await m.getQuotedObj()
				if (!anu) return m.reply('Format Tidak Tersedia!')
				if (!anu.quoted) return m.reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
				await faz.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break
			case 'confes': case 'confess': case 'menfes': case 'menfess': {
				if (m.isGroup) return m.reply(mess.private)
				if (menfes[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return m.reply(`Contoh : ${prefix + command} 62xxxx|Nama Samaran`)
				let [teks1, teks2] = text.split`|`
				if (teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await faz.onWhatsApp(tujuan)
					if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
					menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2 ? teks2 : 'Orang',
						waktu: setTimeout(() => {
							if (menfes[m.sender]) m.reply(`_Waktu ${command} habis_`)
							delete menfes[m.sender];
						}, 18000000)
					};
					menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Penerima',
						waktu: setTimeout(() => {
							if (menfes[tujuan]) faz.sendMessage(tujuan, { text: `_Waktu ${command} habis_` });
							delete menfes[tujuan];
						}, 18000000)
					};
					faz.sendMessage(tujuan, { text: `💬Hallo, kamu sekarang sedang menerima pesan menfess dari seseorang >_<\nSabar ya, tunggu sebentar sampai pesan menfess-nya masuk🚀\n\n~ _malaikat botz - WhatsApp Bot_\n\nMau bales menfess? ketik aja apa yang ingin di bales, tar otomatis dikirim kok\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_` });
					m.reply(`_${command} terhubung..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} berlangsung selama 5 jam*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`, { quoted: fkontak });
				} else {
					m.reply(`Masukkan Nomernya!\nContoh : ${prefix + command} 62xxxx|Nama Samaran`)
				}
		}
 break
case 'anonymous': {
    if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!');
    this.anonymous = this.anonymous ? this.anonymous : {};
    let message = `Hi ${await faz.getName(m.sender)} Welcome To Anonymous Chat\n\nKetik\n*${prefix}start* untuk mencari partner\n*${prefix}leave* untuk keluar\n*${prefix}next* untuk lanjut.\n\n\`©malaikat botz\``;
    await faz.sendMessage(m.chat, { text: message });
}
break;

case 'leave': case 'stop': case 'keluar': {
    if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!');
    this.anonymous = this.anonymous ? this.anonymous : {};
    let room = Object.values(this.anonymous).find(room => room.check(m.sender));
    if (!room) {
        let message = `Kamu Sedang Tidak Berada Di Sesi Anonymous. Ketik */start* untuk mencari partner.`;
        await faz.sendMessage(m.chat, { text: message });
        throw false;
    }
    await faz.sendMessage(m.chat, { text: 'Berhasil keluar dari anonymous chat' });
    let other = room.other(m.sender);
    if (other) await faz.sendMessage(other, { text: 'Partner Telah Meninggalkan Sesi Anonymous' });
    delete this.anonymous[room.id];
}
break;

case 'mulai': case 'start': {
    if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!');
    this.anonymous = this.anonymous ? this.anonymous : {};
    if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
        let message = `Kamu Masih Berada Di Dalam Sesi Anonymous. Ketik */keluar* untuk menghentikan sesi Anonymous Anda.`;
        await faz.sendMessage(m.chat, { text: message });
        throw false;
    }
    let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender));
    if (room) {
        await faz.sendMessage(room.a, { text: 'Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n*/next* \_untuk lanjut\_\n*/leave* \_untuk keluar\_' });
        room.b = m.sender;
        room.state = 'CHATTING';
        await faz.sendMessage(room.b, { text: 'Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n*/next* \_untuk lanjut\_\n*/leave* \_untuk keluar\_' });
    } else {
        let id = +new Date();
        this.anonymous[id] = {
            id,
            a: m.sender,
            b: '',
            state: 'WAITING',
            check: function (who = '') {
                return [this.a, this.b].includes(who);
            },
            other: function (who = '') {
                return who === this.a ? this.b : who === this.b ? this.a : '';
            },
        };
        await faz.sendMessage(m.chat, { text: 'Mohon Tunggu Sedang Mencari Partner' });
    }
    break;
}

case 'next': case 'lanjut': {
    if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!');
    this.anonymous = this.anonymous ? this.anonymous : {};
    let romeo = Object.values(this.anonymous).find(room => room.check(m.sender));
    if (!romeo) {
        let message = `Kamu Sedang Tidak Berada Di Sesi Anonymous. Ketik */start* untuk mencari partner.`;
        await faz.sendMessage(m.chat, { text: message });
        throw false;
    }
    let other = romeo.other(m.sender);
    if (other) await faz.sendMessage(other, { text: 'Partner Telah Meninggalkan Sesi Anonymous' });
    delete this.anonymous[romeo.id];
    let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender));
    if (room) {
        await faz.sendMessage(room.a, { text: 'Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n*/next* \_untuk lanjut\_\n*/leave* \_untuk keluar\_' });
        room.b = m.sender;
        room.state = 'CHATTING';
        await faz.sendMessage(room.b, { text: 'Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n*/next* \_untuk lanjut\_\n*/leave* \_untuk keluar\_' });
    } else {
        let id = +new Date();
        this.anonymous[id] = {
            id,
            a: m.sender,
            b: '',
            state: 'WAITING',
            check: function (who = '') {
                return [this.a, this.b].includes(who);
            },
            other: function (who = '') {
                return who === this.a ? this.b : who === this.b ? this.a : '';
            },
        };
        await faz.sendMessage(m.chat, { text: 'Mohon Tunggu Sedang Mencari Partner' });
    }
    break;
}
			case 'readmore': {
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				m.reply(teks1 + readmore + teks2)
			}
			break
			case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!menfes[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				let anu = menfes[m.sender]
				faz.sendMessage(anu.tujuan, { text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}` })
				m.reply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete menfes[anu.tujuan];
				delete menfes[m.sender];
			}
			break
			
			// Tools Menu
			case 'fetch': case 'get': {
				if (!/^https?:\/\//.test(text)) return m.reply('Awali dengan http:// atau https://');
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/text|json|html|plain/.test(res.headers['content-type'])) {
						await m.reply(text)
					} else {
						m.reply(util.format(res.data))
					}
				} catch (e) {
					m.reply(util.format(e))
				}
			}
			break
			case 'toaud': case 'toaudio': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await faz.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			}
			break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await faz.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Convert By malaikat botz-wabot.mp3`}, { quoted : m })
			}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toPTT(media, 'mp4')
				await faz.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
			}
			break
			case 'togif': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await faz.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					faz.sendMessage(m.chat, { video: buffer, gifPlayback: true }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await quoted.download()
					const msg = await generateWAMessageContent({ video: anu }, { upload: faz.waUploadToServer })
					await faz.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
			}
			break
			case 'tourl': {
				try {
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						m.reply('Url : ' + anu.url)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Uploader sedang offline!')
				}
			}
			break
			case 'texttospech': case 'tts': case 'tospech': {
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				faz.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'translate': case 'tr': {
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					m.reply(list_tr)
				} else {
					if (!m.quoted && (!text|| !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, { to: lang, autoCorrect: true })
						m.reply(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
			break
			case 'toqr': case 'qr': {
			    if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)
				m.reply(mess.wait)
				await faz.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Nih Bro' }, { quoted: m })
			}
			break
			case 'tohd': case 'remini': case 'hd': {
				if (/image/.test(mime)) {
					let media = await quoted.download()
					remini(media, 'enhance').then(a => {
						faz.sendMessage(m.chat, { image: a, caption: 'Done' }, { quoted: m });
					}).catch(e => m.reply('Server sedang offline!'));
				} else {
					m.reply(`Kirim/Reply Gambar dengan format\nContoh: ${prefix + command}`)
				}
			}
			break
			case 'ssweb': case 'ss': {
				if (!text) return m.reply(`Contoh: ${prefix + command} https://donatesuport.rf.gd`)
				if (db.users[m.sender].limit < 1) {
    return m.reply('Maaf Kak, limit Anda habis. Untuk membeli limit, ketik *.buy*');
}

// Kurangi limit pengguna hanya jika masih ada sisa limit
db.users[m.sender].limit -= 1; // Mengurangi 1 limit
const sisaLimit = db.users[m.sender].limit; // Mendapatkan sisa limit

// Tampilkan sisa limit setelah dikurangi
m.reply(`1 limit Anda telah terpakai.`);
				try {
					let anu = 'https://' + text.replace(/^https?:\/\//, '')
					await faz.sendMessage(m.chat, { image: { url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu }, caption: 'Done' }, { quoted: m })
				} catch (e) {
					m.reply('Server SS web Sedang Offline!')
				}
			}
			break
			case 'readmore': {
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				m.reply(teks1 + readmore + teks2)
			}
			break
			case 'cuaca': case 'weather': {
				if (!text) return m.reply(`Contoh: ${prefix + command} jakarta`)
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					m.reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					m.reply('Kota Tidak Di Temukan!')
				}
			}
			break
			case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {
				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				let media = await quoted.download()
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					await faz.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else if (/video/.test(mime)) {
					if ((qmsg).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await faz.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else {
					m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
				}
			}
			break
			case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
				try {
					if (!isPremium) return m.reply(mess.prem)
					if (!/image|webp/.test(mime)) return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`)
					if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`)
					m.reply(mess.wait)
					let atas = text.split`|`[0] ? text.split`|`[0] : '-'
					let bawah = text.split`|`[1] ? text.split`|`[1] : '-'
					let media = await quoted.download()
					let mem = await UguuSe(media)
					let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
					await faz.sendAsSticker(m.chat, smeme, m, { packname: packname, author: author })
				} catch (e) {
					m.reply('Server Meme Sedang Offline!')
				}
			}
			break
			case 'emojimix': {
				if (!text) return m.reply(`Contoh: ${prefix + command} 😅+🤔`)
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1 && !emoji2) return m.reply(`Contoh: ${prefix + command} 😅+🤔`)
				try {
					let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
					if (anu.data.results.length < 1) return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`)
					for (let res of anu.data.results) {
						await faz.sendAsSticker(m.chat, res.url, m, { packname: packname, author: author })
					}
				} catch (e) {
					m.reply('Gagal Mix Emoji!')
				}
			}
			break
			case 'qc': case 'quote': case 'fakechat': {
				if (!text && !m.quoted) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					let ppnya = await faz.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
					let res = await quotedLyo(text, m.pushName, ppnya);
					await faz.sendAsSticker(m.chat, Buffer.from(res.result.image, 'base64'), m, { packname: packname, author: author })
				} catch (e) {
					m.reply('Server Create Sedang Offline!')
				}
			}
			break
			case 'brat': {
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					await faz.sendAsSticker(m.chat, { image: { url: 'https://brat.caliphdev.com/api/brat?text=' + (text || m.quoted.text) }}, { quoted: fkontak })
				} catch (e) {
					try {
						await faz.sendMessage(m.chat, { image: { url: 'https://mannoffc-x.hf.space/brat?q=' + (text || m.quoted.text) }}, { quoted: fkontak })
					} catch (e) {
						m.reply('Server Brat Sedang Offline!')
					}
				}
			}
			break
			case 'animasi': {
    const loadingSteps = [
        "⏳ *Memulai malaikat botz...*",
        "⏳ *Memulai malaikat botz...*\n▓░░░░░░░░░░ 10%",
        "⏳ *Memulai malaikat botz...*\n▓▓░░░░░░░░░ 30%",
        "⏳ *Memulai malaikat botz...*\n▓▓▓░░░░░░░░ 40%",
        "⏳ *Memulai malaikat botz...*\n▓▓▓▓░░░░░░░ 50%",,
        "⏳ *Memulai malaikat botz...*\n▓▓▓▓▓░░░░░░ 70%",
        "⏳ *Memulai malaikat botz...*\n▓▓▓▓▓▓▓░░░░ 80%",
        "⏳ *Memulai malaikat botz...*\n▓▓▓▓▓▓▓▓░░░ 90%",
        "✅ *malaikat botz Siap Digunakan!*"
    ];

    const fazbotSteps = [
        "🤖 *malaikat botz adalah bot WhatsApp...*",
        "🤖 *malaikat botz adalah bot WhatsApp...*\n\n⚡ _Cepat, aman, dan handal._",
        "🤖 *malaikat botz adalah bot WhatsApp...*\n\n🔒 _Privasi Anda adalah prioritas kami._",
        "🤖 *malaikat botz adalah bot WhatsApp...*\n\n💬 _Selalu siap membantu Anda kapan saja._",
        "🤖 *malaikat botz mendukung berbagai fitur unggulan seperti...*\n- 🔍 _Pencarian cepat_\n- 🎵 _Pengunduhan media_",
        "🤖 *malaikat botz adalah solusi terbaik untuk WhatsApp Anda.*\n🚀 _Mudah, cepat, dan selalu siaga._",
        "🤖 *malaikat botz hadir untuk mempermudah aktivitas Anda.*\n💡 _Ketik /menu untuk melihat fitur._",
        "🤖 *malaikat botz adalah bot WhatsApp...*\n\n🎉 _Terima kasih telah menggunakan malaikat botz!_",
    ];

    const transformationAnimation = [
        "🤖 *Transformasi malaikat botz Dimulai...*",
        "🤖 *Transformasi malaikat botz Dimulai...*\n⚙️ Mengaktifkan Sistem...",
        "🤖 *Transformasi malaikat botz Dimulai...*\n⚙️🔋 Memuat Energi...",
        "🤖 *Transformasi malaikat botz Dimulai...*\n🔧 *Mengintegrasikan modul tambahan...*",
        "🤖 *Transformasi malaikat botz Dimulai...*\n🚀 *Melakukan uji coba akhir...*",
        "🤖 *Transformasi malaikat botz Dimulai...*\n⚙️🔋🚀 Siap Beroperasi...",
        "🤖 *Selamat Menggunakan malaikat botz!*\n🎉✨\nketik /menu untuk memulai"
    ];

    // Kirim pesan pertama
    let sentMessage = await faz.sendMessage(m.chat, { text: loadingSteps[0] }, { quoted: fkontak });

    // Animasi loading
    for (let i = 1; i < loadingSteps.length; i++) {
        setTimeout(async () => {
            await faz.sendMessage(m.chat, { text: loadingSteps[i], edit: sentMessage.key });
        }, i * 400); 
    }

    // Animasi malaikat botz setelah loading selesai
    setTimeout(async () => {
        for (let i = 0; i < fazbotSteps.length; i++) {
            setTimeout(async () => {
                await faz.sendMessage(m.chat, { text: fazbotSteps[i], edit: sentMessage.key });
            }, i * 800); 
        }

        // Animasi transformasi malaikat botz
        setTimeout(async () => {
            for (let i = 0; i < transformationAnimation.length; i++) {
                setTimeout(async () => {
                    await faz.sendMessage(m.chat, { text: transformationAnimation[i], edit: sentMessage.key });
                }, i * 600); // 0.6 detik per langkah
            }
        }, fazbotSteps.length * 700); // Mulai setelah deskripsi malaikat botz selesai
    }, loadingSteps.length * 500); // Mulai setelah animasi loading selesai
}
break
			case 'trigger': case 'triggered': {
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await faz.sendMessage(m.chat, { document: { url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url }, fileName: 'malaikat botz.gif', mimetype: 'image/gif' }, { quoted: fkontak })
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'fakta': {
    try {
        // Ambil data dari file fakta
        const response = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt');
        const body = await response.text();

        // Pisahkan setiap fakta berdasarkan baris
        const faktaList = body.split('\n');

        // Pilih fakta secara acak
        const randomFakta = faktaList[Math.floor(Math.random() * faktaList.length)];

        // Kirimkan balasan dengan fakta yang dipilih
        m.reply(randomFakta);
    } catch (error) {
        // Tangani kesalahan jika terjadi
        m.reply('Ada yang Error saat mengambil fakta!');
        console.error(error);
    }
}
break
			case 'listsewa': case 'list sewa': case 'sewa list': case 'sewalist': case 'sewa': case 'sewabot': case 'sewa bot': {
faz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
  const packages = [
    {
      title: `*\`Paket Standard\`*`,
      description: "Rp. 10.000/group\n*Masa aktif 10 hari*",
      buttonText: "Buy Paket Standard",
      buttonUrl: "https://wa.me/6285381172407?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+Standard+Bang_"
    },
    {
      title: `*\`Paket Elite\`*`,
      description: "Rp. 12.000/group\n*Masa aktif 14 hari*\nFree User Premium 1 hari",
      buttonText: "Buy Paket Elite",
      buttonUrl: "https://wa.me/6285381172407?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+Elite+Bang_"
    },
    {
      title: `*\`Paket Mewah\`*`,
      description: "Rp. 20.000/group\n*Masa aktif 30 hari*\nFree User Premium 5 hari",
      buttonText: "Buy Paket mewah",
      buttonUrl: "https://wa.me/6285381172407?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+mewah+Bang_"
    },
    {
      title: `*\`Paket dewa\`*`,
      description: "Rp. 30.000/group\n*Masa aktif 2 Bulan*\nPerpanjang 10.000\nFree User Premium 10 hari",
      buttonText: "Buy Paket Dewa",
      buttonUrl: "https://wa.me/6285381172407?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+Dewa+Bang_"
    }
  ];

  const createImage = async (path) => {
    const { imageMessage } = await generateWAMessageContent({
      image: { url: path }
    }, { upload: faz.waUploadToServer });
    return imageMessage;
  };

  const imagePath = './src/media/sewa.jpg'; // Path lokal ke gambar
  const cards = [];
  for (const item of packages) {
    const imageMessage = await createImage(imagePath);
    cards.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: item.description
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `Jika Anda ingin menyewa Fazbot, silakan klik dibawah🙇‍♂️:`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: item.title,
        hasMediaAttachment: true,
        imageMessage
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"${item.buttonText}","url":"${item.buttonUrl}"}`
          }
        ]
      })
    });
  }

  const carouselMessage = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Berikut Adalah List *Sewa fazbot*\nMurah Kann~"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© fazbot"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards
          })
        })
      }
    }
  }, {});
  

  await faz.relayMessage(m.chat, carouselMessage.message, { messageId: carouselMessage.key.id });
  
  faz.sendMessage(m.chat, { react: { text: '💳', key: m.key } });  
}
break;
case 'privacy': case 'privasi': {
    await faz.sendMessage(m.chat, {
        text: `*malaikat botz - WhatsApp Bot*\n
 Kami di sini untuk memberikan pelayanan terbaik melalui WhatsApp. Berikut adalah beberapa hal yang perlu Anda ketahui tentang malaikat botz:

🔒 *Privasi Terjaga*  
Kami sangat menghargai privasi Anda. Semua data yang Anda kirimkan melalui malaikat botz akan dijaga kerahasiaannya dan tidak akan dibagikan ke pihak ketiga.

🔐 *Keamanan Terjamin*  
malaikat botz menggunakan sistem enkripsi untuk melindungi semua percakapan Anda. Anda dapat merasa aman dalam berinteraksi dengan bot ini.

⚡ *Layanan Cepat dan Responsif*  
malaikat botz siap membantu Anda dengan berbagai informasi dan layanan secara cepat dan efisien.

💬 *Tidak Ada Penyalahgunaan Data*  
malaikat botz hanya menggunakan data yang diperlukan untuk memberikan layanan yang Anda minta. Kami tidak mengumpulkan data pribadi Anda untuk tujuan lain.

Terima kasih telah menggunakan *malaikat botz*🤖. Kami siap membantu anda kapan saja!
  
Jika ada hal yang ingin ditanyakan, silakan hubungi🙇‍♂️:
📱 https://wa.me/6285381172407`,
        contextInfo: {
            externalAdReply: {
                title: "malaikat botz-Wabot",
                body: "Privacy malaikat botz",
                mediaType: 2, // 2 untuk tautan
                thumbnailUrl: "https://k.top4top.io/p_3286b64mj0.jpg", // Ubah ke URL thumbnail yang sesuai
                mediaUrl: "https://donatesuport.rf.gd", // URL untuk diakses
            }
        }
    }, { quoted: fkontak });
}
break
case 'tentang':
case 'about':
case 'malaikat botz': {
    const fazbotText = `╭─━──━─≪✦≫─━──━─╮  
  *🤖 malaikat botz - WA-BOT*
╰─━──━─≪✦≫─━──━─╯  

*📌 Apa Itu malaikat botz?*  
\_malaikat botz adalah asisten WhatsApp yang dirancang untuk meningkatkan pengalaman Anda di WhatsApp. Dengan fitur-fiturnya, malaikat botz siap membantu menjawab pertanyaan dengan perintah(/ai), memberikan informasi dengan perintah(/google), dan memenuhi kebutuhan Anda dengan cepat dan efisien dengan perintah(/menu).\_

✨ *Fitur Unggulan malaikat botz:*  
1. *💬 Interaktif & Mudah Digunakan*  
   Menyediakan pengalaman yang menyenangkan dan mudah dalam berkomunikasi.  
2. *🔒 Privasi Terjaga*  
   Semua percakapan Anda **dienkripsi** dan tidak akan dibagikan ke pihak ketiga.  
3. *⚡ Responsif & Handal*  
   malaikat botz siap membantu Anda kapan pun dengan kecepatan terbaik.  

*🌟 Siapa Pembuat malaikat botz?*  
_malaikat botz dikembangkan oleh *Randy*, seorang developer yang menciptakan malaikat botz-wabot\nhttps://youtu.be/RBuk0bWxrfE?si=-APJvjcVeD1hhLLL_.  

*💬 Hubungi Kami:*  
_Jika Anda memiliki pertanyaan, saran, atau kendala, jangan ragu untuk menghubungi_:  
📱 (https://wa.me/6285381172407)  

╭──━──━─≪✦≫─━──━─╮  
       made with ❤️ by Malaikat einstein
╰──━──━─≪✦≫─━──━─╯`;

    const fazbotThumbnailUrl = "https://drive.google.com/uc?id=1-AOR8K26Ndo0b_W0XiXApRoCA6lP6nSq"; // Thumbnail gambar
    const fazbotMediaUrl = "https://donatesuport.rf.gd"; // URL media

    await faz.sendMessage(m.chat, {
        text: fazbotText,
        contextInfo: {
            externalAdReply: {
                title: "✨ malaikat botz - Asisten Digital Anda!",
                body: "📌 Aman | ⚡ Cepat | 💬 Responsif",
                mediaType: 2, // Tipe media (tautan)
                thumbnailUrl: fazbotThumbnailUrl,
                mediaUrl: fazbotMediaUrl,
            },
        },
    }, { quoted: fkontak });
}
break
 case 'buyprem': case 'buypremium': {
faz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
  const packages = [
    {
      title: `*\`Paket Standard\`*`,
      description: "Rp. 10.000\n*Masa aktif 10 hari*",
      buttonText: "Buy Paket Standard",
      buttonUrl: "https://wa.me/6285381172407?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+Standard+Bang_"
    },
    {
      title: `*\`Paket Elite\`*`,
      description: "Rp. 12.000\n*Masa aktif 14 hari*",
      buttonText: "Buy Paket Elite",
      buttonUrl: "https://wa.me/6285381172407?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+Elite+Bang_"
    },
    {
      title: `*\`Paket Mewah\`*`,
      description: "Rp. 20.000\n*Masa aktif 30 hari*",
      buttonText: "Buy Paket mewah",
      buttonUrl: "https://wa.me/6285381172407?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+mewah+Bang_"
    },
    {
      title: `*\`Paket dewa\`*`,
      description: "Rp. 30.000\n*Masa aktif 2 Bulan*\nPerpanjang 10.000",
      buttonText: "Buy Paket Dewa",
      buttonUrl: "https://wa.me/6285381172407?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+Dewa+Bang_"
    }
  ];

  const createImage = async (path) => {
    const { imageMessage } = await generateWAMessageContent({
      image: { url: path }
    }, { upload: faz.waUploadToServer });
    return imageMessage;
  };

  const imagePath = './src/media/prem.jpg'; // Path lokal ke gambar
  const cards = [];
  for (const item of packages) {
    const imageMessage = await createImage(imagePath);
    cards.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: item.description
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `Jika Anda ingin premium bot, silakan klik dibawah🙇‍♂️:`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: item.title,
        hasMediaAttachment: true,
        imageMessage
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"${item.buttonText}","url":"${item.buttonUrl}"}`
          }
        ]
      })
    });
  }

  const carouselMessage = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Berikut Adalah List *Sewa fazbot*\nMurah Kann~"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© fazbot"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards
          })
        })
      }
    }
  }, {});
  

  await faz.relayMessage(m.chat, carouselMessage.message, { messageId: carouselMessage.key.id });
  
  faz.sendMessage(m.chat, { react: { text: '💳', key: m.key } });  
}
break;
			case 'nulis': {
				m.reply(`*Contoh*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
			}
			break
			case 'nuliskiri': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/nulis/images/buku/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					faz.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: fkontak })
				})
			}
			break
			case 'rules':
 await faz.sendMessage(m.chat, { react: { text: "🛡", key: m.key } })
    const fakeThumbnail = 'https://deposit.pictures/media/images/7b/45/32/7b45324b40e04768a04df532028e1196.jpg'; // Ganti dengan URL thumbnail pilihanmu
    const fakeTitle = '🤖 Rules of the Bot 🤖';
    const fakeBody = 'Ketahuilah dan ikuti aturan.';
    const fakeFooter = '🚀 Bot Rules Enforcement';
    const rulesMessage = `
     〘 🤖 *BOT RULES* 🤖 〙
────────────────────┃
 🚫 Jangan melakukan spam perintah bot.
    ➥ *Sanksi*: Ban Permanen
 🔒 Jangan mengirim hal-hal berbau 18+.
    ➥ *Sanksi*: Ban Permanen
 💬 Dilarang menggunakan fitur menfes untuk hal-hal keluar konteks.
    ➥ *Sanksi*: Peringatan/Ban Permanen (Tergantung)
 ⚠️ Dilarang mengirim konten ilegal/berbahaya.
    ➥ *Sanksi*: Ban Permanen
 🛠️ Laporkan bug atau masalah kepada owner.
    ➥ *Sanksi*: +1 Kehormatan
────────────────────//
 ❗❗❗❗❗
⚠️ *Catatan*: Pelanggaran akan langsung diproses oleh sistem kami.
     \_https://fahril99.github.io/rules\_
    `;

    faz.sendMessage(m.chat, {
        text: rulesMessage,
        footer: fakeFooter,
        headerType: 4,
        image: { url: fakeThumbnail },
        contextInfo: {
            externalAdReply: {
                title: fakeTitle,
                body: fakeBody,
                thumbnailUrl: fakeThumbnail,
                sourceUrl: 'https://fahril99.github.io/rules'
            }
        }
    }, { quoted: fkontak });
    break;
			case 'katabijak': {
    try {
        // Ambil data dari sumber kata bijak
        const response = await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/katabijax.txt');
        const kataBody = await response.text();

        // Pisahkan kata bijak berdasarkan baris
        const splitbijak = kataBody.split('\n');

        // Pilih kata bijak secara acak
        const randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)];

        // Kirimkan kata bijak
        m.reply(randombijak);
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengambil data kata bijak.');
    }
}
break
                case 'pantun': {
    try {
        // Ambil data dari URL pantun
        const response = await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/pantun.txt');
        const pantunBody = await response.text();

        // Pisahkan pantun berdasarkan baris
        const splitpantun = pantunBody.split('\n');

        // Pilih pantun secara acak
        const randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)];

        // Kirimkan pantun ke pengguna, ganti "aruga-line" dengan baris baru
        m.reply(randompantun.replace(/aruga-line/g, "\n"));
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengambil data pantun.');
    }
}
break
			case 'nuliskanan': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/nulis/images/buku/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					faz.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: fkontak })
				})
			}
			break
			case 'hdvideo':
case 'hdvid': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? faz.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
if (!isPremium) return m.reply(mess.prem)
  if (!mime || !/video/.test(mime)) {
    return m.reply("Harap reply atau kirimkan video untuk ditingkatkan kualitasnya.");
  }

  m.reply("Proses meningkatkan kualitas video... Mohon tunggu beberapa saat.");

  try {
    const mediaPath = await faz.downloadAndSaveMediaMessage(q, 'input_video');
    const outputPath = './output_hd.mp4';

    const ffmpegCommand = `ffmpeg -i ${mediaPath} -s 1280x720 -c:v libx264 -preset fast -crf 23 -c:a copy ${outputPath}`;
    
    require('child_process').exec(ffmpegCommand, async (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return m.reply("Terjadi kesalahan saat meningkatkan kualitas video.");
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);

      await faz.sendMessage(
        m.chat, 
        { video: { url: outputPath }, caption: "✅ Video berhasil ditingkatkan ke kualitas HD!" }, 
        { quoted: q }
      );

      // Hapus file sementara
      require('fs').unlinkSync(mediaPath);
      require('fs').unlinkSync(outputPath);
    });
  } catch (err) {
    console.error(err);
    m.reply("Terjadi kesalahan saat memproses video.");
  }
}
break;
			case 'reminder': case 'pengingat': {
	if (m.isGroup) return m.reply(mess.private)
    if (!args[0] || !args[1]) return m.reply(`Contoh penggunaan:\n*${prefix + command} 10 menit belajar*\n*${prefix + command} 3 jam makan*\n*${prefix + command} 2 hari olahraga*`);

    let time = parseInt(args[0]);
    if (isNaN(time)) return m.reply(`Masukkan angka yang valid untuk waktu!\nContoh: *${prefix + command} 10 menit belajar*`);

    let unit = args[1].toLowerCase();
    let validUnits = ['menit', 'jam', 'hari'];
    if (!validUnits.includes(unit)) return m.reply(`Gunakan salah satu unit waktu berikut: menit, jam, hari.\nContoh: *${prefix + command} 10 menit belajar*`);

    let multiplier;
    if (unit === 'menit') multiplier = 60000; // 1 menit = 60.000 ms
    else if (unit === 'jam') multiplier = 3600000; // 1 jam = 3.600.000 ms
    else if (unit === 'hari') multiplier = 86400000; // 1 hari = 86.400.000 ms

    let delay = time * multiplier;
    let message = args.slice(2).join(' ');
    if (!message) return m.reply(`Tambahkan pesan pengingat Anda!\nContoh: *${prefix + command} 10 menit belajar*`);

    m.reply(`Pengingat telah diatur selama ${time} ${unit}.\nPesan: "${message}"`);

    setTimeout(() => {
        faz.sendMessage(m.chat, {
            text: `⏰ *Pengingat:*\n${message}\n\n(Dibuat ${time} ${unit} yang lalu)`,
            mentions: [m.sender],
        });
    }, delay);
}
break
			case 'foliokiri': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/nulis/images/folio/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					faz.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: fkontak })
				})
			}
			break
			case 'foliokanan': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/nulis/images/folio/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					faz.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: fkontak })
				})
			}
			break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						m.reply(mess.wait)
						let media = await faz.downloadAndSaveMediaMessage(qmsg)
						let ran = `./database/sampah/${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							faz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
							fs.unlinkSync(ran)
						});
					} else {
						m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
					}
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			case 'filmsearch': case 'carifilm': {
    if (!text) return m.reply('Masukan nama film!')

    m.reply(mess.wait)
    
    async function film(query) {
    return new Promise((resolve, reject) => {
      const https = require('https')
        const url = `https://ruangmoviez.my.id/?s=${query}`
        
        https.get(url, (resp) => {
            let data = ''
            
            resp.on('data', (chunk) => {
                data += chunk
            })
            
            resp.on('end', () => {
                let $ = cheerio.load(data)
                const movies = []

                $('article.item-infinite').each((index, element) => {
                    const movie = {}
                    movie.link = $(element).find('a[itemprop="url"]').attr('href')
                    movie.title = $(element).find('h2.entry-title a').text()
                    movie.relTag = $(element).find('a[rel="category tag"]').map((i, el) => $(el).text()).get()
                    movies.push(movie)
                })

                resolve({
                    status: 200,
                    creator: author,
                    result: movies
                })
            })
        }).on("error", (err) => {
            resolve({
                status: 404,
                msg: err.message
            })
        })
    })
}
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    m.reply(cap)
}
break
			case 'tinyurl': case 'shorturl': case 'shortlink': {
				if (!text || !isUrl(text)) return m.reply(`Contoh: ${prefix + command} https://github.com/faz***/bot***`)
				try {
					let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
					m.reply('Url : ' + anu.data)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			case 'meme': {
if (!isPremium) return m.reply(mess.prem)
let res = await fetch('https://raw.githubusercontent.com/HasamiAini/wabot_takagisan/main/whatsapp%20bot%20takagisan/whatsapp%20bot%20takagisan/lib/memeindo.json')
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
faz.sendMessage(m.chat, { image: { url: url.image }, caption: 'Nih Memeindo' }, { quoted: fkontak})
}
break
			case 'git': case 'gitclone': {
				if (!args[0]) return m.reply(`Contoh: ${prefix + command} https://github.com/faz***/bot**`)
				if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply('Gunakan Url Github!')
				let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || []
				try {
					faz.sendMessage(m.chat, { document: { url: `https://api.github.com/repos/${user}/${repo}/zipball` }, fileName: repo + '.zip', mimetype: 'application/zip' }, { quoted: fkontak }).catch((e) => m.reply(mess.error))
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			
			
			// Ai Menu
			case 'ai': {
    if (!text) return m.reply(`Hallo! ada yang bisa malaikat botz-ai bantu?`);
    try {
        let hasil = await FazbotGpt(text);
        let jawaban = hasil.choices[0].message.content + `\n\n— *malaikat botz-Ai*`;
        m.reply(jawaban);
    } catch (e) {
        try {
            let hasil = await bk9Ai(text);
            let jawaban = hasil.BK9 + `\n\n— *malaikat botz-Ai*`;
            m.reply(jawaban);
        } catch (e) {
            m.reply(pickRandom([
                'Fitur Ai sedang bermasalah!',
                'Tidak dapat terhubung ke ai!',
                'Sistem Ai sedang sibuk sekarang!',
                'Fitur sedang tidak dapat digunakan!'
            ]));
        }
    }
    break;
}
			case 'simi': {
				if (!text) return m.reply(`Contoh: ${prefix + command} hallo simi 🗿`)
				try {
					const hasil = await simi(text)
					m.reply(hasil.success)
				} catch (e) {
					m.reply('Server simi sedang offline!')
				}
			}
			break
			
			// Search Menu
			case 'google': {
				if (!text) return m.reply(`Contoh: ${prefix + command} query`)
				try {
					let anu = await google.search(text);
					let msg = anu.knowledge_panel.metadata.map(({ title, value }) => {
						return `*${title}*\n_${value}_`
					}).join('\n\n');
					if (!anu.knowledge_panel.description && !anu.knowledge_panel.url) return m.reply('Result tidak ditemukan!')
					m.reply(anu.knowledge_panel.description + '\n' + anu.knowledge_panel.url + '\n\n' + msg)
				} catch (e) {
					m.reply('Pencarian Tidak Ditemukan!')
				}
			}
			break
			case 'gimage': {
				if (!text) return m.reply(`Contoh: ${prefix + command} query`)
				gis(text, async (err, result) => {
					if (err) return m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					if (result == undefined) {
						m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					} else if (result.length > 1) {
						let anu = pickRandom(result)
						await faz.sendMessage(m.chat, { image: { url: anu.url }, caption: 'Url : '+ anu.url }, { quoted: fkontak })
					} else m.reply('Gagal Mencari Gambar!')
				});
			}
			break
			case 'play': case 'ytplay': case 'yts': case 'ytsearch': case 'youtubesearch': {
				if (!text) return m.reply(`Contoh: ${prefix + command} dj komang`)
				m.reply(mess.wait)
				try {
					const res = await yts.search(text);
					const hasil = pickRandom(res.all)
					const teksnya = `*● Judul:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*● Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*● Durasi:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*● Link:* ${hasil.url || 'Tidak tersedia'}`;
					await faz.sendMessage(m.chat, { image: { url: hasil.thumbnail }, caption: teksnya }, { quoted: fkontak });
				} catch (e) {
					m.reply('Post not available!')
				}
			}
			break
			break
			case 'pixiv': {
				if (!text) return m.reply(`Contoh: ${prefix + command} hu tao`)
				try {
					let { pixivdl } = require('./lib/pixiv')
					let res = await pixivdl(text)
					m.reply(mess.wait)
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime 
						await faz.sendMessage(m.chat, { [mime.split('/')[0]]: res.media[i], caption, mimetype: mime }, { quoted: fkontak })
					}
				} catch (e) {
					m.reply('Post not available!')
				}
			}
			break
		case 'pinterest': case 'pin': {
        
        if (!text) return await faz.sendMessage(m.chat, { text: `*Example:* ${prefix + command} anime` }, { quoted: fkontak });
         if (db.users[m.sender].limit < 1) {
    return m.reply('Maaf Kak, limit Anda habis. Untuk membeli limit, ketik *.buy*');
}

// Kurangi limit pengguna hanya jika masih ada sisa limit
db.users[m.sender].limit -= 1; // Mengurangi 1 limit
const sisaLimit = db.users[m.sender].limit; // Mendapatkan sisa limit
        await faz.sendMessage(m.chat, { text: mess.wait }, { quoted: fkontak });

        async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent({
                image: {
                    url
                }
            }, {
                upload: faz.waUploadToServer
            });
            return imageMessage;
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        let push = [];
        try {
            let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
            let res = data.resource_response.data.results.map(v => v.images.orig.url);

            if (!res.length) {
                return await faz.sendMessage(m.chat, { text: `Pencarian Tidak Ditemukan` }, { quoted: fkontak });
            }

            shuffleArray(res); // Mengacak array
            let ult = res.splice(0, 5); // Mengambil 5 gambar pertama dari array yang sudah diacak
            let i = 1;

            for (let lucuy of ult) {
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Image ke - ${i++}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                        text: global.wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: 'Hasil.',
                        hasMediaAttachment: true,
                        imageMessage: await createImage(lucuy)
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
                            }
                        ]
                    })
                });
            }

            const bot = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `\`${text}\` Max *5* Image`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "© fazbot"
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                hasMediaAttachment: false
                            }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: [
                                    ...push
                                ]
                            })
                        })
                    }
                }
            }, {});

            await faz.relayMessage(m.chat, bot.message, {
                messageId: bot.key.id
            });

            db.users[m.sender].limit -= 1;  // Mengurangi 1 limit
        } catch (err) {
            await faz.sendMessage(m.chat, { text: `Pencarian Tidak Ditemukan` }, { quoted: fkontak });
        }
    }
break
			case 'wallpaper': {
				if (!text) return m.reply(`Contoh: ${prefix + command} hu tao`)
				try {
					let anu = await wallpaper(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await faz.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`}, { quoted: fkontak })
					}
				} catch (e) {
					m.reply('Server wallpaper sedang offline!')
				}
			}
			break
			case 'ringtone': {
				if (!text) return m.reply(`Contoh: ${prefix + command} black rover`)
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await faz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: fkontak })
			}
			break
			case 'npm': case 'npmjs': {
				if (!text) return m.reply(`Contoh: ${prefix + command} axios`)
				let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
				let { objects } = await res.json()
				if (!objects.length) return m.reply('Pencarian Tidak di temukan')
				let txt = objects.map(({ package: pkg }) => {
					return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
				}).join`\n\n`
				m.reply(txt)
			}
			break
			case 'style': {
				if (!text) return m.reply(`Contoh: ${prefix + command} faz`)
				let anu = await styletext(text)
				let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
				m.reply(txt)
			}
			break
			case 'spotify': case 'spotifysearch': {
				if (!text) return m.reply(`Contoh: ${prefix + command} alan walker alone`)
				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Server Search Offline!')
				}
			}
			break
			// Downloader Menu untuk ytmp3 & mp4 ga work di run di panel karena api panel ga support ip youtube kalo mau work tambahin cookie panel di scmu tapi ketika run di termux work aja
			case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				if (!text) return m.reply(`Contoh: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp3(text);
					await faz.sendMessage(m.chat, {
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: hasil.channel,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.thumb,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, { quoted: fkontak });
				} catch (e) {
					try {
						const hasil = await multiDownload(text);
						const aud_nya = await getBuffer(hasil[0].path)
						const audio = await toAudio(aud_nya, 'mp4')
						await faz.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: fkontak });
					} catch (e) {
						try {
							await faz.sendFileUrl(m.chat, 'https://mxmxk-helper.hf.space/yt/dl?url=' + text + '&type=audio', '', m)
						} catch (e) {
							try {
								let hasil = await fetchJson(api('hitori','/download/youtube', { url: text }, 'apikey'))
								await faz.sendFileUrl(m.chat, hasil.result.resultUrl.audio[0].download, hasil.result.title, m)
							} catch (e) {
								m.reply('Gagal Mendownload Audio!')
							}
						}
					}
				}
			}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!text) return m.reply(`Contoh: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp4(text);
					await faz.sendMessage(m.chat, { video: hasil.result, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
				} catch (e) {
					try {
						const hasil = await multiDownload(text);
						await faz.sendMessage(m.chat, { video: { url: hasil[0].path }}, { quoted: m });
					} catch (e) {
						try {
							await faz.sendFileUrl(m.chat, 'https://mxmxk-helper.hf.space/yt/dl?url=' + text, '', m)
						} catch (e) {
							try {
								let hasil = await fetchJson(api('hitori','/download/youtube', { url: text }, 'apikey'))
								await faz.sendFileUrl(m.chat, hasil.result.resultUrl.video[0].download, hasil.result.title, m)
							} catch (e) {
								m.reply('Gagal Mendownload Video!')
							}
						}
					}
				}
			}
			break
			case 'trackip': {
  if (!isPremium) return m.reply(mess.prem)
  if (!text) return m.reply(`*Contoh:* ${prefix + command} 112.90.150.204`);

  try {
    const fetch = require('node-fetch');
    const response = await fetch(`https://ipwho.is/${text}`);
    const res = await response.json();

    if (!res.success) throw new Error(`IP ${text} tidak ditemukan!`);

    // Fungsi untuk memformat data IP
    const formatIPInfo = (info) => {
      return `
*Informasi IP*
• IP: ${info.ip || 'N/A'}
• Status: ${info.success ? 'Berhasil' : 'Gagal'}
• Tipe: ${info.type || 'N/A'}
• Kontinen: ${info.continent || 'N/A'}
• Kode Kontinen: ${info.continent_code || 'N/A'}
• Negara: ${info.country || 'N/A'}
• Kode Negara: ${info.country_code || 'N/A'}
• Wilayah: ${info.region || 'N/A'}
• Kode Wilayah: ${info.region_code || 'N/A'}
• Kota: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Ya' : 'Tidak'}
• Kode Pos: ${info.postal || 'N/A'}
• Kode Telepon: ${info.calling_code || 'N/A'}
• Ibu Kota: ${info.capital || 'N/A'}
• Batas Negara: ${info.borders || 'N/A'}
• Bendera:
  - Gambar: ${info.flag?.img || 'N/A'}
  - Emoji: ${info.flag?.emoji || 'N/A'}
  - Unicode Emoji: ${info.flag?.emoji_unicode || 'N/A'}
• Koneksi:
  - ASN: ${info.connection?.asn || 'N/A'}
  - Organisasi: ${info.connection?.org || 'N/A'}
  - ISP: ${info.connection?.isp || 'N/A'}
  - Domain: ${info.connection?.domain || 'N/A'}
• Zona Waktu:
  - ID: ${info.timezone?.id || 'N/A'}
  - Singkatan: ${info.timezone?.abbr || 'N/A'}
  - Daylight Saving: ${info.timezone?.is_dst ? 'Ya' : 'Tidak'}
  - Offset: ${info.timezone?.offset || 'N/A'}
  - UTC: ${info.timezone?.utc || 'N/A'}
  - Waktu Saat Ini: ${info.timezone?.current_time || 'N/A'}
`;
    };

    // Mengirim lokasi (latitude dan longitude)
    await faz.sendMessage(
      m.chat,
      { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } },
      { ephemeralExpiration: 604800 }
    );

    // Memberikan jeda sebelum mengirim detail
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(2000);

    // Mengirim detail informasi IP
    m.reply(formatIPInfo(res));
  } catch (e) {
    console.error("Error saat melacak IP:", e.message);
    m.reply(`Error: Tidak dapat mengambil data untuk IP ${text}`);
  }
}
break;
			
			case 'cekmenarik': {
    if (args.length < 5) {
        return m.reply(`Cara penggunaan:\n*${prefix + command} [berat] [tinggi] [usia] [jenis kelamin] [warna kulit] [pendapatan (wajib untuk usia 18+)]*\n\nJenis Kelamin:\n- pria\n- wanita\n\nWarna Kulit:\n- putih\n- coklat\n- hitam\n\n📊 Tingkatan Menarik:\n- 🟥 Tidak Menarik: Skor <= 4\n- 🟧 Menarik: Skor 5-7\n- 🟩 Sangat Menarik: Skor >= 8\n\nContoh untuk usia di bawah 18: *${prefix + command} 50 160 16 pria putih*\nContoh untuk usia 18+: *${prefix + command} 70 175 25 pria putih 5000000*`);
    }

    let berat = parseFloat(args[0]);
    let tinggi = parseFloat(args[1]);
    let usia = parseInt(args[2]);
    let jenisKelamin = args[3]?.toLowerCase();
    let warnaKulit = args[4]?.toLowerCase();
    let pendapatan = usia >= 18 ? parseInt(args[5]) : 0; // Pendapatan wajib untuk usia 18+

    if (isNaN(berat) || isNaN(tinggi) || isNaN(usia)) return m.reply(`Pastikan berat, tinggi, dan usia adalah angka yang valid!`);

    if (!["pria", "wanita"].includes(jenisKelamin)) {
        return m.reply(`Jenis kelamin harus salah satu dari: pria, wanita.`);
    }

    if (!["putih", "coklat", "hitam"].includes(warnaKulit)) {
        return m.reply(`Warna kulit harus salah satu dari: putih, coklat, hitam.`);
    }

    if (usia >= 18 && (!args[5] || isNaN(pendapatan))) {
        return m.reply(`Pendapatan wajib diisi untuk usia 18 tahun atau lebih dan harus berupa angka yang valid!`);
    }

    if (usia < 9) {
        return m.reply(`👶 Kamu masih bayi, jangan ya dekk!`);
    }

    // Penilaian awal
    let score = 0;
    let tinggiIdealPria = usia < 18 ? 160 : 170;
    let tinggiIdealWanita = usia < 18 ? 150 : 160;

    // Penilaian tinggi badan (sangat berpengaruh untuk pria)
    if (jenisKelamin === "pria") {
        if (tinggi >= tinggiIdealPria + 5) {
            score += 5; // Sangat menarik
        } else if (tinggi >= tinggiIdealPria) {
            score += 4; // Menarik
        } else if (tinggi >= tinggiIdealPria - 5) {
            score += 2; // Cukup
        } else {
            score -= 3; // Tidak menarik
        }
    } else if (jenisKelamin === "wanita") {
        if (tinggi >= tinggiIdealWanita) {
            score += 3; // Menarik
        } else if (tinggi >= tinggiIdealWanita - 5) {
            score += 1; // Masih menarik
        } else {
            score -= 2; // Di bawah rata-rata
        }
    }

    // Penilaian berat badan (sangat berpengaruh untuk wanita)
    let beratIdealMin = 0.9 * (tinggi - 100);
    let beratIdealMax = 1.1 * (tinggi - 100);
    if (jenisKelamin === "wanita") {
        if (berat < beratIdealMin) {
            score -= 3; // Terlalu kurus
        } else if (berat > beratIdealMax) {
            score -= 2; // Terlalu gemuk
        } else {
            score += 5; // Berat ideal
        }
    } else if (jenisKelamin === "pria") {
        if (berat < 50) score -= 2; // Berat terlalu rendah
    }

    // Penilaian warna kulit (berpengaruh untuk semua)
    if (warnaKulit === "putih") {
        score += 2;
    } else if (warnaKulit === "coklat") {
        score += 1;
    } else if (warnaKulit === "hitam") {
        score -= 1;
    }

    // Penilaian pendapatan (sangat berpengaruh untuk pria usia 18+)
    if (usia >= 18) {
        if (jenisKelamin === "pria") {
            if (pendapatan < 2000000) {
                score -= 5; // Pendapatan sangat rendah
            } else if (pendapatan >= 10000000) {
                score += 5; // Pendapatan sangat tinggi
            } else if (pendapatan >= 5000000) {
                score += 3; // Pendapatan menengah
            } else {
                score += 1; // Pendapatan memadai
            }
        } else if (jenisKelamin === "wanita") {
            if (pendapatan < 2000000) {
                score -= 2; // Tidak terlalu berpengaruh untuk wanita
            }
        }
    }

    // Peringkat akhir
    let rating;
    let pesan;
    if (score <= 4) {
        rating = "🟥 Tidak Menarik";
        pesan = "Jangan berkecil hati! Selalu ada ruang untuk berkembang dan meningkatkan diri!";
    } else if (score <= 7) {
        rating = "🟧 Menarik";
        pesan = "Kamu sudah cukup menarik! Teruslah menjaga diri dan kepercayaan dirimu.";
    } else {
        rating = "🟩 Sangat Menarik";
        pesan = "Selamat! Kamu sangat menarik! Jangan lupa untuk tetap rendah hati dan ramah kepada orang lain.";
    }

    m.reply(`💡 *Hasil Penilaian Menarik*\n\n📊 Berat: ${berat} kg\n📏 Tinggi: ${tinggi} cm (Rata-rata: ${jenisKelamin === "pria" ? tinggiIdealPria : tinggiIdealWanita} cm)\n🎂 Usia: ${usia} tahun\n👤 Jenis Kelamin: ${jenisKelamin}\n🎨 Warna Kulit: ${warnaKulit}${usia >= 18 ? `\n💰 Pendapatan: Rp${pendapatan.toLocaleString()}` : ""}\n\n🧮 Skor: ${score}\n🔰 Peringkat: ${rating}\n\n✨ ${pesan}`);
}
break

			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!text) return m.reply(`Contoh: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					if (hasil && hasil.size_nowm) {
						await faz.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
					} else {
						for (let i = 0; i < hasil.data.length; i++) {
							await faz.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
						}
					}
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!text) return m.reply(`Contoh: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					await faz.sendMessage(m.chat, {
						audio: { url: hasil.music_info.url },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, { quoted: m });
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!text) return m.reply(`Contoh: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				if (db.users[m.sender].limit < 1) {
    return m.reply('Maaf Kak, limit Anda habis. Untuk membeli limit, ketik *.buy*');
}

// Kurangi limit pengguna hanya jika masih ada sisa limit
db.users[m.sender].limit -= 1; // Mengurangi 1 limit
const sisaLimit = db.users[m.sender].limit; // Mendapatkan sisa limit

// Tampilkan sisa limit setelah dikurangi
m.reply(`1 limit Anda telah terpakai.`);
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await faz.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'myip': {

    let axios = require('axios');

    // Memanggil API untuk mendapatkan IP publik
    axios.get('https://api.ipify.org?format=json')
        .then((response) => {
            const myIp = response.data.ip; // Mendapatkan IP dari response
            m.reply(`🔎 *My public IP address is:* ${myIp}`);
        })
        .catch((error) => {
            console.error(error);
            m.reply('❌ Gagal mendapatkan IP publik.');
        });
}
break;
			case 'ranking': {
    if (!m.isGroup) return m.reply('Fitur ini hanya tersedia di grup!');

    // Baca file database aktivitas
    const activity = JSON.parse(fs.readFileSync(activityFile, 'utf8'));
    let groupActivity = activity[m.chat] || {};

    if (Object.keys(groupActivity).length === 0) {
        return m.reply('Belum ada aktivitas tercatat di grup ini.');
    }

    // Urutkan aktivitas berdasarkan jumlah pesan
    let ranking = Object.entries(groupActivity)
        .sort((a, b) => b[1] - a[1])
        .map(([id, count], i) => `${i + 1}. @${id.split('@')[0]} - ${count} pesan`);

    let message = `📊 *Peringkat Aktivitas Grup* 📊\n\n${ranking.join('\n')}`;
    faz.sendMessage(m.chat, { text: message, mentions: Object.keys(groupActivity) });
}
break
			case 'mediafire': {
				if (!text) return m.reply(`Contoh: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`)
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('Url Invalid!')
				try {
					const anu = await mediafireDl(text)
					await faz.sendMedia(m.chat, anu.link, decodeURIComponent(anu.name), `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${decodeURIComponent(anu.name)}\n*${setv} Size* : ${anu.size}`, m)
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
			break
			case 'girlanime': {
  if (!isPremium) return m.reply("Fitur Khusus Premium!!!")
  if (!text) return m.reply('Contoh: .girlanime hutao genshin impact, modern')
  await faz.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } })
  m.reply("Tunggu 30 detik...")
  try {
    let response = await axios.get(`https://love.neekoi.me/kivotos?text=${encodeURIComponent(text)}`);
    let imageURL = response.data?.url || `https://love.neekoi.me/kivotos?text=${encodeURIComponent(text)}`;
    await faz.sendMessage(m.chat, { image: { url: imageURL }, caption: `𝗣𝗿𝗼𝗺𝗽𝘁𝘀:\n${text}` }, { quoted: m })
  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err.message}`)
  }
  await faz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
}
break
			case 'spotifydl': {
				if (!text) return m.reply(`Contoh: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`)
				if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) return m.reply('Url Invalid!')
				try {
					await faz.sendMedia(m.chat, 'https://spotifyapi.caliphdev.com/api/download/track?url=' + text, '','', m)
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
			break
			
			// Quotes Menu
			case 'motivasi': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/motivasi.json'));
				m.reply(hasil)
			}
			break
			case 'bijak': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bijak.json'));
				m.reply(hasil)
			}
			break
			case 'dare': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/dare.json'));
				m.reply(hasil)
			}
			break
			case 'quotes': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/quotes.json'));
				m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`)
			}
			break
			case 'info': case 'infobot': {
   await faz.sendMessage(m.chat, { react: { text: "ℹ️", key: m.key } })
    let pesan = `🌟 *Informasi Bot* 🌟\n\n` +
                `🤖 *Mau main bot?* Ketik *.menu*\n` +
                `💸 *Mau sewa bot?* Ketik *.sewa*\n` +
                `🏆 *Mau beli premium?* Ketik *.buyprem*\n` +
                `❓ *Manfaat premium?* Ketik *.manfaat*\n` +
                `📜 *Mau script?* Ketik *.sc*\n\_Jika limit habis maka ketik \`.buy\` kalau uang habis maka bermain fitur game untuk memperoleh uang, namun jika ingin unlimited limit anda bisa membeli *premium*\_\n\n\n\_\`Fazbot-WhatsApp-Bot\`\_`;

    try {
        let fakeReply = {
            key: {
                fromMe: false,
                participant: '999999999@s.whatsapp.net',  // Nomor fake
                remoteJid: "status@broadcast"
            },
            message: {
                extendedTextMessage: {
                    text: "✨ Info Fazbot ✨",
                    matchedText: "✨ Info Fazbot ✨",
                }
            }
        };

        await faz.sendMessage(m.chat, { text: pesan }, { quoted: fakeReply });

    } catch (error) {
        console.error("Gagal memuat gambar:", error.message);
        await faz.sendMessage(m.chat, { text: pesan });
    }
}
break;
			case 'truth': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/truth.json'));
				m.reply(`_${hasil}_`)
			}
			break
			case 'renungan2': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/renungan.json'));
				m.reply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: hasil,
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
						}
					}
				});
			}
			break
			case 'bucin': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bucin.json'));
				m.reply(hasil)
			}
			break
			// Random Menu
			case 'coffe': case 'kopi': {
				await faz.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m)
			}
			break
			
			// Anime Menu
			case 'waifu': {
				try {
				   
					if (text == 'nsfw') {
						const res = await fetchJson('https://api.waifu.pics/nsfw/waifu')
						await faz.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/waifu')
						await faz.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					}
					if (db.users[m.sender].limit < 1) {
    return m.reply('Maaf Kak, limit Anda habis. Untuk membeli limit, ketik *.buy*');
}

// Kurangi limit pengguna hanya jika masih ada sisa limit
db.users[m.sender].limit -= 1; // Mengurangi 1 limit
const sisaLimit = db.users[m.sender].limit; // Mendapatkan sisa limit

// Tampilkan sisa limit setelah dikurangi
m.reply(`1 limit Anda telah terpakai.`);
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
			break
			case 'neko': {
				try {
				    if (!isPremium) return m.reply(mess.prem)
					if (text == 'nsfw') {
						const res = await fetchJson('https://api.waifu.pics/nsfw/neko')
						await faz.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/neko')
						await faz.sendFileUrl(m.chat, res.url, 'Random Neko', m)
					}
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
			break
			
			// Fun Menu
			case 'dadu': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				await faz.sendAsSticker(m.chat, media.url, m, { packname: packname, author: author, isAvatar: 1 })
			}
			break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
				if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
			break
			case 'bisakah': {
				if (!text) return m.reply(`Contoh : ${prefix + command} saya menang?`)
				let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				m.reply(`*Bisakah ${text}*\nJawab : ${keh}`)
			}
			break
			case 'apakah': {
				if (!text) return m.reply(`Contoh : ${prefix + command} saya bisa menang?`)
				let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Mungkin Tidak','Mungkin Iya','Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				m.reply(`*${command} ${text}*\nJawab : ${kah}`)
			}
			break
			case 'kapan': case 'kapankah': {
				if (!text) return m.reply(`Contoh : ${prefix + command} saya menang?`)
				let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Ntahlah','Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				m.reply(`*${command} ${text}*\nJawab : ${koh}`)
			}
			break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) return m.reply(`Contoh : ${prefix + command} boleh pinjam 100?`)
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`)
			}
			break
			case 'cekmati': {
				if (!text) return m.reply(`Contoh : ${prefix + command} nama lu`)
				let teksnya = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let { data } = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`);
				m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
			}
			break
			case 'ceksifat': {
				let sifat_a = ['Bijak','Sabar','Kreatif','Humoris','Mudah bergaul','Mandiri','Setia','Jujur','Dermawan','Idealis','Adil','Sopan','Tekun','Rajin','Pemaaf','Murah hati','Ceria','Percaya diri','Penyayang','Disiplin','Optimis','Berani','Bersyukur','Bertanggung jawab','Bisa diandalkan','Tenang','Kalem','Logis']
				let sifat_b = ['Sombong','Minder','Pendendam','Sensitif','Perfeksionis','Caper','Pelit','Egois','Pesimis','Penyendiri','Manipulatif','Labil','Penakut','Vulgar','Tidak setia','Pemalas','Kasar','Rumit','Boros','Keras kepala','Tidak bijak','Pembelot','Serakah','Tamak','Penggosip','Rasis','Ceroboh','Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				m.reply(teks)
			}
			break
			case 'cekkhodam': {
				if (!text) return m.reply(`Contoh : ${prefix + command} nama lu`)
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/cekkhodam.json'));
				m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`)
			}
			break
			case 'rate': case 'nilai': {
				m.reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`)
			}
			break
			case 'addsewa': {
    console.log('Command .addsewa dipanggil');
    if (!isCreator) return m.reply(mess.owner);
    if (!m.isGroup) return m.reply(mess.group);
    if (!args[0] || !/^\d+[dhm]$/.test(args[0])) 
        return m.reply('Masukkan durasi sewa dengan format yang benar, misalnya: .addsewa 1d (untuk 1 hari), 1h (untuk 1 jam), atau 1m (untuk 1 menit).');

    // Periksa apakah grup sudah memiliki sewa
    if (sewa.checkSewaGroup(m.chat, sewaDb)) {
        const expiredTime = sewa.getSewaExpired(m.chat, sewaDb);
        const timeRemaining = expiredTime - Date.now();
        
        // Menghitung sisa waktu
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // 1 hari = 86400000 ms
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return m.reply(`Grup ini sudah disewa hingga ${new Date(expiredTime).toLocaleString()}.\nSisa waktu: ${days} hari, ${hours} jam, ${minutes} menit, dan ${seconds} detik.`);
    }

    // Tambahkan sewa jika belum ada
    let duration = args[0];
    
    // Menyimpan sewa grup dan menghitung waktu sewa
    sewa.addSewaGroup(m.chat, duration, sewaDb);
    
    // Konversi durasi menjadi hari, jam, menit, dan detik
    let days = 0, hours = 0, minutes = 0, seconds = 0;
    const number = parseInt(duration);
    const unit = duration[duration.length - 1];

    if (unit === 'd') {
        days = number;
    } else if (unit === 'h') {
        hours = number;
    } else if (unit === 'm') {
        minutes = number;
    }

    // Menghitung total detik dari durasi yang diberikan
    if (unit === 'd') {
        seconds = number * 24 * 60 * 60; // Menghitung detik dari hari
    } else if (unit === 'h') {
        seconds = number * 60 * 60; // Menghitung detik dari jam
    } else if (unit === 'm') {
        seconds = number * 60; // Menghitung detik dari menit
    }

    m.reply(`Sukses menyewa bot di grup ini selama ${days} hari, ${hours} jam, ${minutes} menit`);
}
break;
			case 'jodohku': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jodoh = pickRandom(member)
				m.reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`);
			}
			break
			case 'jadian': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`);
			}
			break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Contoh : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				faz.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
			
			// Game Menu
			case 'slot': {
				await gameSlot(faz, m, db)
			}
			break
			case 'casino': {
				await gameCasinoSolo(faz, m, prefix, db)
			}
			break
			case 'rampok': case 'merampok': {
				await gameMerampok(m, db)
			}
			break
			case 'begal': {
				await gameBegal(faz, m, db)
			}
			break
			case 'suitpvp': case 'suit': {
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
				if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				suit[id] = {
					chat: m.reply(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (suit[id]) m.reply(`_Waktu suit habis_`)
						delete suit[id]
					}, 60000), poin, poin_lose, timeout
				}
			}
			break
			case 'spamcode': {
  if (!isPremium) return m.reply(mess.prem)
  if (!text) return m.reply(`*Contoh:* ${prefix + command} +628xxxxxx|150`);
      if (userCooldown && now < userCooldown) {
        const remaining = Math.ceil((userCooldown - now) / (60 * 1000)); // Waktu sisa dalam menit
        return m.reply(`⚠️ Harap tunggu ${remaining} menit lagi sebelum menggunakan perintah ini.`, { quoted: fkontak });
    }

    // Set cooldown untuk pengguna (1 jam ke depan)
    cooldowns[m.sender] = now + 3600000; // 1 jam dalam milidetik
    global.cooldowns = cooldowns; // Menyimpan cooldown kembali ke global
  
  m.reply("Mohon tunggu, spam pairing code sedang berjalan...");

  try {
    let [target, count = "200"] = text.split("|").map(x => x.trim());
    count = parseInt(count);

    // Validasi input
    if (!/^\+?\d{10,15}$/.test(target)) {
      return m.reply("Masukkan nomor yang valid dengan format internasional (contoh: +628xxx).");
    }
    if (isNaN(count) || count <= 0 || count > 500) {
      return m.reply("Jumlah spam harus antara 1-500.");
    }

    // Import Baileys
    const { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
    const { state, saveCreds } = await useMultiFileAuthState('spam-session');
    const { version } = await fetchLatestBaileysVersion();
    const pino = require("pino");

    // Membuat koneksi WA Socket
    const socket = await makeWaSocket({
      auth: state,
      version,
      logger: pino({ level: 'silent' }) // Mengurangi log untuk spam
    });

    // Melakukan spam pairing
    for (let i = 0; i < count; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Delay 1.5 detik per request
      const pairingCode = await socket.requestPairingCode(target);
      console.log(`_Berhasil Spam Pairing Code - Nomor: ${target} - Code: ${pairingCode}_`);
    }

    m.reply(`✅ Spam pairing code berhasil dilakukan ke ${target} sebanyak ${count} kali.`);
  } catch (error) {
    console.error("Error saat melakukan spam pairing:", error);
    m.reply(`✅ Spam pairing code berhasil dilakukan`);
  }
}
break;
			case 'ttc': case 'ttt': case 'tictactoe': {
				let TicTacToe = require('./lib/tictactoe');
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await faz.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await faz.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (tictactoe[roomnya.id]) m.reply(`_Waktu ${command} habis_`)
							delete tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					faz.sendMessage(m.chat, { text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					tictactoe[room.id] = room
				}
			}
			break
			case 'akinator': {
				if (text == 'start') {
				    if (m.isGroup) return m.reply(mess.private)
					if (akinator[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					akinator[m.sender] = new Akinator({ region: 'id', childMode: false });
					await akinator[m.sender].start()
					let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`)
					akinator[m.sender].key = key.id
					akinator[m.sender].waktu = setTimeout(() => {
						if (akinator[m.sender]) m.reply(`_Waktu ${command} habis_`)
						delete akinator[m.sender];
					}, 3600000)
				} else if (text == 'end') {
					if (!akinator[m.sender]) return m.reply('Kamu tidak Sedang bermain Akinator!')
					delete akinator[m.sender];
					m.reply('Sukses Mengakhiri sessi Akinator')
				} else m.reply(`Contoh : ${prefix + command} start/end`)
			}
			break
			case 'tebakbom': {
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				tebakbom[m.sender] = {
					petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (tebakbom[m.sender]) m.reply(`_Waktu ${command} habis_`)
						delete tebakbom[m.sender];
					}, 120000)
				}
				m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
			}
			break
			case 'delsewa': {
    if (!isCreator) return m.reply(mess.owner);
    if (!m.isGroup) return m.reply(mess.group);
    
    if (!isCreator) 
        return m.reply(mess.owner, { quoted: fkontak });
    
    const posisi = sewaDb.findIndex((data) => data.id === m.chat); // Gunakan m.chat langsung
    
    if (posisi !== -1) {
        sewaDb.splice(posisi, 1); // Menghapus data grup dari database
        fs.writeFileSync('./database/sewa.json', JSON.stringify(sewaDb, null, 2)); // Simpan perubahan
        m.reply(`Sukses menghapus masa sewa grup ini.`, { quoted: fkontak });
    } else {
        m.reply('Grup ini tidak terdaftar dalam sistem sewa.', { quoted: fkontak });
    }
}
break;
			case 'tekateki': {
				if (iGame(tekateki, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tekateki.json'));
				let { key } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
			break
			case 'kalori': case 'cekkalori': {
    if (args.length < 5) return m.reply(`Cara penggunaan:\n*${prefix + command} [berat] [tinggi] [usia] [aktivitas] [jenis kelamin]*\n\nAktivitas:\n- rendah\n- sedang\n- tinggi\n\nJenis Kelamin:\n- pria\n- wanita\n\nContoh: *${prefix + command} 70 175 25 sedang pria*`);
    
    let berat = parseFloat(args[0]);
    let tinggi = parseFloat(args[1]);
    let usia = parseInt(args[2]);
    let aktivitas = args[3].toLowerCase();
    let jenisKelamin = args[4]?.toLowerCase();

    if (isNaN(berat) || isNaN(tinggi) || isNaN(usia)) return m.reply(`Pastikan berat, tinggi, dan usia adalah angka yang valid!`);
    
    if (!["rendah", "sedang", "tinggi"].includes(aktivitas)) {
        return m.reply(`Tingkat aktivitas harus salah satu dari: rendah, sedang, tinggi.`);
    }

    if (!["pria", "wanita"].includes(jenisKelamin)) {
        return m.reply(`Jenis kelamin harus salah satu dari: pria, wanita.`);
    }

    // Rumus BMR berdasarkan jenis kelamin
    let bmr;
    if (jenisKelamin === "pria") {
        bmr = 10 * berat + 6.25 * tinggi - 5 * usia + 5; // Rumus untuk pria
    } else {
        bmr = 10 * berat + 6.25 * tinggi - 5 * usia - 161; // Rumus untuk wanita
    }

    // Faktor aktivitas
    let faktorAktivitas;
    if (aktivitas === "rendah") faktorAktivitas = 1.2;
    if (aktivitas === "sedang") faktorAktivitas = 1.55;
    if (aktivitas === "tinggi") faktorAktivitas = 1.9;

    let totalKalori = Math.round(bmr * faktorAktivitas);

    m.reply(`💡 *Hasil Perhitungan Kalori*\n\n📊 Berat: ${berat} kg\n📏 Tinggi: ${tinggi} cm\n🎂 Usia: ${usia} tahun\n⚡ Aktivitas: ${aktivitas}\n👤 Jenis Kelamin: ${jenisKelamin}\n\n🔥 *Kebutuhan Kalori Harian*: ${totalKalori} kalori.`);
}
break;
case 'igdl': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
	  if (db.users[m.sender].limit < 1) {
    return m.reply('Maaf Kak, limit Anda habis. Untuk membeli limit, ketik *.buy*');
}

// Kurangi limit pengguna hanya jika masih ada sisa limit
db.users[m.sender].limit -= 1; // Mengurangi 1 limit
const sisaLimit = db.users[m.sender].limit; // Mendapatkan sisa limit

// Tampilkan sisa limit setelah dikurangi
m.reply(`1 limit Anda telah terpakai.`);
  try {
    let ress = await fetch(`https://api.neekoi.me/api/igdl?url=${args[0]}`);
    let res = await ress.json();
    await faz.sendMessage(m.chat, {video: {url: res.result.data[0].url}})
  } catch (error) {
    return m.reply(`An error occurred: ${error.message}`)
  }
}
break
			case 'tebaklirik': {
				if (iGame(tebaklirik, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaklirik.json'));
				let { key } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`)
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
			break
			case 'tebakkata': {
				if (iGame(tebakkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkata.json'));
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
			break
			case 'family100': {
				if (family100.hasOwnProperty(m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/family100.json'));
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`)
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					m.reply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
			break
			case 'renungan': {
    // Array renungan tanpa angka
    const renunganList = [
        "🌿 Hidup bukan tentang menunggu badai berlalu, tetapi tentang belajar menari di tengah hujan.",
        "🌸 Setiap perjalanan dimulai dengan langkah pertama. Jangan takut untuk memulai.",
        "🌻 Kadang kita harus kehilangan sesuatu untuk mendapatkan sesuatu yang lebih baik.",
        "🍂 Jangan biarkan kegagalan menghalangi langkahmu, karena setiap kegagalan adalah pelajaran untuk sukses.",
        "🌼 Kebahagiaan tidak datang dari apa yang kita miliki, tetapi dari bagaimana kita mensyukuri apa yang ada.",
        "🌟 Jangan menyerah, karena setiap langkahmu yang kecil membawa kamu lebih dekat ke tujuan.",
        "🍃 Waktu yang kita miliki saat ini adalah hadiah. Gunakanlah sebaik-baiknya.",
        "💫 Setiap kesulitan adalah kesempatan untuk tumbuh. Jangan takut untuk menghadapi tantangan.",
        "🌙 Kebijaksanaan datang dengan pengalaman, dan pengalaman datang dengan waktu.",
        "🌻 Jangan pernah ragu untuk melangkah, karena setiap langkahmu mendekatkanmu pada impian.",
        "🌸 Belajar untuk menerima diri sendiri adalah kunci untuk menemukan kebahagiaan yang sejati.",
        "🌿 Ketika hidup memberikanmu alasan untuk menyerah, ingatlah alasanmu untuk bertahan.",
        "🍂 Hidup ini singkat, jadi jangan buang waktu untuk menyesali hal yang sudah lewat.",
        "🌼 Terkadang kamu harus melewati badai untuk melihat pelangi yang indah.",
        "🌙 Apa yang kamu pikirkan tentang diri sendiri akan menentukan bagaimana dunia melihatmu.",
        "💫 Jangan takut gagal. Ketakutan itu lebih buruk daripada kegagalan itu sendiri.",
        "🌻 Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu.",
        "🍃 Jangan biarkan kegagalan mengalahkanmu. Biarkan kegagalan menjadi batu loncatan menuju kesuksesan.",
        "🌿 Hidup adalah petualangan yang penuh warna. Nikmati setiap momennya, baik suka maupun duka.",
        "🌸 Setiap langkah kecil adalah awal dari sebuah perjalanan besar. Jangan takut untuk melangkah.",
        "🌻 Kehilangan adalah bagian dari hidup, tetapi mendapatkan sesuatu yang lebih berharga adalah hadiah dari kesabaran.",
        "🍂 Kegagalan bukan akhir, melainkan bab baru dalam kisah suksesmu yang sedang ditulis.",
        "🌼 Kebahagiaan sejati terletak pada rasa syukur atas segala yang dimiliki.",
        "🌟 Jangan pernah meremehkan kekuatan usaha kecil yang dilakukan dengan konsisten.",
        "🍃 Waktu terus berjalan. Manfaatkan setiap detiknya untuk menjadi lebih baik.",
        "💫 Tantangan adalah peluang tersembunyi yang menunggu untuk ditaklukkan.",
        "🌙 Kebijaksanaan lahir dari pengalaman, dan pengalaman terbentuk melalui waktu.",
        "🌻 Jangan takut memulai, karena setiap langkah membawa kamu lebih dekat ke tujuan.",
        "🌸 Percayalah pada dirimu sendiri, dan dunia akan percaya padamu.",
        "🌿 Saat ragu menghampiri, ingatlah bahwa kamu lebih kuat dari yang kamu kira.",
        "🍂 Kesalahan adalah guru terbaik. Belajarlah darinya dan teruslah melangkah.",
        "🌼 Terkadang hujan harus turun agar bunga bisa bermekaran.",
        "🌙 Apa yang kamu pikirkan tentang dirimu akan memengaruhi bagaimana dunia memperlakukanmu.",
        "💫 Jangan biarkan rasa takut menghentikanmu. Keberanian dimulai dari langkah pertama.",
        "🌻 Setiap hari adalah peluang baru untuk menjadi versi terbaik dari dirimu.",
        "🍃 Jangan biarkan kegagalan mengalahkanmu. Jadikan itu batu loncatan menuju kesuksesan.",
        "🌸 Bersyukurlah atas setiap pencapaian kecil. Mereka adalah pondasi menuju impian besar.",
        "🌿 Ketika kehidupan terasa berat, ingatlah bahwa badai pasti berlalu.",
        "🍂 Jangan terjebak dalam masa lalu. Masa depanmu masih bisa kamu ciptakan.",
        "🌼 Harapan adalah cahaya yang akan menuntunmu melewati kegelapan.",
        "🌙 Hidup ini singkat. Jalani dengan cinta, keberanian, dan semangat pantang menyerah."
    ];

    // Array gambar yang tidak bisa disimpan di galeri
    const imageUrls = [
        "https://k.top4top.io/p_3286b64mj0.jpg"
    ];

    // Pilih renungan dan gambar secara acak
    const renungan = renunganList[Math.floor(Math.random() * renunganList.length)];
    const imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
console.log("Gambar yang dipilih:", imageUrl);

    // Kirim pesan dengan gambar dan renungan
    await faz.sendMessage(m.chat, {
        text: renungan,
        mentions: [m.sender],
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                title: "Renungan Harian",
                body: "Jangan lupa merenung dan bersyukur",
                showAdAttribution: true,
                thumbnailUrl: imageUrl,  // Gambar yang tidak dapat disimpan di galeri
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: true,
                mediaUrl: imageUrl,  // Gambar untuk ditampilkan
                sourceUrl: "https://donatesuport.rf.gd",  // Link tujuan saat gambar diklik
            }
        }
}, { quoted: fkontak });
}
break;
			case 'susunkata': {
				if (iGame(susunkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/susunkata.json'));
				let { key } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`)
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
			break
			case 'hitunghuruf': case 'jumlahhuruf': {
    if (!text) {
        return m.reply(`Untuk menghitung jumlah huruf, gunakan:\n${prefix}hitunghuruf (teks)`);
    }

    try {
        // Menghitung jumlah huruf tanpa spasi
        const jumlahHuruf = text.replace(/\s+/g, '').length;

        // Kirimkan hasilnya
        m.reply(`Jumlah huruf dalam teks:\n➡️ ${jumlahHuruf} huruf\n\n\`©malaikat botz\``);
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat menghitung huruf.');
    }
}
break
			case 'tebakkimia': {
				if (iGame(tebakkimia, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkimia.json'));
				let { key } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
			break
			case 'caklontong': {
				if (iGame(caklontong, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/caklontong.json'));
				let { key } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`)
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`)
					delete caklontong[m.chat + key.id]
				}
			}
			break
			case 'tebaknegara': {
				if (iGame(tebaknegara, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaknegara.json'));
				let { key } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
			break
			case 'tebakgambar': {
				if (iGame(tebakgambar, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakgambar.json'));
				let { key } = await faz.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
			break
			case 'tebakbendera': {
				if (iGame(tebakbendera, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakbendera.json'));
				let { key } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
			break
			case 'kuismath': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (iGame(kuismath, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return m.reply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let { key } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`)
				kuismath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(kuismath, result.waktu)
				if (rdGame(m.chat + key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
					delete kuismath[m.chat + key.id]
				}
			}
			break
			//ytmp3&mp4 work di termux klo di panel ga support ip panel
			// Menu
			case 'allmenu': case 'menu': case '?': {
			await faz.sendMessage(m.chat, { react: { text: "🔥", key: m.key } })
				let profile;
profile = "https://k.top4top.io/p_3286b64mj0.jpg";
				const menunya = `
┏━🔥⌠ *USER INFO* ⌡🔥
┃ *Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
┃ *Id* : @${m.sender.split('@')[0]}
┃ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
┃ *Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
┃ *Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}
┗━━━━━━🚀
┏━━💎⌠ *BOT INFO* ⌡💎
┃ *Nama Bot* : \_*${botname}*\_
┃ *Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
┃ *Owner* : @${owner[0].split('@')[0]}
┃ *Mode* : ${faz.public ? 'Public' : 'Self'}
┃ *Prefix* :${db.set[botNumber].multiprefix ? '「 MULTI-PREFIX 」' : ' *'+prefix+'*' }
┗━━━━━━🌊
┏━━❄️⌠ *TENTANG* ⌡❄️
┃ *Tanggal* : ${tanggal}
┃ *Hari* : ${hari}
┃ *Jam* : ${jam} WIB
┃  *🅟*  : Fitur premium
┃  *🅻*  : Mengurangi limit
┗━━━━━━💧
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭──❍「 \`*BOT*\` 」❍
│${setv} ${prefix}profile
│${setv} ${prefix}rules❗
│${setv} ${prefix}animasi
│${setv} ${prefix}claim
│${setv} ${prefix}buy [limit] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}request (text)
│${setv} ${prefix}lapor (text)
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}tentang
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}ping
│${setv} ${prefix}speed
│${setv} ${prefix}privasi
│${setv} ${prefix}afk
│${setv} ${prefix}del 🅟
│${setv} ${prefix}rvo 🅟 
│${setv} ${prefix}inspect (url gc)
│${setv} ${prefix}addmsg
│${setv} ${prefix}delmsg
│${setv} ${prefix}getmsg
│${setv} ${prefix}listmsg
│${setv} ${prefix}q (reply pesan)
│${setv} ${prefix}donasi
│${setv} ${prefix}sc
│${setv} ${prefix}buypremium ⫹⫺
│${setv} ${prefix}sewa
╰─┬────❍
╭─┴❍「 \`*TAMBAHAN*\` 」❍
│${setv} ${prefix}pengingat (waktu) (text) 
│${setv} ${prefix}cekmenarik
│${setv} ${prefix}hitunghuruf
│${setv} ${prefix}kalori 
╰─┬────❍
╭─┴❍「 \`*GROUP*\` 」❍
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}revoke
│${setv} ${prefix}tagall
│${setv} ${prefix}hidetag (text) 
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}grupset
│${setv} ${prefix}grup mute (on/off)
│${setv} ${prefix}grup antilink (on/off)
│${setv} ${prefix}grup welcome (on/off)
│${setv} ${prefix}grup antivirtex (on/off)
│${setv} ${prefix}grup antidelete (on/off)
╰─┬────❍
╭─┴❍「 \`*CARI*\` 」❍
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}spotify (query)
│${setv} ${prefix}trackip 🅟
│${setv} ${prefix}myip
│${setv} ${prefix}carifilm (query)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}google (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}cuaca (kota)
╰─┬────❍
╭─┴❍「 \`*DOWNLOAD*\` 」❍
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ytmp4 (url)
│${setv} ${prefix}ig (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}tiktokmp3 (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}mediafire (url)
╰─┬────❍
╭─┴❍「 \`*QUOTES*\` 」❍
│${setv} ${prefix}katabijak
│${setv} ${prefix}renungan
│${setv} ${prefix}renungan2
│${setv} ${prefix}quotes
│${setv} ${prefix}pantun
│${setv} ${prefix}motivasi
│${setv} ${prefix}truth
│${setv} ${prefix}dare
╰─┬────❍
╭─┴❍「 \`*ALAT*\`」❍
│${setv} ${prefix}get (url)
│${setv} ${prefix}brat
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}hdvideo (reply video) 🅟
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya) 🅟
│${setv} ${prefix}ssweb (url)
│${setv} ${prefix}toimg
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img) 🅟
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}getexif (reply sticker)
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}translate
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}gitclone (urlnya)
╰─┬───❍
╭─┴❍「 \`*AUDIO*\`」❍
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
╰─┬──❍
╭─┴❍「 \`*AI*\` 」❍
│${setv} ${prefix}ai (query)
│${setv} ${prefix}simi (query)
╰─┬❍
╭─┴❍「 \`*ANIME*\` 」❍
│${setv} ${prefix}waifu 
│${setv} ${prefix}girlanime (text) 🅟
│${setv} ${prefix}neko 🅟
╰─┬❍
╭─┴─❍「 \`*ANONYMOUS*\` 」❍
│${setv} ${prefix}anonymous
│${setv} ${prefix}start 
│${setv} ${prefix}next
│${setv} ${prefix}leave 
│${setv} ${prefix}menfes
╰─┬────❍
╭─┴❍「 \`*GAME*\` 」❍
│${setv} ${prefix}tictactoe
│${setv} ${prefix}akinator
│${setv} ${prefix}suit
│${setv} ${prefix}peringkat
│${setv} ${prefix}slot
│${setv} ${prefix}math (level)
│${setv} ${prefix}begal
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}susunkata
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakbendera
╰─┬────❍
╭─┴❍「 \`*FUN*\` 」❍
│${setv} ${prefix}dadu
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}cekkhodam (nama)
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah 🅟
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
╰─┬────❍
╭─┴❍「 \`*RANDOM*\` 」❍
│${setv} ${prefix}coffe
│${setv} ${prefix}wallphone
│${setv} ${prefix}ppcouple
│${setv} ${prefix}meme 🅟
│${setv} ${prefix}fakta
│${setv} ${prefix}bucin
╰─┬────❍
╭─┴❍「 \`*OWNER*\` 」❍
│${setv} ${prefix}bot [set]
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}spamcode
│${setv} ${prefix}join 🅟
│${setv} ${prefix}leavegc
│${setv} ${prefix}block
│${setv} ${prefix}bc
│${setv} ${prefix}bcgc
│${setv} ${prefix}addcase
│${setv} ${prefix}delcase
│${setv} ${prefix}getcase
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}listgc
│${setv} ${prefix}addsewa
│${setv} ${prefix}delsewa
│${setv} ${prefix}creategc 
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}adduang
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} ${prefix}upsw
╰──────❍
\_Untuk informasi lebih lanjut ketik\_ \_\`${prefix}info\`\_

      \_\`malaikat botz-WhatsApp Bot\`\_👾`
				await faz.sendMessage(m.chat, {
        text: menunya, // Kirim sebagai teks
        mentions: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'], // Mention user
        contextInfo: {
            mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            forwardingScore: 10,
            isForwarded: true,
            externalAdReply: {
                title: fazz,
                body: fazbot,
                showAdAttribution: true,
                thumbnailUrl: profile,
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: true,
                mediaUrl: my.gh,
                sourceUrl: my.gh,
            }
        }
    }, { quoted: fkontak });
}
break 
case 'sc': { //gausah diganti nanti eror 
 await faz['\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65'](m['\x63\x68\x61\x74'], {'\x72\x65\x61\x63\x74':{'\x74\x65\x78\x74':"\uD83D\uDCC2",'\x6B\x65\x79':m['\x6B\x65\x79']}});
 await faz['\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65'](m['\x63\x68\x61\x74'], {
     '\x74\x65\x78\x74':"\u2705 *\x49\x6E\x66\x6F\x72\x6D\x61\x73\x69\x20\x53\x63\x72\x69\x70\x74*\n\n\u2728 *\x4D\x61\x75\x20\x53\x63\x72\x69\x70\x74 \uD83D\uDE0A?*\x0A\x0A\x4B\x6C\x69\x6B\x20\x6C\x69\x6E\x6B\x20\x62\x65\x72\x69\x6B\x75\x74\x20\x6B\x6F\x6E\x74\x61\x6B\x20\x6F\x77\x6E\x65\x72\x3A\x20\x0A\uD83C\uDF10 (\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x61\x2E\x6D\x65\x2F\x36\x32\x38\x35\x31\x38\x39\x32\x39\x37\x30\x35\x39)",
     '\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F': {
         '\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79': {
             '\x74\x69\x74\x6C\x65':"\x53\x63\x72\x69\x70\x74\x20\x42\x6F\x74\x20\x57\x68\x61\x74\x73\x41\x70\x70",
             '\x62\x6F\x64\x79':"\x53\x43\x20\x59\x75\x72\x69\x2D\x4D\x44\x2D\x57\x61\x42\x6F\x54",
             '\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C':"\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x6E\x63\x72\x79\x70\x74\x65\x64\x2D\x74\x62\x6E\x30\x2E\x67\x73\x74\x61\x74\x69\x63\x2E\x63\x6F\x6D\x2F\x69\x6D\x61\x67\x65\x73\x3F\x71\x3D\x74\x62\x6E\x3A\x41\x6E\x64\x39\x47\x63\x52\x68\x79\x57\x59\x78\x35\x5F\x49\x46\x57\x4F\x78\x33\x64\x65\x32\x4D\x74\x6E\x42\x72\x77\x78\x4B\x5F\x72\x31\x67\x63\x4E\x68\x77\x61\x36\x77\x26\x73",
             '\x6D\x65\x64\x69\x61\x54\x79\x70\x65':0x1,
             '\x6D\x65\x64\x69\x61\x55\x72\x6C':"\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x61\x2E\x6D\x65\x2F\x36\x32\x38\x35\x31\x38\x39\x32\x39\x37\x30\x35\x39",
             '\x73\x6F\x75\x72\x63\x65\x55\x72\x6C':"\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x61\x2E\x6D\x65\x2F\x36\x32\x38\x35\x31\x38\x39\x32\x39\x37\x30\x35\x39"
         }
     }
 }, {'\x71\x75\x6F\x74\x65\x64':fkontak});
}break;
// fitur anonymous chat ga eror cuma terjadi bug aja kalo ketik .leave padahal belum start nanti log eror dikirim tapi gpp itu work

			default:
			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
	const baileys = require('@whiskeysockets/baileys');

if (m.chat.endsWith('@s.whatsapp.net')) {  // Hapus isCmd agar semua pesan diteruskan
    this.anonymous = this.anonymous || {};

    // Cari sesi aktif
    let room = Object.values(this.anonymous).find(
        (room) => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING'
    );

    if (room) {
        // Abaikan perintah tertentu
        if (/^.*(next|leave|start)/.test(m.text)) return;
        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return;

        // Temukan partner
        let other = room.a === m.sender ? room.b : room.a;

        if (other) {
            try {
                // Validasi pesan
                if (!m.message || Object.keys(m.message).length === 0) {
                    console.error('Pesan kosong, tidak dapat diteruskan.');
                    return;
                }

                // Kirim pesan teks langsung
                if (m.message?.conversation || m.text) {
                    const text = m.message.conversation || m.text;
                    await faz.sendMessage(other, { text });
                    console.log(`Pesan teks diteruskan dari ${m.sender} ke ${other}: ${text}`);
                } 
                // Kirim pesan media
                else {
                    const forwardMsg = baileys.generateForwardMessageContent(m.message, true);
                    const finalMsg = baileys.generateWAMessageFromContent(other, forwardMsg, { userJid: other });

                    // Kirim pesan ke partner
                    await faz.relayMessage(other, finalMsg.message, { messageId: finalMsg.key.id });
                    console.log(`Pesan media diteruskan dari ${m.sender} ke ${other}`);
                }
            } catch (error) {
                console.error(`Error saat meneruskan pesan dari ${m.sender} ke ${other}:`, error.message);
            }
        } else {
            console.error(`Partner tidak ditemukan untuk sesi ${m.sender}`);
        }
    }
    return true;
}
			if (budy.startsWith('<')) {
				if (!isCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
		}
	} catch (err) {
		console.log(util.format(err));
		//m.reply('*❗ Internal server error️*');
		faz.sendFromOwner(owner, 'Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\n*Log error:*\n\n' + util.format(err), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});