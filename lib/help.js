const help = (pushname, prefix, botName, ownerName, time, kyun, uptime, weton, week, date, totalchat, sender) => {
        return `π° -----[ *MENU ${botName}* ]----- π°
Hallo, ${pushname} π
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­ββββββββββββββββββ
ββ βββββ ββββ βββββ ββββ
ββ βββββ ββββ βββββ ββββ
ββ βββββ ββββ βββββ ββββ
ββ°ββββββββββββββββββ
ββ­ββββββββββββββββββ
βββΈ NAMA: ${pushname}
βββΈ WA: wa.me/${sender.split("@")[0]}
βββΈ PREFIX: ${prefix}
βββΈ JAM: ${time}
βββΈ HARI: ${week} ${weton}
βββΈ TANGGAL: ${date}
βββΈ RUNTIME: ${kyun(uptime)}
βββΈ CHAT: ${totalchat.length}
βββΈ GROUP ANIME ONGOING:
βββ°β½ https://chat.whatsapp.com/IMKxDcSDQY5HZZDwuqmnwG
βββΈ GITHUB:
βββ°β½ https://github.com/serafallleviathan
βββ°β½ https://github.com/serafallleviathan/kurobot
βββ°β½ https://github.com/serafallleviathan/selfbot
ββ°ββββββββββββββββββ
ββββββββββββββββββββββ
ββββββββββββββββββββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}info*
βββ°β½ _info bot_
βββΈ *${prefix}iklan*
βββ°β½ _ikaln bot_
βββΈ *${prefix}profile*
βββ°β½ _buat liat profile mu_
βββΈ *${prefix}owner*
βββ°β½ _owner bot_
βββΈ *${prefix}ping*
βββ°β½ _speed_
βββΈ *${prefix}delete*
βββ°β½ _hapus pesan bot_
βββΈ *${prefix}kodebahasa*
βββ°β½ _kodebahasa_
ββ°ββββββββββββββββββ
βββββββMAIN MENUββββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}sticker*
βββΈ *${prefix}toimg*
βββΈ *${prefix}togif*
βββΈ *${prefix}tomp3*
βββΈ *${prefix}shorturl* <url>
βββΈ *${prefix}tts*
βββΈ *${prefix}ttp*
βββΈ *${prefix}qr*
βββΈ *${prefix}barcode*
βββΈ *${prefix}gtav*
βββΈ *${prefix}drawing*
βββΈ *${prefix}rip*
βββΈ *${prefix}wasted*
βββΈ *${prefix}wanted*
βββΈ *${prefix}passed*
βββΈ *${prefix}triggered*
βββΈ *${prefix}jumlahhuruf*
βββΈ *${prefix}jadwaltv* <quary>
βββΈ *${prefix}translate* <kode bahasa> <kalimat>
βββΈ *${prefix}jam*
βββΈ *${prefix}igstalk*
βββΈ *${prefix}timer*
βββΈ *${prefix}kalkulator*
βββΈ *${prefix}chatprank* <kata1>/<kata2>
ββ°ββββββββββββββββββ
βββββDOWNLOAD MENUββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}play* <quary>
βββΈ *${prefix}joox* <quary>
βββΈ *${prefix}ytmp4* <url>
βββΈ *${prefix}ytmp3* <url>
βββΈ *${prefix}tiktok* <url>
βββΈ *${prefix}pinterest* <quary>
βββΈ *${prefix}ssweb* <url>
βββΈ *${prefix}lirik* <judul lagu>
ββ°ββββββββββββββββββ
ββββββANIME MENUβββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}jadwalanime*
βββΈ *${prefix}sarananime*
βββΈ *${prefix}wait*
βββΈ *${prefix}neonimesearch* <quary>
βββΈ *${prefix}neonimeongoing*
βββΈ *${prefix}bacakomik* <quary>
βββΈ *${prefix}randomnine*
βββΈ *${prefix}waifu*
βββΈ *${prefix}husbu*
βββΈ *${prefix}neko*
βββΈ *${prefix}loli*
ββ°ββββββββββββββββββ
ββββββSEARCH MENUβββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}google* <quary>
βββΈ *${prefix}brainly* <quary>
βββΈ *${prefix}wiki* <quary>
βββΈ *${prefix}fakta*
βββΈ *${prefix}kbbi* <kata>
βββΈ *${prefix}film* <quary>
βββΈ *${prefix}ytsearch* <quary>
ββ°ββββββββββββββββββ
ββββββSOUND MENUβββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}pale*
βββΈ *${prefix}baka*
βββΈ *${prefix}arigatou*
βββΈ *${prefix}yamete*
βββΈ *${prefix}araara*
βββΈ *${prefix}ouniichan*
βββΈ *${prefix}sound* 1-7
βββΈ *${prefix}bass*
βββΈ *${prefix}tupai*
βββΈ *${prefix}slow*
ββ°ββββββββββββββββββ
βββββββTEXT MENUββββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}nulis* <text>
βββΈ *${prefix}halloweentext* <text>
βββΈ *${prefix}gemboktext* <text>
βββΈ *${prefix}neontext* <text>
βββΈ *${prefix}harrytext* <text>
ββ°ββββββββββββββββββ
βββββββGRUP MENUββββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}welcome* 1|0
βββΈ *${prefix}antilinkgrup* 1|0
βββΈ *${prefix}grup* buka|tutup
βββΈ *${prefix}infogc*
βββΈ *${prefix}linkgrup*
βββΈ *${prefix}grupdesc*
βββΈ *${prefix}add* <62xxxxx>
βββΈ *${prefix}kick*
βββΈ *${prefix}demote*
βββΈ *${prefix}promote*
βββΈ *${prefix}tagall*
βββΈ *${prefix}hidetag*
βββΈ *${prefix}listonline*
βββΈ *${prefix}admin*
βββΈ *${prefix}setname*
βββΈ *${prefix}setdesc*
ββ°ββββββββββββββββββ
ββββββOWNER MENUβββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}hiden*
βββΈ *${prefix}leave*
βββΈ *${prefix}bc*
βββΈ *${prefix}clearall*
βββΈ *${prefix}readall*
βββΈ *${prefix}setprefix*
βββΈ *${prefix}block*
βββΈ *${prefix}unblock*
βββΈ *${prefix}setpp*
ββ°ββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *POWERED BY ${ownerName}* ]----- π°`
}
exports.help = help