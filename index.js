const express = require("express");
const app = express();
const connect = require("./src/config/db")
const cors = require("cors");


app.use(cors())
app.use(express.json());

const userController = require("./src/controllers/userCont");
const brandsController = require("./src/controllers/brandCont");
const productsController = require("./src/controllers/productCont");
const categoriesController = require("./src/controllers/categoryCont");
const reviewsController = require("./src/controllers/reviewController");
const orderController = require("./src/controllers/orderCont");
const {register, login } = require("./src/controllers/AuthController")




app.use("/users",userController);
app.use("/brands", brandsController);
app.use("/products", productsController);
app.use("/category", categoriesController);
app.use("/reviews", reviewsController);
app.use("/orders", orderController);
app.post("/register", register)
app.post("/login", login)


app.listen(6789, async ()=>{
    try {
       await connect();
       console.log("connected");
    } catch (error) {
        console.log({error:error.message})
    }
})