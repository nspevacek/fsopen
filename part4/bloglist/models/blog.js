const config = require('../utils/config')
const logger = require('../utils/logger')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const url = config.MONGODB_URI

logger.info(`connecting to ${url}`)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error(`error connecting to MongoDB: ${error.message}`)
    })

mongoose.set('useCreateIndex', true)

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}) 

blogSchema.set('toJSON', {
    transform:( document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blog', blogSchema)