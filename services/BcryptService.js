const bcrypt = require('bcrypt-nodejs')

module.exports = {
  generateHash (password) {
    try {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
    } catch (err) {
      throw err
    }
  },
  compareHash (passwordBody, passwordDB) {
    try {
      return bcrypt.compareSync(passwordBody, passwordDB)
    } catch (err) {
      throw err
    }
  }
}
