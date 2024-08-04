import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import doctorRouter from './src/routes/doctor.route.js'
import userRouter from './src/routes/user.routes.js'

app.get('/', (req, res) => {
    res.send('<h1>Hello from Express</h1>');
  });
  
app.use('/api/v1/doctor',doctorRouter)
app.use('/api/v1/user',userRouter)




export {app}