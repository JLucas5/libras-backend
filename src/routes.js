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

routes.post('/activities/new', upload.none(), ActivityController.create)
routes.get('/activities/all/:module_id', ActivityController.all)
routes.post('/activities/update/:activity_id', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), ActivityController.update)
routes.delete('/activities/delete/:activity_id', ActivityController.delete)
routes.get('/activities/:activity_id', ActivityController.find)

routes.post('/alternative/add/:activity_id', upload.single('thumbnail'), ActivityController.addAlternative)
routes.get('/alternative/find/:activity_id', ActivityController.findAlternatives)
routes.delete('/alternative/delete/:alternative_id', ActivityController.deleteAlternative)
routes.post('/alternative/edit/:alternative_id', upload.single('thumbnail'),ActivityController.updateAlternative)

routes.get('/modules', DashboardController.show)
routes.post('/modules/new', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), ModuleController.store)
routes.post('/modules/edit/:module_id',upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), ModuleController.edit)
routes.delete('/modules/delete/:module_id', ModuleController.delete)
routes.get('/modules/:module_id', ModuleController.show)


routes.post('/library/new', upload.single('file'), LibraryController.store)
routes.delete('/library/delete/:id', LibraryController.delete)
routes.get('/library/view/:type', upload.none(), LibraryController.show)
routes.post('/library/edit/:id', upload.single('file'), LibraryController.edit)
routes.get('/library/:id', LibraryController.find)


routes.get('/dictionary', DictionaryController.show)
routes.post('/dictionary/new', upload.single('thumbnail'), DictionaryController.store)
routes.get('/dictionary/:id', DictionaryController.find)
routes.post('/dictionary/edit/:id', upload.single('thumbnail'), DictionaryController.edit)
routes.delete('/dictionary/delete/:id', DictionaryController.delete)

module.exports = routes