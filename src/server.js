require("dotenv").config()

const express =  require('express')
const cors = require('cors')
const mongoose =  require('mongoose')
const routes =  require('./routes')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://libras:k1k0b1du@cluster0-f1kph.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
mongoose.set('useCreateIndex', true);

app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333)