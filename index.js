const express = require("express");
const app = express();
const connect = require("./src/config/db")
const cors = require("cors");


app.use(cors())
app.use(express.json());

const userController = require("./src/controllers/userCont");

app.use("/users",userController);

app.listen(6789, async ()=>{
    try {
       await connect();
       console.log("connected");
    } catch (error) {
        console.log({error:error.message})
    }
})