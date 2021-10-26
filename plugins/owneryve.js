let handler = function (m) {
	this.sendContact(m.chat, '6285808936396', 'Owner NekoBotz :)', m)
}

handler.customPrefix = ['🍭Owner NekoBotz'] 
handler.command = new RegExp

module.exports = handler
