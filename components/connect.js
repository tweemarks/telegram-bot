const { newUser, userExists } = require("./telegram")
const { getTwitterData } = require("./twitter")
const messages = require("./messages")

const connect = async (bot, ctx) => {
  const username = ctx.message.from.username
  const chatID = ctx.chat.id
  const text = ctx.message.text

  if (await userExists(username)) {
    bot.telegram.sendMessage(chatID, messages.confirmOverrideAccountMessage, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Yes",
              callback_data: `confirmOverrideAccount_YES`,
            },
            {
              text: "No",
              callback_data: "confirmOverrideAccount_NO",
            },
          ],
        ],
      },
    })

    return
  }

  if (text === "/connect") {
    ctx.reply(messages.connectTypeTokenMessage)

    return
  }

  const token = text.replace("/connect ", "")

  if (token.length != 28) {
    ctx.reply(messages.invalidTokenMessage)

    return
  }
  const userInfo = await getTwitterData(token)
  if (userInfo === false) {
    ctx.reply(invalidTokenMessage)

    return
  }

  bot.telegram.sendMessage(
    chatID,
    messages.confirmTweemarksAccountMessage(
      userInfo.username,
      userInfo.fullName
    ),
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Yes",
              callback_data: `confirmTweemarksAccount_YES`,
            },
            {
              text: "No",
              callback_data: "confirmTweemarksAccount_NO",
            },
          ],
        ],
      },
    }
  )

  await newUser(username, token)

  return true
}

module.exports = connect
