const express =  require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const ModuleController = require('./Controllers/ModuleController')
const ActivityController = require('./Controllers/ActivityController')
const DashboardController = require('./Controllers/DashboardController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/activities', upload.single('thumbnail'), ActivityController.create)

routes.post('/activities/update/:activity_id', upload.single('thumbnail'), ActivityController.update)

routes.post('/modules/new', ModuleController.store)

routes.get('/modules', DashboardController.show)

routes.delete('/modules/delete/:id', ModuleController.delete)

routes.get('/modules/:module_id', ModuleController.show)

module.exports = routes