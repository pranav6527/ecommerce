import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
const app  = express()

dotenv.config()

app.use(morgan('dev'))

app.use(express.json())

//db connect

connectDB();

app.get('/hello',(req,res)=>{
    res.send(`<button>Pranav</button>`)
})

app.post("/send",(req,res)=>{
    const name = req.body.name
    const add = req.body.add
    res.send(`<h1>${name}</h1>`) 
})

const PORT = process.env.PORT || 8080


app.listen(PORT,()=>{console.log(`Server running on ${PORT}`.bgCyan)})
