const generateReplyMarkup = require("./replyMarkup")
const { userExists } = require("./telegram")
const { getCategories } = require("./tweemarks")

//validating tweet url
function validateTweetID(value) {
  if (
    validURL(value) &&
    value.includes("twitter.com") &&
    value.includes("status/")
  ) {
    let index = value.indexOf("status/")
    index += 7
    return value.substring(index, index + 19)
  } else if (!isNaN(value) && value.length === 19) {
    return value
  } else {
    return -1
  }
}
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ) // fragment locator
  return !!pattern.test(str)
}

const tweetURL = async (bot, ctx, probablyLink) => {
  const id = validateTweetID(probablyLink)
  if (id === -1) {
    ctx.reply("whaaat??")

    return
  }

  const username = ctx.message.from.username
  const chatID = ctx.chat.id

  if ((await userExists(username)) === false) {
    bot.telegram.sendMessage(chatID, userNotConnectedMessage)
    bot.telegram.sendMessage(chatID, connectTypeTokenMessage)

    return
  }

  const data = await getCategories(username)

  if (data === false) {
    bot.telegram.sendMessage(chatID, noAnyCategoriesMessage)

    return
  }

  bot.telegram.sendMessage(
    chatID,
    "Choose a Category to Add: ",
    generateReplyMarkup(id, data)
  )
}

module.exports = tweetURL
