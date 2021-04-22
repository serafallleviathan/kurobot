/*
]=====> Levia☆tan <=====[ ]=====> IG sera.levia_tan <=====[ ]=====> 081918532071 <=====[
*/
// ANAK ANJING PASTI YANG ATAS DI UBAH
// NGOTAK KONSOL
// NUMPANG NAMA TIDAK MEMBUAT MU PRO
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { iklan } = require ('./lib/iklan')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { cara } = require('./src/cara')
const { exec, spawn } = require("child_process")
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const imgbb = require('imgbb-uploader');
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Levia☆tan\n' // GANTI NAMA LU
            + 'ORG:KuRoBOT\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281918532071 :+62 819-1853-2071 \n' // GANTI NOMOR LU
            + 'END:VCARD'
// UDAH SEGITU KONSOL KEBAWAH BIARIN AJA
const ngonsol = JSON.parse(fs.readFileSync('./settings/Kevin.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    NaufalKey,
    Lol, 
    TobzKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    CeerTod
} = ngonsol
// POWERED BY KEVIN KUN
prefix = botPrefix
blocked = []   
memberlimit = GrupLimitz
cr = CeerTod

// LOAD JSON
const fak = JSON.parse(fs.readFileSync('./src/fakta.json'))
const bija = JSON.parse(fs.readFileSync('./src/Bijak.json'))
const setiker = JSON.parse(fs.readFileSync('./assets/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./assets/vn.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
/*       
]=====> LOAD MENU <=====[
*/
const { help } = require('./lib/help')
const { kodebahasa } = require('./lib/kodebahasa')
/*
]=====> FUNCTION <=====[
*/function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*
]=====> SCAN QR <=====[
*/

const kev = new WAConnection()
kev.logger.level = 'warn'
console.log(banner.string)
   kev.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' FOLLOW IG sera.levia_tan'))
})

	kev.on('credentials-updated', () => {
		fs.writeFileSync('./Kevin.json', JSON.stringify(kev.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'wait...')
	})
	fs.existsSync('./Kevin.json') && kev.loadAuthInfo('./Kevin.json')
	kev.on('connecting', () => {
		start('2', 'connecting...')
	})
	kev.on('open', () => {
		success('2', 'connected')
	})
	kev.connect({timeoutMs: 30*1000})

kev.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await kev.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await kev.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*YO🤚* @${num.split('@')[0]}\n*welcome to group* *${mdata.subject}*\n___________________________\n  │Intro yah 🔪😋 \n  ├─ ❏  Nama : \n  ├─ ❏  Umur : \n  ├─ ❏  Askot : \n  ├─ ❏  Gender : \n  │ 𝐒𝐚𝐯𝐞 𝐍𝐨𝐦𝐨𝐫 𝐀𝐃𝐌𝐈𝐍! \n *___________________________*\n_baca desc dulu kalo gk suka out aja🚮_`
				let buff = await getBuffer(ppimg)
				kev.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await kev.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Alfatihah buat @${num.split('@')[0]} yang sudah meninggalkan kita🤲`
				let buff = await getBuffer(ppimg)
				kev.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	kev.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	kev.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
      const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = kev.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const totalchat = await kev.chats.all()
			pushname = kev.contacts[sender] != undefined ? kev.contacts[sender].vname || kev.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await kev.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
/*
]=====> KEVIN KUN <=====[
*/            const isBanned = ban.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				kev.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				kev.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? kev.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : kev.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    kev.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			kev.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    kev.sendMessage(from, audio, mp3, {quoted:mek})
		    }
			
/*
]=====> LIMITED BY LANN ID <=====[
*/
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            kev.groupLeave(from)
					    }
		       } catch (err) { console.error()  }
        }
      
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Atasan grup mah bebas yakan:v')
		        kev.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Woyy ${sender.split("@")[0]} Grup ini anti link, siap siap kau!`)
		        setTimeout( () => {
			        kev.groupRemove(from, [kic]).catch((e)=>{reply(`BOT HARUS JADI ADMIN`)})
		        }, 3000)
		        setTimeout( () => {
			        kev.updatePresence(from, Presence.composing)
			        reply("Hedsot :v")
		        }, 2000)
		        setTimeout( () => {
			        kev.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        kev.updatePresence(from, Presence.composing)
			        reply("Ready?")
		        }, 0)
	        }               
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

switch(is) {

  case 'bot':

buf = 'ketik *help untuk menu'
reply(buf)
break

case '*':
hasil = `ketik *help untuk menu`
reply(hasil)
        break
case 'help':

hasil = `ketik *help untuk menu`

reply(hasil)
        break
}

switch(command) {
                case 'help':
				case 'menu':
				if (isBanned) return reply(ind.baned())
					    d = new Date
    locale = 'id'
    gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    week = d.toLocaleDateString(locale, { weekday: 'long' })
    date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
				    uptime = process.uptime()
					await costum(help(pushname, prefix, botName, ownerName, time, kyun, uptime, weton, week, date, totalchat, sender), text, tescuk, cr)
					break
				case 'iklan':
				case 'iclan':
					kev.sendMessage(from, iklan(pushname, prefix, sender, botName, ownerName), text)
					break
				case 'jumlahhuruf':
				case 'reverse':
if (args.length < 1) return reply('kalimatnya apa?') 
var hf = body.slice(13)
data = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${hf}`)
jumlah = data.result.jumlah
reply(jumlah)
break
                case 'kodebahasa':
				case 'kodebhs':
				if (isBanned) return reply(ind.baned())
					await costum(kodebahasa(pushname, prefix, botName, ownerName, sender), text, tescuk, cr)
					break
				case 'jadwaltv':
				case 'jadwalTV':
					mb = body.slice(10)
					if (args.length < 1) return reply(`Channel TV apa?\nContoh: ${prefix}jadwalTV mnctv`)
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${mb}&apikey=apivinz`, {method: 'get'})
					sket = `◪ *JADWAL TV* \n  │\n  └❑ Channel : ${mb} \n◪ *JADWAL* \n${anu.result} `
					kev.sendMessage(from, sket, text)
					break
				case 'film':
				if (args.length < 1) return reply('Cari Film Apa?')
				reply(ind.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=847de7716f17a51eeba4235c&query=${body.slice(6)}`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.result) {
				hasil += `• *Title:* ${film.title}\n• *Rilis Tahun:* ${film.tahun}\n• *Type:* ${film.genre}\n• *Link:* ${film.link}\n=========================\n`
				}
				reply(hasil.trim())
					break 
				case 'igstalk':
					if (isBanned) return reply(ind.baned())
							anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${body.slice(9)}&apikey=${VhtearKey}`, {method: 'get'})
						buffer = await getBuffer(anu.result.picture)
						reply(ind.wait())
						hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Fullname : ${anu.result.full_name}\n│• Followers : ${anu.result.follower}\n│• Following : ${anu.result.follow}\n│• Jumlah Postingan: ${anu.result.post_count}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`
					kev.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					break
				case 'ssweb':
				if (isBanned) return reply(ind.baned())    
				if (args.length < 1) return reply('Urlnya mana ?')
				try {
				sket = `${body.slice(7)}`
				reply(ind.wait)
				buff = await getBuffer(`http://api.lolhuman.xyz/api/ssweb?apikey=847de7716f17a51eeba4235c&url=${sket}`, {method: 'get'})
				kev.sendMessage(from, buff, image, {quoted: mek})
				} catch {
				reply (mess.error.bug)
				}
			break 
				case 'img2url':          
                    var imgbb = require('imgbb-uploader')
                    var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    var media = await  kev.downloadAndSaveMediaMessage(encmedia)       
                    imgbb('acf1ad5f22ad5822dc163cce74aedfd4', media)
                   .then(data => {
                    var caps = `*「 _IMAGE TO URL_ 」*\n\n*→  ID :* ${data.id}\n*→  MimeType :* ${data.image.mime}\n*→  Extension :* ${data.image.extension}\n*→  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     kev.sendMessage(from, ibb, image, { quoted: reply, caption: caps })
                })
                .catch(err => {
                    throw err
                })
                    break
				case 'kalkulator':
				case 'calc':
				case 'calculator':
					if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
					mtk = `${body.slice(12)}`
					anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearKey}`, {method: 'get'})
					kev.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
					break
				case 'lirik':
					sket = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${sket}`, {method: 'get'})
					reply('Lirik dari lagu '+sket+' adalah :\n\n'+anu.result.lirik)
					break
				case 'ytsearch':
					if (args.length < 1) return reply('mau cari apa?')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-search?q=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(ind.error())
					sket = '=================\n'
					for (let i of anu.result) {
						sket += `*Title* : ${anu.title}\n*Id* : https://youtu.be/${anu}\n*Published* : ${anu.publishedTime}\n*Duration* : ${anu.duration}\n*Views* : ${h2k(anu.views)}\n=================\n`
					}
					reply(sket.trim())
					break
					case 'jam':
					if (args.length < 1) return reply('jam negara mana?\ncontoh: *jam tokyo')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jamdunia?lokasi=${body.slice(5)}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					sket = '=================\n'
					for (let i of anu.result) {
						sket += `*Hari/tgl* : ${i.date}\n*Sun* : ${i.sun}\n*Jam* : ${i.time}\n*Tempat* : ${i.title}`
					}
					reply(sket.trim())
					break
				case 'waifu':
kev.updatePresence(from, Presence.composing)
uk = ["anime waifu","waifu","waifu anime"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(ind.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `random waifu`
})

} catch {
  reply(ind.succes)
}
break
				case 'translate':
				case 'terjemah':
					aruga = body.slice(10)
					lang = aruga.split("|")[0];
					teksnya = aruga.split("|")[1];
					if (args.length < 1) return reply(`kode bahasanya mana?\nContoh: ${prefix}translate en|Hai, aku Levia`)
					if (args.length < 2) return reply(`teksnya mana?\nContoh: ${prefix}translate en| Hai, aku Levia`)
					anu = await fetchJson(`https://arugaz.my.id/api/edu/translate?lang=${lang}&text=${teksnya}`, {method: 'get'})
					arteks = `◪ *TRANSLATE* \n  │\n  ├❑ Text : ${teksnya} \n  ├❑ Translate : ${anu.text} \n  └❑ *Pronunciation* : ${anu.pronunciation}`
					kev.sendMessage(from, arteks, text)
					break
				case 'neonimesearch':
					kev.updatePresence(from, Presence.composing)
					ij = body.slice(16) 
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/neonime?q=${ij}&apikey=BotWeA`, {method: 'get'})
					if (isBanned) return reply(ind.baned())
					reply(ind.wait)
					sket = '#############################\n'
					for (let i of data.result) {
						sket += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desc}\n###########################\n`
					}
					reply(sket.trim())
					break
				case 'bacakomik':
				    kev.updatePresence(from, Presence.composing)
					bk = body.slice(12) 
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/bacakomik?q=${bk}&apikey=BotWeA`, {method: 'get'})
					if (isBanned) return reply(ind.baned())
					reply(ind.wait)
					sket = '----------------------------------------------------------------\n'
					for (let i of data.result) {
						sket += `*Judul* : ${i.judul}\n*Jeniskomik* : ${i.jenis_komik}\n*Pengarang* : ${i.pengarang}\n*Rating* : ${i.rating}\n*Status* : ${i.status}\n*Update Terakhir* : ${i.update_terakhir}\n*Rilis* : ${i.dirilis}\n*Carabaca* : ${i.cara_baca}\n*Genre* : ${i.genre}\n*Usia* : ${i.umur_pembaca}\n*Link* : ${i.link}\n------------------------------------------------------------\n`
					}
					reply(sket.trim())
					break
				case 'neonimeongoing':
					kev.updatePresence(from, Presence.composing)
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/neonimeongoing?apikey=${TobzKey}`, {method: 'get'})
					if (isBanned) return reply(ind.baned())
					reply(ind.wait)
					ngog = '#############################\n'
					for (let i of data.result) {
						ngog += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desc}\n###########################\n`
					}
					reply(ngog.trim())
					break
				case 'delete':
				case 'dell':
				case 'dellete':
					if (!isGroup) return reply(ind.groupo())
					kev.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await kev.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							kev.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('reply fotonya!')
					}
					break
/*
]=====> SIMPLE MENU <=====[
*/
				case 'stiker': 
				case 'sticker':
				case 's':
				if (isBanned) return reply(ind.baned())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await kev.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								kev.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await kev.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								kev.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
				case 'nulis':
				case 'tulis':
				                  if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Teksnya apa? Contoh : ${prefix}nulis2 Levia kawai`)
				laysha = body.slice(7)
				reply('「❗」WAIT')
				buff = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${laysha}&apikey=apivinz`)
				kev.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya>_<'})
				break
				case 'tl':
if (args.length < 1) return kev.sendMessage(from, 'Masukan teks/kode bahasa', text, {
  quoted: mek
})
var pc = body.slice(4)
nomor = pc.split("/")[0];
msge = pc.split("/")[1];
try {
data = await fetchJson(`https://api-translate.azharimm.tk/translate?engine=google&text=${nomor}&to=${msge}`)
hasil = `*Translate* :\n${data.data.result}`
reply(hasil)

} catch {
  reply(ind.wait)
}
break
		case 'halloweentext':
             if (isBanned) return reply(ind.baned())
			if (args.length < 1) return reply(ind.wrongf())
			ween = body.slice(15)
			if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 huruf')
			reply(ind.wait())
			hw = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=847de7716f17a51eeba4235c&text=${ween}`)
		    kev.sendMessage(from, hw, image, {quoted: mek})
		    break
                case 'gemboktext':
				if (isBanned) return reply(ind.baned())
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}gemboktext 11 01 2021 & Levia dan tan`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
					kev.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'harrytext':				
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(ind.wrongf())
				dg = body.slice(11)
				reply(ind.wait())
				zh = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${dg}`)
				kev.sendMessage(from, zh, image, {caption: 'succes...', quoted: mek})
				break
				case 'qr':
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(ind.wrongf())
				qr = body.slice(4)
				reply(ind.wait())
				rq = await getBuffer(`https://api.zeks.xyz/api/qrencode?apikey=apivinz&text=${qr}`)
				kev.sendMessage(from, rq, image, {caption: 'succes...', quoted: mek})
				break
				case 'barcode':
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(ind.wrongf())
				brc = body.slice(4)
				reply(ind.wait())
				de = await getBuffer(`https://api.zeks.xyz/api/barcode?apikey=apivinz&text=&{brc}`)
				kev.sendMessage(from, de, image, {caption: 'succes...', quoted: mek})
				break
				case 'tts':
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return kev.sendMessage(from, 'Kode bahasanya mana? contoh : *tts id Halo Levia', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return kev.sendMessage(from, `Teksnya mana? | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang!')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							kev.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					case 'ttp':
					if (isBanned) return reply(ind.baned())
					if (args.length < 1) return reply('teks nya apa?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					sket = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${sket}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						kev.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'toimg':
				if (isBanned) return reply(ind.baned())
				if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar!')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kev.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						kev.sendMessage(from, buffer, image, {quoted: mek, caption: 'succes...'})
						fs.unlinkSync(ran)
					})
					break
				case 'togif':
				if (isBanned) return reply(ind.baned())
				if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar!')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kev.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.gif')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						kev.sendMessage(from, buffer, video, {quoted: mek, caption: 'succes...'})
						fs.unlinkSync(ran)
					})
					break
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                kev.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: mek})
                    break					
                   case 'stalkig':
                   if (isBanned) return reply(ind.baned())
                     sket = body.slice(9)
                     anu = await fetchJson(`https://st4rz.herokuapp.com/api/stalk?username=${sket}`, {method: 'get'})
                     reply('「❗」wait')
                     buffer = await getBuffer(anu.Profile_pic)
                     hasil = `BERHASIL STALK UNTUK USERNAME ${sket} \n\n *Username* : _${anu.Username}_ \n *Nama* : _${anu.Name}_ \n *Jumlah Follower??﹦?* : _${anu.Jumlah_Followers}_\n *Jumlah Following* : _${anu.Jumlah_Following}_\n *Jumlah Post* : _${anu.Jumlah_Post}_\n *Biodata* : _${anu.Biodata}_`
                    kev.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
			       break
// PREMIUM
				case 'bokep':
				kev.updatePresence(from, Presence.composing) 
                  if (isBanned) return reply(ind.baned())
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('>_<')
                 randTeks = randKey.teks
                 kev.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
                case 'blowjob':
                  if (isBanned) return reply(ind.baned())
					if (!isOwner) return reply(ind.ownerb())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						kev.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'yutubdl':
					if (args.length < 1) return reply('Urlnya mana?')
                  if (isBanned) return reply(ind.baned())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID!')				
		anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VhtearKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ JUDUL* : ${anu.result.title}\n\n*[WAIT]*`
					thumb = await getBuffer(anu.result.imgUrl)
					kev.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					kev.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
                case 'randomhentong':
                  if (isBanned) return reply(ind.baned())
					if (!isOwner) return reply(ind.ownerb())
					gatauda = body.slice(15)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
					buffer = await getBuffer(anu.result)
					kev.sendMessage(from, buffer, image, {quoted: mek})
					break																													               							
// PREMIUM		    								
/*
]=====> GABUTZ MENU <=====[
*/
case 'neontext':
                  if (isBanned) return reply(ind.baned())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}neontext Levia`)
neon = body.slice(10)
reply(ind.wait)
neo = await getBuffer(`http://api.lolhuman.xyz/api/textprome/neon?apikey=847de7716f17a51eeba4235c&text=${neon}`)
kev.sendMessage(from, neo, image, {quoted: mek})
break					
				case 'gets':
				case 'getstick':
				case 'getstik':
				case 'getsticker':
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(6)
				try {
				result = fs.readFileSync(`./assets/stick/${namastc}.webp`)
				kev.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'liststik':
				sket = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					sket += `- ${awokwkwk}\n`
				}
				sket += `\n*Total : ${setiker.length}*\nGunakan perintah\n*${prefix}getstik (nama pack)*\nuntuk mengambil stiker`
				kev.sendMessage(from, sket.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break
				case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (!isOwner) return reply(ind.ownerb())
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await kev.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./assets/stick/${svst}.webp`, delb)
				fs.writeFileSync('./assets/stik.json', JSON.stringify(setiker))
				kev.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
				break
				case 'dellstik':
				dsvst = body.slice(9)
				if (!dsvst) return reply('Nama sticker nya apa?')
				setiker.splice(`${dsvst}`)
				fs.writeFileSync(`./assets/stick/${dsvst}.webp`)
				fs.writeFileSync('./assets/stik.json', JSON.stringify(setiker))
				kev.sendMessage(from, `Sukses Membunsg Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
				break
		case 'sarananime':
		if (isBanned) return reply(ind.baned())
					const saran =[`anime romance dimana heroine nya awalnya di benci kemudian jatuh cinta\n°Fuuka\n°Masamune's Revenge\n°Sousei no Onmyouji\n°Oda Nobuna no Yabou\n°Kaze no Stigma\n°Btooom!\n°Tonari no Kaibutsu-kun\n°Akame ga Kill\n°Kaichou wa Maid-sama!\n°Nisekoi\n____________________________\nAnime dimana MC ke Isekai dan mendapatkan kekuatan OP\n°Isekai wa Smartphone to Tomo ni\n°Isekai Maou to Shokan Shoujo no Dorei Majutsu\n°Arifureta Shokugyo de Sekai Saikyou\n°Maou-sama, Retry!\n°Hataraku Maou-sama\n°Drifter\n°Yojou Senki\n°Tensei Shitara Slime Datta Ken\n°No Game No Life\n____________________________\nTop Anime Romance/Action\n°Beatless\n°Kishuku Gakkou no Juliet\n°Devil Line\n°Toaru Hikuushi e no Koiuta\n°Shuumatsu Nani Shitemasu ka? Isogashii Desu ka? Sukutte Moratte Ii desu ka?\n____________________________\nAnime dimana MC OP tidak mengetahui kekuatan sebenarnya\n°Dakara Boku wa, H ga Dekinai\n°Tokyo Ravens\n°Kore wa Zombie desu ka?\n°Maoyuu Maou Yuusha\n°Blood Lad\n°Musaigen no Phantom World\n°Witch Craft Works\n____________________________\nAnime dimana MC OP tapi tidak dapat mengendalikan kekuatannya\n°Sousei no Onmyouji\n°Bungo Stray Dogs\n°Owari no Seraph\n°Kyoukai no Kanata\n°Mushibugyo\n____________________________\nBest Anime Romance \n°Love Lab\n°Noucome\n°Inou-Battle wa Nichijou-Kei no Naka de\n°Boku wa Tomodachi ga Sukunai\n°Kono Bijutsubu ni wa Mondai ga Aru!\n°Just Because!\n°Mayo Chiki!\n°Mikakunin de Shinkoukei\n°Sankarea\n°Oda\n°Seiren\n°3D kanojo\n______________________________\nTop anime MC kalem/badass\n°Amnesia\n°Angel Beats!\n°Tokyo Ghoul\n°Darling in the FranXX\n°Golden Time\n_____________\nTop 10 Harem dan MC over power\n°Maji de Watashi Ni Koi Shinasai!\n°Hagure Yuusha no Aesthetica\n°Busou Shoujo Machiavellianism\n°Hidan no Aria\n°Seiken Tsukai no World Break\n°Hundred\n°Masou Gakuen HXH\n°Highschool DxD\n°Seikon no Qwaser\n°Inou-Battle Nichijou-Kei no Naka de\n____________________________\nTop Harem MC OP\n°IS: Infinite Stratos\n°Campione!n°Kore wa Zombie Desu ka?\n°Trinity Seven\n°Yuragi-sou no Yuuna-san\n°Sin: Nanatsu no Taizai\n°Neon Genesis Evangelion\n°Hello World\n°Recently, My sister is unusual\n•Vampire Knight\n____________________________\nTop Anime MC ngebangkitkan kekuatannya\n°Hitsugi no Chaika\n°Tsubasa Chronicle\n°Fate/Stay Night\n°Seiken no Blacksmith\n°Absolute Duo\n°Dakara Boku wa, H ga Dekinai\n°Mahou Sensou\n____________________________\nTop Anime with anti sosial & OP MC\n°Goblin Slayer\n°No Game No Life\n°Grisaia no Kajitsu\n°Jormungand\n°Classroom of the Elite\n°Saiki Kusou no Psi Nan\n____________________________\nTop anime MC badas\n°Drifters\n°Kara no Kyoukai\n°Kino no Tabi\n°Darker than Black\n°Grisaia Series\n°Fate/Zero\n____________________________\nTop Anime MC pura² lemah padahal kuat\n°Blood Lad\n°Rokudenashi Majutsu Koushitsu\n°Saiki Kusou no Psi Nan\n°Classroom of the Elite\n____________________________\nTop anime with OP MC (2019)\n°Isekai Cheat Magician\n°Arifureta Shokugyo Sekai ni Saikyou\n°Maou-sama, Retry!\n°Katsute Kami Datta Kemono-tachi e\n°Toaru Kagaku no Accelerator\n°Kenja no Mago\n°Vinland Saga\n°Tate no Yuusha no Nariagari\n°Dr. Stone\n____________________________\nTop anime MC abadi\n°Itsuka Tenma no Kuro Usagi\n°UQ Holder\n°Renai Boukun\n°Kuroshitsuji\n°Sayonara no Asa\n°Re:Zero Kara Hajimeru Isekai Seikatsu\n____________________________\nTop anime dimana MC dikhianati dan jatuh ke jalan gelap\n°Arifureta Shokugyo Sekai ni Saikyou\n°Guilty Crown\n°Akame ga Kill\n°Zetsuen no Tempest\n°Ao no Excorcist\n°Densetsu no Yuusha no Densetsu\n°91 Days\n°Tate no Yuusha no Nariagari\n°Shinsekai Yori\n°Btooom!\n°Mawaru Penguindrum\n____________________________\nTop anime MC terlihat malas tapi OV/badass\n°Densetsu no Yuusha no Densetsu\n°Rokudenashi Majutsu Koushitsu\n°Zetsuen no Tempest\n°Nejimaki Seirei Senki: Tenkyou no Alderamin\n°Gate\n°Hyouka\n°Gintama\n____________________________\nTop Anime yang MC-nya adalah legenda pensiunan yang kembali lagi\n°Accel World\n°Noragami\n°Shuumatsu Nani Shitemasu ka?\n°Yuushibu\n°Rokudenashi Majutsu Koushitsu\n°Densetsu no Yuusha no Densetsu\n°Hataraku Maou-sama\n°Violet Evergarden\n°Hagure Yuusha no Aesthetica\n____________________________\nTop Anime dengan MC memiliki masa lalu yang gelap\n°Zankyou no Terror\n°Black Bullet\n°Jigoku Shoujo\n°Owari no Seraph\n°91 Days\n°Classroom of the Elite\n°Noragami\n____________________________\nTop anime dengan MC yang memiliki kekuatan khusus\n°Dakara Boku wa, H ga Dekinai\n°Yuragi-Sou no Yuuna-san\n°Inu X Boku SS\n°Charlotte\n____________________________\nTop Anime Cinta Obsesi \n°Amagami SS\n°Aho Girl\n°Kono Bijutsubu\n°Haiyore! Nyaruko-san\n°Shuffle!\n°Gekkan Shoujo Nozaki-kun\n°Renai Boukun\n°Mirai Nikki\n°Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?\n____________________________\nTop anime romantis-komedi\n°Net-juu no Susume\n°Mikakunin de Shinkoukei\n°Chuunibyou demo Koi ga Shitai!\n°Servant x Service\n°Masamune-kun's Revenge\n°Gamers!\n°Nisekoi\n____________________________\nTop Anime dimana MC memiliki kekuatan Hewan Legendaris\n°Seikoku no Dragonar\n°Bungo Stray Dogs\n°High school DxD\n°Owari no Seraph\n____________________________\nTop Anime dimana MC OP dan tidak ada yang mengetahui\n°Chrome Shelled Regios\n°Tokyo Majin Gakuen Kenpuchou\n°Quanzhi Fashi\n°Rokudenashi Majutsu Koushitsu\n°Witch Craft Works\n°Mahouka Koukou no Rettousei\n°Rakudai Kishi no Cavalry\n____________________________\nTop Anime dengan MC OP\n°Phantom: Requiem for the Phantom\n°Divine Gate\n°Hitsugi no Chaika\n°Code: Breaker\n°Kiznaiver\n°Ansatsu koushitsu\n°Kara no Kyoukai\n____________________________\nTop Anime dimana MC nya Jenius/Cerdas/Ahli siasat\n°Nejimaki Seirei Senki: Tenkyou no Alderamin\n°Hyouka\n°Dr. Stone\n°Classroom of the Elite\n°No Game No Life\n°Death Note\n____________________________\nAnime dimana MC adalah murid pindahan yang OP\n°Hundred\n°Code: Breaker\n°Tokyo Majin Gakuen Kenpuchou\n°Chrome Shelled Regios\n°Kill la Kill\n°Mahouka Koukou no Rettousei\n____________________________\n\nanime Isekai (2019)\n°Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no - Okaasan wa Suki Desu ka?\n°Arifureta Shokugyo de Sekai Saikyou\n°Kenja no Mago\n°Maou-sama, Retry!\n°Watashi, Nouryoku wa Heikinchi de tte Yo ne!\n°Mairimashita! Iruma-kun\n°Honzuki no Gekokujou: Shisho ni Naru Tame ni Shudan wo\n°Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you Desu!\n°Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuseni Shinchou Sugiru`]
					srn = await getBuffer(`https://i.ibb.co/sqKq02g/Re.jpg`)
					kev.sendMessage(from, srn, image, { quoted: mek, caption: '*saran anime*\n'+ saran })
					break
				case 'jadwalanime':
		if (isBanned) return reply(ind.baned())
				const jadwal =[`\nSENIN\n°Vivy Fluorit Eye's Song『00.30』\n°Yuukoku no Moriarty S2 『00.15』\n°Dragon,Ie wo Kau 『00.15』\n°Sentouin,Hakenshimasu 『00.15』\n°Seven knight revolutions eiyuu no keishousha 『01.00』\n°Sayonara Watashi no Cramer 『00.15』\n____________________________\nSELASA\n°Koi to Yobu ni wa Kimochi Warui 『00.30』\n°Mars Red 『02.00』\n°Fruits Basket S3 『01.30』\n____________________________\nRABU\n°Nanatsu no Taizai Season 4 『21.30』\n°Kyuukyoku Shinka shita Full Dive RPG 『22.30』\n°Tensura Nikki 『00.30』\n°Seijo no maryoku wa bannou desu 『00.30』\n____________________________\nKAMIS\n°Jouran:the Princess of Snow and Blood 『01.00』\n°Super Cub 『00.30』\n____________________________\nJUM'AT\n°Godzila Singular Pionts 『05.00』\n°Shaman King 『01.00』\n°Isekai Maou to Shoukan Shoujo S2 『01.30』\n°ZombieLand Saga S2 『00.30』\n____________________________\nSABTU\n°Boku no Hero Academia Season 5 『17.30』\n°Mashiro no Oto 『02.30』\n°SSSS.Dynazenon 『00.30』\n°Shakunetsu Kabaddi 『01.30』\n____________________________\nMINGGU\n°One Piece 『10.00』\n°Boruto:Naruto next Generations 『17.00』\n°Slime Taoshite 300-Nen 『00.30』\n____________________________\nRANDOM\n°- 『-』\n____________________________\nLink grup Anime Ongoing\nhttps://chat.whatsapp.com/IMKxDcSDQY5HZZDwuqmnwG\n`]
					srn = await getBuffer(`https://i.ibb.co/wJy5Dvb/4305f46704e3.jpg`)
					kev.sendMessage(from, srn, image, { quoted: mek, caption: '*JADWAL ANIME ONGOING*\n'+ jadwal })
					break
				case 'gtav':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.dlay_url}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('wait')
}
break
				case 'drawing':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('wait')
}
break
				case 'triggered':
					case 'ger':
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(ind.wait)
         owgi = await kev.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        sket = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${sket}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                kev.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Reply fotonya!')
                                          }
                                             break
				case 'wasted':
  case 'was':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  sket = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${sket}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
kev.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Reply fotonya!')
}
break
                case 'rip':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(5)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`http://api.lolhuman.xyz/api/editor/skullmask?apikey=847de7716f17a51eeba4235c&img=${tels}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Reply fotonya!')
}
break
				case 'passed':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://mhankbarbar.tech/api/mpassed?url=${anu.display_url}&apiKey=${BarBarKey}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Reply fotonya')
}
break
				case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Reply fotonya')
}
break
                  case 'timer':
                  if (isBanned) return reply(ind.baned())
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break						   
/*
]=====> MENU GRUP <=====[
*/		 
				case 'welcome':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('1 untuk mengaktifkan 0 untuk menonaktifkan')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*FITUR WELCOME SUDAH AKTIF KAK*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR WELCOME DI GROUP*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MEMATIKAN FITUR WELCOME DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
                  if (isBanned) return reply(ind.baned())				
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('1 untuk mengaktifkan 0 untuk menonaktifkan')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR NSFW DI GROUP*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUKSES」 MEMATIKAN FITUR NSWF DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
                                case 'antilinkgrup':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan 0 untuk menonaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('sudah aktif!')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MENGAKTIFKAN ANTI LINK DI GROUP')
						kev.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('sudah nonaktifkan')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break					
					
				case 'admin':
                  if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					sket = `*DAFTAR ADMIN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						sket += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(sket, groupAdmins, true)
					break
					case 'grup':
					case 'group':
                  if (isBanned) return reply(ind.baned())					
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						kev.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						kev.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'add':
                  if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('mau nambahin siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						kev.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('di private...🚮')
					}
					break
			     	case 'kick':
                  if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('tag yang mau di kick')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `kamu akan di kick :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						kev.groupRemove(from, mentioned)
					} else {
						mentions(`kamu akan di kick @${mentioned[0].split('@')[0]}`, mentioned, true)
						kev.groupRemove(from, mentioned)
					}
					break
                case 'hidetag':
                  if (isBanned) return reply(ind.baned())               
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await kev.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					kev.sendMessage(from, options, text)
					break					
				case 'infogc':    
                  if (isBanned) return reply(ind.baned())
				    if (!isGroup) return reply(ind.groupo())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				kev.updatePresence(from, Presence.composing)
				  linkgc = await kev.groupInviteCode (from)
					try {
					ppimg = await kev.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*•Nama grup :* ${groupName}\n*•Link grup :* https://chat.whatsapp.com/${linkgc}\n*•Deskripsi :* ${groupDesc}\n*•Jumlah Member :* ${groupMembers.length}\n*•Jumlah Admin :* ${groupAdmins.length}\n*•List Admin :*\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					kev.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
				case 'grupdesc':
				    descgc = await kev.groupInviteCode (from)
				    yeh = `deskripsi grup ${groupName}\n\n${groupDesc}`
				    kev.sendMessage(from, yeh, text, {quoted: mek})
					break
                 case 'linkgrup':
                  if (isBanned) return reply(ind.baned())
				    if (!isGroup) return reply(ind.groupo())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await kev.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    kev.sendMessage(from, yeh, text, {quoted: mek})
					break
				case 'tagall':
                  if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					kets = (args.length > 1) ? body.slice(8).trim() : ''
					kets += '\n\n'
					for (let mem of groupMembers) {
						kets += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(kets, members_id, true)
					break
           case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                kev.groupUpdateSubject(from, `${body.slice(9)}`)
                kev.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                kev.groupUpdateDescription(from, `${body.slice(9)}`)
                kev.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Deskripsi Grup', text, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('tag yang mau di demote')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						kev.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu agaih di copot`, mentioned, true)
						kev.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('tag yang mau di promote')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `kamu telah menjadi admin :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						kev.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} kamu telah menjadi admin`, mentioned, true)
						kev.groupMakeAdmin(from, mentioned)
					}
					break
                      case 'leave':
                      if (isBanned) return reply(ind.baned())    
                      if (!isGroup) return reply(ind.groupo())
                      if (!isOwner) return reply(ind.ownerb())
                      setTimeout( () => {
                      kev.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      kev.updatePresence(from, Presence.composing) 
                      if (isBanned) return reply(ind.baned())   
                      kev.sendMessage(from, 'sarabada...', text)
                      }, 0)
                      break																									
/*
]=====> DOWNLOAD MENU <=====[
*/
		case 'play':
		reply(ind.wait())
		play = body.slice(5)
		anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-play?q=${play}`)
	if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.title}\nSource : ${anu}\nUkuran : ${anu.filesize}\n\n*WAIT LAGI DI SEND*`
		buffer = await getBuffer(anu.thumb)
		lagu = await getBuffer(anu.link)
		kev.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
		kev.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
		break	
		case 'tomp3':
                	kev.updatePresence(from, Presence.composing) 
                    if (!isQuotedVideo) return reply(' reply videonya um ')
					reply(ind.download)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kev.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, saat mengkonversi video ke mp3 ')
						buffer = fs.readFileSync(ran)
						kev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
		case 'shorturl':
		case 'urlshort':
                    anu = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${body.slice(10)}&apikey=apivinz`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
		case 'ytmp4':
			if (args.length < 1) return reply('Urlnya mana?')
					reply(ind.download())
			anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=youtube.com/watch?v=${body.slice(24)}`, {method: 'get'})
			if (anu.error) return reply(anu.error)
			sket = `â�� *Title* : ${anu.title} \nâ�� *link* : ${anu.filesize} \nâ��  \n\n*WAIT SEDANG DI SEND*`
			thumb = await getBuffer(anu.thumb)
			kev.sendMessage(from, thumb, image, {quoted: mek, caption: sket})
			buffer = await getBuffer(anu.result)
			kev.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
			break
		case 'ytmp3':
			if (args.length < 1) return reply('Urlnya mana?')
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
			anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=https://www.youtube.com/watch?v=${body.slice(7)}&APIKEY=${XteamKey}`, {method: 'get'})
			reply(ind.wait())
			if (anu.error) return reply(anu.error)
			sket = `â�� *Title* : ${anu.title}\nâ�� *Filesize* : ${anu.filesize}\n\nWAIT SEDANG DI SEND`
			thumb = await getBuffer(anu.thumb)
			kev.sendMessage(from, thumb, image, {quoted: mek, caption: sket})
			buffer = await getBuffer(anu.result)
			kev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
			break
		case 'tiktok':
			if (args.length < 1) return reply('Urlnya mana?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
			reply(ind.wait())
			anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
			if (anu.error) return reply(anu.error)
			buffer = await getBuffer(anu.result)
			kev.sendMessage(from, buffer, video, {quoted: mek})
			break
		case 'joox':
			    if (isBanned) return reply(ind.baned())    
				reply(ind.download)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzKey}`, {method: 'get'})
			      if (anu.error) return reply(anu.error)
				    infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}\n*Filesize* : ${data.filesize}\n*WAIT SEDANG DI SEND*`
				bufferddd = await getBuffer(data.result.thumb)
				lagu = await getBuffer(data.result.mp3)
				kev.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
				kev.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
				break
/*
]=====> RANDOM MENU <=====[
*/
					case 'neko':
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						kev.sendMessage(from, buffer, image, {quoted: mek, caption: 'random neko'})
					break
                case 'nekonime':
kev.updatePresence(from, Presence.composing)
uk = ["anime neko","neko anime","nekonime"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(ind.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `random neko`
})

} catch {
  reply(ind.succes)
}
break	
                     case 'husbu':
kev.updatePresence(from, Presence.composing)
ak = ["anime husbu","husbu anime","husbu"]
hk = ak[Math.floor(Math.random() * ak.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${hk}`, {
  method: 'get'
})
reply(ind.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `random husbu`
})

} catch {
  reply(ind.succes)
}
break	
                	case 'loli':
kev.updatePresence(from, Presence.composing)
uk = ["anime loli","loli anime","loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(ind.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `random loli`
})

} catch {
  reply(ind.succes)
}
break				
					case 'randomnime':
kev.updatePresence(from, Presence.composing)
ek = ["anime wibu","wibu anime","wibu"]
jk = ek[Math.floor(Math.random() * ek.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${jk}`, {
  method: 'get'
})
reply(ind.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `random anime`
})

} catch {
  reply(ind.succes)
}
break	
/*
]=====> OTHER MENU <=====[
*/				
				case 'profile':
    				kev.updatePresence(from, Presence.composing)
    				if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
    				try {
					profil = await kev.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰─────────────────────`
					buff = await getBuffer(profil)
					kev.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
                case 'moddroid':
                  if (isBanned) return reply(ind.baned())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ publisher*: ${hepi.publisher}\n*➸ mod info:* ${hepi.mod_info}\n*➸ size*: ${hepi.size}\n*➸ latest version*: ${hepi.latest_version}\n*➸ genre*: ${hepi.genre}\n*➸ link:* ${hepi.link}\n*➸ download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			kev.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'happymod':
                  if (isBanned) return reply(ind.baned())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ version*: ${hupo.version}\n*➸ size:* ${hupo.size}\n*➸ root*: ${hupo.root}\n*➸ purchase*: ${hupo.price}\n*➸ link*: ${hupo.link}\n*➸ download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			kev.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
					case 'pinterest':
                  if (isBanned) return reply(ind.baned())
					kev.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					kev.sendMessage(from, pok, image, { quoted: mek, caption: `*⟪ PINTEREST ⟫*`})
					break 
					case 'chatprank':
kev.updatePresence(from, Presence.composing)
if (args.length < 1) return reply(`Masukan teks\nContoh : ${prefix}chatprank p/unten`)
tels = body.slice(11)
var teks1 = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
kev.sendMessage(from, hasil, text, {
  quoted: mek
})
break
					case 'slow':
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await kev.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kev.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					tup = await kev.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kev.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					gem = await kev.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kev.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					bas = await kev.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kev.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'brainly':
	                  if (isBanned) return reply(ind.baned())
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					sket = '♡───────────♡\n'
					for (let Y of res.data) {
						sket += `\n*「 BRAINLY 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					kev.sendMessage(from, sket, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					break
				case 'google':
                const googleQuery = body.slice(8)
               if (isBanned) return reply(ind.baned())			
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    kev.sendMessage(from, 'Google Error : ' + e);
                })
                break 
				case 'wiki':
if (args.length < 1) return reply('Masukan query')
tels = body.slice(6)
try {
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}&apikey=BotWeA`, {
  method: 'get'
})
reply(anu.result)

} catch {
  reply(ind.succes)
}
break
				case 'info':
					me = kev.user
					uptime = process.uptime()
					sket = `*➸ Nama bot* : ${botName}\n*➸ Owner* : ${ownerNumber}\n*➸ Nomor Bot* : @${me.jid.split('@')[0]}\n*➸ Prefix* : ${prefix}\n*➸ Total Block Contact* : ${blocked.length}\n*➸ Run time* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					kev.sendMessage(from, buffer, image, {caption: sket, contextInfo:{mentionedJid: [me.jid]}})
					break
			case 'fakta':
fakta = body.slice(1)
const kta = fak[Math.floor(Math.random() * fak.length)]
kev.sendMessage(from, 'Fakta : '+ kta, text, {
  quoted: mek
})
break
			case 'kbbi':
  kev.updatePresence(from, Presence.composing)
  if (args.length < 1) return reply(`Masukan teks\nContoh : ${prefix}kbbi manusia`)
  
  tels = body.slice(6)
  try {
  data = await fetchJson(`https://tobz-api.herokuapp.com/api/kbbi?kata=${tels}&apikey=${TobzKey}`)
  if (data.error) return reply(data.error)
  hasil = `KAMUS BESAR BAHASA INDONESIA\n\n${data.result}`
  reply(hasil)
  
  } catch {
    reply(ind.succes)
  }
  break
            case 'admin':
            case 'owner':
            case 'creator':
                  kev.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  kev.sendMessage(from, 'save nomornya👍',MessageType.text, { quoted: mek} )
					break

/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
]=====> OWNER MENU <=====[
*/
				case 'bc':
					kev.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await kev.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await kev.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kev.sendMessage(_.jid, buff, image, {caption: `${botName}\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${botName}\n\n${body.slice(4)}`)
						}
						reply('*「 SUCCES 」*')
					}
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*「 SUKSES 」* Prefix diubah jadi ➸ : ${prefix}`)
					break
				case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(kev.chats.get(ido).presences), kev.user.jid]
			    kev.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await kev.chats.all()
					kev.setMaxListeners(25)
					for (let _ of anu) {
						kev.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 kev.updatePresence(from, Presence.composing) 
				 kev.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					kev.blockUser (`${body.slice(7)}@c.us`, "add")
					kev.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    kev.blockUser (`${body.slice(9)}@c.us`, "remove")
					kev.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setpp':
					if (!isOwner) return reply(ind.ownerb())
				    kev.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kev.downloadAndSaveMediaMessage(enmedia)
					await kev.updateProfilePicture(botNumber, media)
					reply('>_<')
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg())
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await kev.getProfilePicture(id)
						buffer = await getBuffer(pp)
						kev.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
			                case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor ${bnnd} telah dibanned!`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					ya = body.slice(8)
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor ${ya} telah di unban!`)
					break
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
kev.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('assets/pale.mp3')
kev.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'baka':
const baka = fs.readFileSync('./assets/baka.mp3');
kev.sendMessage(from, baka, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'arigatou':
const arg = fs.readFileSync('./assets/Arigatou.mp3');
kev.sendMessage(from, arg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ara"':
case 'araara':
const ara = fs.readFileSync('./assets/ara.mp3');
kev.sendMessage(from, ara, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tobecountinued':
case 'tbc':
const tbc = fs.readFileSync('./assets/tbc.mp3');
kev.sendMessage(from, tbc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'yamete':
const ymt = fs.readFileSync('./assets/y2yamete.mp3');
kev.sendMessage(from, ymt, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'anone':
case 'anone"':
case 'anoneanone':
const ano = fs.readFileSync('./assets/anone.mp3');
kev.sendMessage(from, ano, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'onichan':
case 'onii':
case 'oniichan':
const oni = fs.readFileSync('./assets/oni.mp3');
kev.sendMessage(from, oni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('assets/sound.mp3')
kev.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./assets/sound1.mp3');
kev.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./assets/sound2.mp3');
kev.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./assets/sound3.mp3');
kev.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./assets/sound4.mp3');
kev.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./assets/sound5.mp3');
kev.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./assets/sound6.mp3');
kev.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./assets/sound7.mp3');
kev.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break														
/*
]=====> TQTO <=====[
> KEVIN KUN
> RAMLAN ID
> REVOER ID
> ARIS ID
> NADIA CANS
> NAZWA
> VHTEAR
> TOBZ
> XTEAM
> MHANKBARBAR
> LOLHUMAN
> NAUFALHOSTER
> STARZ
> VIDEFIKRI
> ZEKS
> JOJO
> All Creator Bot WhatsApp
*/				
			if (isGroup && !isCmd && budy != undefined) {
						console.log(budy)
				//		reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
