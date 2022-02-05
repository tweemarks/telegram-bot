const { userExists } = require("./telegram")
const { getCategories } = require("./tweemarks")
const messages = require("./messages")

const categories = async (bot, ctx) => {
  const username = ctx.message.from.username
  const chatID = ctx.chat.id

  if ((await userExists(username)) === false) {
    bot.telegram.sendMessage(chatID, messages.userNotConnectedMessage)
    bot.telegram.sendMessage(chatID, messages.connectTypeTokenMessage)

    return
  }

  const data = await getCategories(username)
  if (data === false) {
    bot.telegram.sendMessage(chatID, messages.noAnyCategoriesMessage)

    return
  }

  bot.telegram.sendMessage(chatID, messages.showCategoriesMessage(data))
}

module.exports = categories
