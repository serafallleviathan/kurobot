exports.wait = () => {
	return`*「❗」WAIT*`
}

exports.download = ()=> {
	return`*「❗」WAIT*`
}

exports.afkOn = (pushname, reason) => {
return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
return `*${pushname}* menghubungkan kembali`
}

exports.error = () => {
	return `*error*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY AJA NIH BRO, TAPI KAU SUDAH KU BANNED , KALO MAU DI UNBAN BILANG OWNER https://wa.me/6283141621181 :V*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba Lagi*`
}

exports.linkga = () => {
	return`*「❗」link tidak valid*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOT HARUS JADI ADMIN*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW GAK AKTIF*`
}

exports.wrongf = () => {
	return`*「🤔」Teks nya mana kak?*`
}

exports.clears = () => {
	return`*「🚮」Clear all Success*`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi afk, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkOn = () => {
    return `Fitur AFK berhasil *diaktifkan*!`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}
