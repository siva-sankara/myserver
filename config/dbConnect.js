const mongoose =  require('mongoose')
require('dotenv').config()
const connectdb = async()=>{
    try {
        const dbcoonnect = await mongoose.connect(process.env.MONGODB_URL)
        .then(()=> console.log("DB connceted successfully"))
        .catch((err)=>console.log(err))
    } catch (error) {
        console.log("mongoodse error with in the coonnection",error);
    }
}

module.exports = connectdb;