/**
 * npm install dotenv esm express morgan helmet mysql2 sequelize sequelize-cli
 * npm install nodemon --save-dev
 *
 *  */
require('dotenv/config')
const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const routes = require('./routes')
const { isAuthenticated } = require('./utils/isAuthenticated')

app.use(helmet())
app.use(morgan('combined'))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

app.use('/user', isAuthenticated, routes.user)

app.use((req, res) => {
  res.status(404).send('404 : Page not found')
})

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port : ${process.env.PORT}`)
})
