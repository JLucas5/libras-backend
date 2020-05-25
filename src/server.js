require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')

const app = express()

mongoose
	.connect(
		'mongodb://admin:edulibras@edulibras-shard-00-00-v9uw7.mongodb.net:27017,edulibras-shard-00-01-v9uw7.mongodb.net:27017,edulibras-shard-00-02-v9uw7.mongodb.net:27017/test?ssl=true&replicaSet=edulibras-shard-0&authSource=admin&retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.catch((e) => {
		console.log(e)
	})
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000)
