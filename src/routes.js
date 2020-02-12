const express =  require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const ModuleController = require('./Controllers/ModuleController')
const activityController = require('./Controllers/ActivityController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/activities', upload.single('thumbnail'), activityController.create)

routes.post('/modules', ModuleController.store)

module.exports = routes