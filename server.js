const express  = require('express')
const cors = require("cors");

const dotenv = require('dotenv')

const connectdb = require('./config/dbConnect')

var cookieParser = require('cookie-parser')
const app =  express();
dotenv.config();

app.use(express.json());
app.use(cookieParser())
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
connectdb();

app.use('/api/v1/',require('./routes/userRouter'))
app.use('/api/v1/',require('./routes/promptRoutes'))

app.get('/',(req,res)=>{
    res.send("<h1> this tis  the backend home</h1>")
})


app.listen(8080,(req,res)=>{
    console.log("server was started successfully");
})