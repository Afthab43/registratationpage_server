const express = require('express');
const connectToDb = require('./dataBase/connection');
const routermMiddleWare = require('./routes/user.routes');
const cors = require('cors');
require(`dotenv`).config()

let app=express()
app.use(express.json())

app.use(cors())

app.use(`/api`,routermMiddleWare)

let startserver=async()=>{
    try {
        await app.listen(process.env.port,()=>{
            console.log(`server running on port ${process.env.port}`)
        })

        connectToDb(process.env.mongo_url)
        console.log(`connected to dataBase`)

    } catch (error) {
        console.log(error.message)
    }

}

startserver()
