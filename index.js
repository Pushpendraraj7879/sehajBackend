const express=require("express")
const app=express()
require("dotenv").config()
const mongoose=require("mongoose")
const Contact =require("./models/contactModel")
const MONGO_URL=process.env.MONGO_URL
const PORT=process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGO_URL).then(
    console.log("database is connected successfully")
)
app.post("/contact",async(req,res)=>{
    const {name,email,phone}=req.body
        try{
       await Contact.create({name,email,phone})
        res.status(200).json({contact:"contact is store successfully"})
       
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.get("/getContacts",async(req,res)=>{
    try{
     const contacts=await Contact.find()
     if(!contacts){
        throw new Error("contact fetching failed on db")
     }
     res.status(200).json({contacts})
    }catch(error){
             res.status(500).json({error:error.message})
    }
})

















app.listen(PORT,()=>{
    console.log("app is running correctly")
   })