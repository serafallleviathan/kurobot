const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OTHER MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}brainly*
┃│➸ mencari jawaban soal
┃│➸ *${prefix}pinterest*
┃│➸ mencari gambar pinterest
┃│➸ *${prefix}resepmakanan*
┃│➸ mencari resep makanan
┃│➸ *${prefix}beritahoax*
┃│➸ mencari berota hoax
┃│➸ *${prefix}
┃│➸ contoh : ${prefix}translate id|good morning
┃│➸ *${prefix}lirik*
┃│➸ mencari lirik lagu
┃│➸ *${prefix}virtex*
┃│➸ hehehehe iq kamu tidak 10 kan
┃│➸ *${prefix}jam*
┃│➸ contoh : ${prefix}jam tokyo
┃│➸ *${prefix}namae*
┃│➸ membuat nama ninja kamu
┃│➸ *${prefix}timer*
┃│➸ contoh : ${prefix}timer 1 detik
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.other = other