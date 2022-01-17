require('dotenv').config();
const mongoose = require('mongoose');


function connectDB(){
     
    //database connection

    mongoose.connect(process.env.MONGO_CONNECTION_URL, {  useUnifiedTopology: true});
    const connection = mongoose.connection;

    
    try{
        connection.once('open', () => {
            console.log("MongoDB database connection established successfully");
        })
        } catch(e) {
        console.log(e);
        }
}

module.exports = connectDB;