import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

//common middleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit: "16kb"}))
app.use(express.static("public"))


//import routes
import healthcheckRouter from './routes/healthcheck.routes.js'

//routes
app.use("/api/healthcheck", healthcheckRouter)


app.get('/', (req,res)=>{
  res.send("/index.html")
})

app.use(errorHandler); 

export { app };
