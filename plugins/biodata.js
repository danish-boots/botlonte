let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*BIODATA OWNER*

*Nama* : Key
*Umur* : 17
*Kelas* : 11
*Status* : Nolep

*SOSIAL MEDIA*

*instagran* : @me_kyluesky
*Facebook* : none
*Chanel Youtube* : https://youtube.com/c/Kyluesky
*Gmail* : kylueskynih@gmail.com


_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'key')).buffer(), ext, 'nekopoi.care', 'Nomor Owner', '.nowner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
