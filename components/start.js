const message = `
Heyy, I'm Tweemarks Bot!

type '/connect <token>' to connect your Telegram Account with Tweemarks account.
Replace <token> by the token from tweemarks.tk
`

const start = (ctx) => {
  ctx.reply(message)
}

module.exports = start
