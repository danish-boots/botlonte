let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*BIODATA OWNER*

*Nama* : Danish
*Umur* : Private
*Kelas* : Private
*Status* : Private

*SOSIAL MEDIA*

*instagran* : @danish.or
*Facebook* : none
*Chanel Youtube* : none
*Gmail* : danishganzz.id@gmail.com

_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'DanishGanz')).buffer(), ext, 'Recoded By DanishGanz', 'Nomor Owner', '.nowner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

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