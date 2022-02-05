const { Telegraf } = require("telegraf") //importing telegraf package
require("dotenv").config() //importing dotenv package for environmental variables

const bot_token = process.env.TELEGRAM_TOKEN //getting telegram token from .env file

//getting components
const start = require("../components/start")
const connect = require("../components/connect")
const categories = require("../components/categories")
const tweetURL = require("../components/tweetURL")
const actions = require("../components/actions")

//initializing telegram bot
const bot = new Telegraf(bot_token)

// handling start command
bot.start((ctx) => {
  start(ctx)
})

// handling the /connect command
bot.command("connect", (ctx) => {
  connect(bot, ctx)
})

//callback query action for confirmOverrideAccount
bot.action((callbackQueryData, ctx) => {
  actions(bot, callbackQueryData, ctx)
})

//show categories
bot.command("categories", (ctx) => {
  categories(bot, ctx)
})

//look for tweet urls
bot.hears((probablyLink, ctx) => {
  tweetURL(bot, ctx, probablyLink)
})

bot.action("cancelCategoriesLoaded", (ctx) => {
  ctx.deleteMessage()
  ctx.reply("Cancelled.")
})

// bot.launch()

// listen for web hooks
exports.handler = (event, context, callback) => {
  const tmp = JSON.parse(event.body) // get data passed to us
  bot.handleUpdate(tmp) // make Telegraf process that data
  return callback(null, {
    // return something for webhook, so it doesn't try to send same stuff again
    statusCode: 200,
    body: "",
  })
}
