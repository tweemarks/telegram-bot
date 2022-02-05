// getting firebase admin sdk
const admin = require("firebase-admin")

var serviceAccount = {
  type: "service_account",
  project_id: "tweemarks-2021",
  private_key_id: "d380918342c77477b5bf6886a8465656e7dd2448",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3bCQchno4ggF1\nRZsM0y8GCekgWjkwjCDH14Gb2gDJ6MmQ4TLHnFhilgzOxjddRhPkDJfMvUkvfVuf\nkUdNTHwmPR3oIN7M7y3foxLySI+sr6m8Kd5hMpPCMFS+u4CvaZOsWjXl6+s0v6d1\nWSRvTeYkBywoci8w/vWhvUeczyrBkmhBuAkzmg9gV1wetEakfrWIiE+z11h0Yc5F\nxJ/GM2IgX+rvDfqhc8y3pHP4ucwNHvOMeAnD7OF20Pv88aiznKEpJO2YyEjEAtM8\nlHMn2T/V7TvtaqmQqzHuAyjNttutMWiqUmsf2qxjj7eM0bf4hH8quk/DMtht0jwL\ndOkbeST7AgMBAAECggEAJVqKDh8a09gx+NJ4jYeSe33YMqT9IZRf9qK+O+GNKJFW\nP0GFaF5AJ6+cIx3912p2kYo4/dKMjXXPi3L4HNdXLyhiJ0xOY1jQNEuPB7VcQRQz\nEmVKauv0aGcUUxV3UwHCt6ZVdKHzb/YZ4c2KHHq2RB8L0J7UWnuJxWr5IweTkwDo\nIcT+5T/2QO0OHsFRlqr35Wyt6G3aEry7YME0YQM405Jmv+fMQaFm5lw0vr/gAsW7\nSo6ZSYkKhk9eo1/oidPuxd25OIKEUS3jRgdgiMhjhGf23e55zoQZPXYyqK2/4wbJ\nvTR0HQnG0BdNyLzaEzMriS1jMjiBEICxoWATOD63DQKBgQDcW65/E4jAJzNOF4ho\nix51RSnPI9BNzvZFkEwblyLw5QOmHJvtLP+coaGwh2/ipEjMt6j1MR5zHlMf+TUj\nc1VhCQkwR44i/9Nmmz+kcfr9HgYB5R0xbwCdyPFOg474PqeAdeeBPywzfHfnChSu\nw3oFqWZwV6XtkjjlnyP8Ia8rHwKBgQDVFxI5tDcbDYlPi2ggvABiA6hmgz0EXNe4\n+m9HMYlhyRW74fFiBosZWfUpfJMQNcCySo3PaeCVss7EISZQuB9EAPy2ZeZW1lr5\n0GEoqqEsO4YlZ7s85ori/MWCgBXKMZ3GBjTuljaTB6Qbbl2TT1Bzw21Rnz/I75wF\nOAFjvRxmpQKBgQDJdxEMocFvXOetSBqw6jCIqxlUhrvVx5ildQ4AU6fgcqFpZ9Kv\nf2qbu7LmgI0su2LLuEbDFYtvWJRLMT8CEFpJA0fhWip7mUWgE+SV5pfAf4iihuSv\n43q+x47HZ8R49l+SNTnZkvZIhE3jb/YE6jdPoddEcv4DPKLEXUE7LVjHpQKBgGUh\nOO4X4Fs/dl5A/B8k+k2KDN7yBABRC7Rnbm5sTRYSd/UeCxAJqPRUJC0XSThVOmmj\nRmAckJCbNtQQI34FlBkTGtx5yfKGctDCm4nQSQOUEFsqOstxYpLNgfMoVK8MEyPL\nCE3/DlGDO9gk7dYeu0Dli7lECeKUDQjRBp/OPW9dAoGAWbUU4DsJDMfOeOyVS5tY\nVra7IsYgfrr1TKYWWsSJtkzSHKsySNtJ9yd89OGgUxc4Gk0ok/oMKSNIW5FRoiah\nyT6Bg1NgmKhcmHfprS/5raTtopX8lVHcqb5tZmq4fT6ehYCQ1kAQO9pi8BGD4pO2\ng74F1/tEC+JEcryTAmkqlDk=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-21n2p@tweemarks-2021.iam.gserviceaccount.com",
  client_id: "107133894707154864076",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-21n2p%40tweemarks-2021.iam.gserviceaccount.com",
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

module.exports = db
