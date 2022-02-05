const tweemarks_url = "tweemarks.tk"

const confirmOverrideAccountMessage = `
An account already exists, do you want to override?

If you choose yes, your account history will be deleted and you'll have to command '/connect <token>' once again.
`

const connectTypeTokenMessage = `
Type the command in '/connect <token>' format or recheck your token.

You can get the token by logging in at ${tweemarks_url}
`

const invalidTokenMessage = `
Invalid Token!
${connectTypeTokenMessage}
`

const confirmTweemarksAccountMessage = (username, name) => {
  return `
  Confirm Your Associated Twitter Account:
  Username: ${username}
  Profile Name: ${name}
  `
}

const noAnyCategoriesMessage = `
You have no any categories. Log in to ${tweemarks_url} and create one.
`

const showCategoriesMessage = (categories) => {
  let categoriesMessage = ``
  categories.forEach((category, index) => {
    categoriesMessage += `
    ${index + 1}] ${category}
    `
  })

  return `
  You have these available categories: 
  ${categoriesMessage}

  To add more, log in to ${tweemarks_url}
  `
}

const userNotConnectedMessage = `
You've not connected your Tweemarks account to this Telegram account, first connect and then use the commands
`

module.exports = {
  confirmOverrideAccountMessage,
  connectTypeTokenMessage,
  invalidTokenMessage,
  confirmTweemarksAccountMessage,
  noAnyCategoriesMessage,
  showCategoriesMessage,
  userNotConnectedMessage,
}
