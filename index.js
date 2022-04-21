const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));
const mongoose = require('mongoose');
const route = require('./routes/route')


app.use('/', route);

try {
    //Insert your MongoDB Atlas String here:
    mongoose.connect("mongodb+srv://rahat6713:1819rahat@cluster0.iee0y.mongodb.net/Project_5Group_8?authSource=admin&replicaSet=atlas-ivk86y-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {useNewUrlParser:true});
    console.log(`MongoDB Connection Successful`);
} catch (error) {
    console.log(error);
}




const port = process.env.PORT || 3000;
app.listen(port, console.log(`Express App running on ${port} 🚀`));