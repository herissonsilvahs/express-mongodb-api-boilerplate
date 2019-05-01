const mongoose = require('mongoose')

try {
  mongoose.connect(process.env.MONGODB_URI, () => {
  })
  mongoose.Error.messages.general.required = "The attribute '{PATH}' is required"
  mongoose.Error.messages.Number.min = "The '{VALUE}' reported is less than the minimun threshold of '{MIN}'"
  mongoose.Error.messages.Number.max = "The '{VALUE}' reported is greater than the maximun limit of '{MAX}'"
  mongoose.Error.messages.String.enum = "'{VALUE}' is not valid for attribute '{PATH}'"
} catch (err) {
  throw err
}
