import express from 'express'
import cors from 'cors'
import {dbConnection } from './database/dbConnection.js'

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
dbConnection()





app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))