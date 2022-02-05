const db = require("./firebase")
const collection = "telegram"

const userExists = async (username) => {
  const docRef = db.collection(collection).doc(username)

  const doc = await docRef.get()
  if (doc.exists === false) {
    return false
  }
  return true
}

const newUser = async (username, uid) => {
  const docRef = db.collection(collection).doc(username)

  if (await userExists(username)) {
    return false
  }

  const res = await docRef.set(
    {
      firebase_uid: uid,
    },
    {
      merge: true,
    }
  )

  return true
}

const deleteUser = async (username) => {
  const docRef = db.collection("telegram").doc(username)

  const res = await docRef.delete()
  return res
}

const getUID = async (username) => {
  const docRef = db.collection(collection).doc(username)

  const doc = await docRef.get()

  if (!doc.exists) {
    return false
  }

  return doc.data().firebase_uid
}

module.exports = {
  userExists,
  newUser,
  deleteUser,
  getUID,
}
