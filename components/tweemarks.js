const db = require("./firebase")
const { getUID } = require("./telegram")

const collection = "users"

const getCategories = async (username) => {
  let uid = await getUID(username)

  if (uid === false) {
    return false
  }

  const docRef = db.collection(collection).doc(uid)
  const doc = await docRef.get()

  if (!doc.exists) {
    return false
  }

  let categories = []
  for (let category of Object.keys(doc.data())) {
    categories.push(category)
  }
  if (isEmpty(categories)) {
    return false
  }
  return categories.sort()
}

const addTweet = async (username, categoryName, tweetID) => {
  let uid = await getUID(username)

  const docRef = db.collection("users").doc(uid)
  let currentTweets

  const doc = await docRef.get()
  if (!doc.exists) {
  } else {
    currentTweets = doc.data()[categoryName]
  }

  currentTweets.push(tweetID)

  const res = await docRef.set(
    {
      [categoryName]: currentTweets,
    },
    { merge: true }
  )

  return res
}

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false
  }

  return true
}

module.exports = {
  getCategories,
  addTweet,
}
