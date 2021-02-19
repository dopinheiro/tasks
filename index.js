const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/db')
const consign = require('consign')

app.use(bodyParser.json())

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3000, () => {
    console.log('Serving on port 3000...')
})