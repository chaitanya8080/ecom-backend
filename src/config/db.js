


const mongoose = require("mongoose");


const connect = ()=>{
    return mongoose.connect("mongodb+srv://chaitanya:girase123@cluster0.dypcc.mongodb.net/ecomBackend?retryWrites=true&w=majority")
}

module.exports = connect;

