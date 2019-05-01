const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exampleSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  status: {
    required: true,
    type: String,
    enum: ['enabled', 'disabled'],
    default: 'enabled'
  }
}, {timestamps: true})

module.exports = mongoose.model('Example', exampleSchema)
