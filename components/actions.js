//get database functions
const { deleteUser } = require("./telegram")
const { addTweet } = require("./tweemarks")

const actions = (bot, callbackQueryData, ctx) => {
  //callback query action for confirmOverrideAccount
  if (callbackQueryData == "confirmOverrideAccount_YES") {
    ctx.deleteMessage()
    deleteUser(ctx.from.username)
    ctx.reply(`Done. Call '/connect <token>' once again`)
  } else if (callbackQueryData == "confirmOverrideAccount_NO") {
    ctx.deleteMessage()
    ctx.reply("OK")
  }

  //callback query action for confirmTweemarksAccount
  if (callbackQueryData == "confirmTweemarksAccount_YES") {
    ctx.deleteMessage()
    ctx.reply(`
Connected Your Account Successfully!

Share with me the tweet url and I'll prompt you with Available Categories 
`)
  } else if (callbackQueryData == "confirmTweemarksAccount_NO") {
    deleteUser(ctx.from.username).then(() => {
      ctx.deleteMessage()
      ctx.reply("Reverting back..")
    })
  }

  // handling action for category buttons
  const seperator = "?"
  if (callbackQueryData.includes(seperator)) {
    const categoryName = callbackQueryData.split(seperator)[1]
    const tweetID = callbackQueryData.split(seperator)[0]

    ctx.deleteMessage()

    addTweet(ctx.from.username, categoryName, tweetID).then((res) => {
      ctx.reply("Added Successfully!")
    })
  }
}

module.exports = actions
