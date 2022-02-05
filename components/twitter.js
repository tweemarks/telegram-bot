const db = require("./firebase")
const collection = "twitter_usernames"

const getTwitterData = async (uid) => {
  const docRef = db.collection(collection).doc(uid)

  const doc = await docRef.get()
  if (!doc.exists) {
    return false
  } else {
    return doc.data()
  }
}

module.exports = {
  getTwitterData,
}
