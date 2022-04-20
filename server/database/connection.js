const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGOURI)
        console.log(`Mongo Connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1) //1 is true
    }
}


module.exports = connectDB