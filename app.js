const express = require('express')
const path = require('path')
const db = require('./config/dbconfig.js')

const app = express()

const public = path.join(__dirname, './public')
app.use(express.static(public))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('APP Run on Port 3000')
})

app.use('/', require('./routes/pages'))
app.use('/', require('./routes/displayData'))
app.use('/auth', require('./routes/auth'))