const express = require("express");
const cors = require("cors")
require("dotenv").config()


const sendMail = require("./utils/sendMail")

const app = express();

app.use(cors())

app.use(express.json());

app.get("/health", async(req, res)=>{
     console.log(process.env.GMAIL_APP_KEY);
    res.status(200).json({
        "message":"server is healthy"
    })
})

app.post("/send-mail", async (req, res) =>{
    const {message, to} = req.body;
    try{
        await sendMail(message, to)
        res.status(200).json({
            message:`Email successfully sent to ${to}`
        })
    }catch(err){
        console.log(err);
        res.status(501).json({
            message:"Failed to send the mail"
        })
    }
})


const PORT = 8080;


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})