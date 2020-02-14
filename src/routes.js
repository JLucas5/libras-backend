const express =  require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const ModuleController = require('./Controllers/ModuleController')
const ActivityController = require('./Controllers/ActivityController')
const DashboardController = require('./Controllers/DashboardController')
const LibraryController = require('./Controllers/LibraryController')
const DictionaryController = require('./Controllers/DictionaryController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/activities', upload.single('thumbnail'), ActivityController.create)
routes.post('/activities/update/:activity_id', upload.single('thumbnail'), ActivityController.update)
routes.delete('/activities/delete/:activity_id')
routes.get('/modules/:module_id', ModuleController.show)

routes.post('/modules/new', ModuleController.store)
routes.get('/modules', DashboardController.show)
routes.delete('/modules/delete/:id', ModuleController.delete)

routes.post('/library', LibraryController.show)
routes.post('/library/new', upload.single('thumbnail'), LibraryController.store)

routes.post('dictionary', DictionaryController.show)
routes.post('dictionary/new', upload.single('thumbnail'), DictionaryController.store)


module.exports = routes