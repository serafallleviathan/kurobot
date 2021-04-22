const help = (pushname, prefix, botName, ownerName, time, kyun, uptime, weton, week, date, totalchat, sender) => {
        return `🔰 -----[ *MENU ${botName}* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│ ░█─▄▀ ──── ░█▀▀▄ ────
┃│ ░█▀▄─ ░█░█ ░█▀▀▄ ░█▀█
┃│ ░█─░█ ░█▄█ ░█─░█ ░█▄█
┃╰──────────────────
┃╭──────────────────
┃│➸ NAMA: ${pushname}
┃│➸ WA: wa.me/${sender.split("@")[0]}
┃│➸ PREFIX: ${prefix}
┃│➸ JAM: ${time}
┃│➸ HARI: ${week} ${weton}
┃│➸ TANGGAL: ${date}
┃│➸ RUNTIME: ${kyun(uptime)}
┃│➸ CHAT: ${totalchat.length}
┃│➸ GROUP ANIME ONGOING:
┃│╰≽ https://chat.whatsapp.com/IMKxDcSDQY5HZZDwuqmnwG
┃│➸ GITHUB:
┃│╰≽ https://github.com/serafallleviathan
┃│╰≽ https://github.com/serafallleviathan/kurobot
┃│╰≽ https://github.com/serafallleviathan/selfbot
┃╰──────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│➸ *${prefix}info*
┃│╰≽ _info bot_
┃│➸ *${prefix}iklan*
┃│╰≽ _ikaln bot_
┃│➸ *${prefix}profile*
┃│╰≽ _buat liat profile mu_
┃│➸ *${prefix}owner*
┃│╰≽ _owner bot_
┃│➸ *${prefix}ping*
┃│╰≽ _speed_
┃│➸ *${prefix}delete*
┃│╰≽ _hapus pesan bot_
┃│➸ *${prefix}kodebahasa*
┃│╰≽ _kodebahasa_
┃╰──────────────────
┃──────MAIN MENU──────
┃╭──────────────────
┃│➸ *${prefix}sticker*
┃│➸ *${prefix}toimg*
┃│➸ *${prefix}togif*
┃│➸ *${prefix}tomp3*
┃│➸ *${prefix}shorturl* <url>
┃│➸ *${prefix}tts*
┃│➸ *${prefix}ttp*
┃│➸ *${prefix}qr*
┃│➸ *${prefix}barcode*
┃│➸ *${prefix}gtav*
┃│➸ *${prefix}drawing*
┃│➸ *${prefix}rip*
┃│➸ *${prefix}wasted*
┃│➸ *${prefix}wanted*
┃│➸ *${prefix}passed*
┃│➸ *${prefix}triggered*
┃│➸ *${prefix}jumlahhuruf*
┃│➸ *${prefix}jadwaltv* <quary>
┃│➸ *${prefix}translate* <kode bahasa> <kalimat>
┃│➸ *${prefix}jam*
┃│➸ *${prefix}igstalk*
┃│➸ *${prefix}timer*
┃│➸ *${prefix}kalkulator*
┃│➸ *${prefix}chatprank* <kata1>/<kata2>
┃╰──────────────────
┃────DOWNLOAD MENU────
┃╭──────────────────
┃│➸ *${prefix}play* <quary>
┃│➸ *${prefix}joox* <quary>
┃│➸ *${prefix}ytmp4* <url>
┃│➸ *${prefix}ytmp3* <url>
┃│➸ *${prefix}tiktok* <url>
┃│➸ *${prefix}pinterest* <quary>
┃│➸ *${prefix}ssweb* <url>
┃│➸ *${prefix}lirik* <judul lagu>
┃╰──────────────────
┃─────ANIME MENU─────
┃╭──────────────────
┃│➸ *${prefix}jadwalanime*
┃│➸ *${prefix}sarananime*
┃│➸ *${prefix}wait*
┃│➸ *${prefix}neonimesearch* <quary>
┃│➸ *${prefix}neonimeongoing*
┃│➸ *${prefix}bacakomik* <quary>
┃│➸ *${prefix}randomnine*
┃│➸ *${prefix}waifu*
┃│➸ *${prefix}husbu*
┃│➸ *${prefix}neko*
┃│➸ *${prefix}loli*
┃╰──────────────────
┃─────SEARCH MENU─────
┃╭──────────────────
┃│➸ *${prefix}google* <quary>
┃│➸ *${prefix}brainly* <quary>
┃│➸ *${prefix}wiki* <quary>
┃│➸ *${prefix}fakta*
┃│➸ *${prefix}kbbi* <kata>
┃│➸ *${prefix}film* <quary>
┃│➸ *${prefix}ytsearch* <quary>
┃╰──────────────────
┃─────SOUND MENU─────
┃╭──────────────────
┃│➸ *${prefix}pale*
┃│➸ *${prefix}baka*
┃│➸ *${prefix}arigatou*
┃│➸ *${prefix}yamete*
┃│➸ *${prefix}araara*
┃│➸ *${prefix}ouniichan*
┃│➸ *${prefix}sound* 1-7
┃│➸ *${prefix}bass*
┃│➸ *${prefix}tupai*
┃│➸ *${prefix}slow*
┃╰──────────────────
┃──────TEXT MENU──────
┃╭──────────────────
┃│➸ *${prefix}nulis* <text>
┃│➸ *${prefix}halloweentext* <text>
┃│➸ *${prefix}gemboktext* <text>
┃│➸ *${prefix}neontext* <text>
┃│➸ *${prefix}harrytext* <text>
┃╰──────────────────
┃──────GRUP MENU──────
┃╭──────────────────
┃│➸ *${prefix}welcome* 1|0
┃│➸ *${prefix}antilinkgrup* 1|0
┃│➸ *${prefix}grup* buka|tutup
┃│➸ *${prefix}infogc*
┃│➸ *${prefix}linkgrup*
┃│➸ *${prefix}grupdesc*
┃│➸ *${prefix}add* <62xxxxx>
┃│➸ *${prefix}kick*
┃│➸ *${prefix}demote*
┃│➸ *${prefix}promote*
┃│➸ *${prefix}tagall*
┃│➸ *${prefix}hidetag*
┃│➸ *${prefix}listonline*
┃│➸ *${prefix}admin*
┃│➸ *${prefix}setname*
┃│➸ *${prefix}setdesc*
┃╰──────────────────
┃─────OWNER MENU─────
┃╭──────────────────
┃│➸ *${prefix}hiden*
┃│➸ *${prefix}leave*
┃│➸ *${prefix}bc*
┃│➸ *${prefix}clearall*
┃│➸ *${prefix}readall*
┃│➸ *${prefix}setprefix*
┃│➸ *${prefix}block*
┃│➸ *${prefix}unblock*
┃│➸ *${prefix}setpp*
┃╰──────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.help = help