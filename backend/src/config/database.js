const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@todoapp-hsbsr.mongodb.net/test?retryWrites=true&w=majority`
module.exports = mongoose.connect(uri, { useNewUrlParser: true })
