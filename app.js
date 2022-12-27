require("dotenv").config()
const express = require('express')
const app = express()
require('./db/conn')
const router = require('./routes/router')
const cors = require('cors')
const cookieParser = require("cookie-parser")


const port = process.env.PORT || 8080

// frontend will run on 3000 port and backend will run on 8080 port. So, whenever we will send data it will throw an error called 'Cross-Origin Resourse Sharing'
app.use(cors())
app.use(express.json())
app.use(router)
app.use(cookieParser())

app.listen(port, () => {
    console.log(`server started at port no: ${port}`);
})