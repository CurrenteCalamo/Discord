const { Client, Intents } = require('discord.js')
const { token } = require('./config.json')

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_PRESENCES,
	],
})

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.login(
	'OTcxNzE1OTQzNDMwNTAwNDEz.GF-_Ig.88F2tVwqNZbWyuVuzOWgZcL5kwq4d9q1YPlVxo',
)
