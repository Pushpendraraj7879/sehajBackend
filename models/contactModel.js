const mongoose=require("mongoose")
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        }

} )

const contactModel= mongoose.model("contact",contactSchema)
module.exports=contactModel