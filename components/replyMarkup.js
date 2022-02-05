const generateReplyMarkup = (id, categories) => {
  const allCategories = []
  const arrangedCategories = []
  let tempArray = []
  let count = 0
  const lengthOfButtons = 3

  categories.forEach((category) => {
    const buttonObj = {}
    buttonObj.text = category
    try {
      buttonObj.callback_data = `${id}?${category}`
    } catch {}
    allCategories.push(buttonObj)
  })

  allCategories.forEach((button) => {
    if (count < lengthOfButtons) {
      tempArray.push(button)
    } else {
      arrangedCategories.push(tempArray)
      tempArray = []
      count = 0
      tempArray.push(button)
    }
    count += 1
  })

  arrangedCategories.push(tempArray)
  arrangedCategories.push([
    {
      text: "Cancel",
      callback_data: "cancelCategoriesLoaded",
    },
  ])

  const obj = {
    inline_keyboard: arrangedCategories,
  }

  return {
    reply_markup: obj,
  }
}

module.exports = generateReplyMarkup
