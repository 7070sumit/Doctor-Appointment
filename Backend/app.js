import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express()


const corsOptions = {
  origin: 'http://localhost:5173', // Update this to your frontend domain
  credentials: true, // Allow credentials (cookies)
};
app.use(cors(corsOptions))

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