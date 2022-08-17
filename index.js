const { Client, Intents } = require('discord.js')

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
	'MTAwNjkxMTE5NjE1MjIwMTM2Ng.G7A3GP.rNptT3kKOFjHvR1boamblHRgEEeJwWej4LGwXA',
)
