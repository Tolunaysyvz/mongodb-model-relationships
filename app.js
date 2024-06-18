const express = require("express");
const mongoose = require("mongoose");
const product = require("./routes/product");
const category = require("./routes/category");


const app = express();

app.use(express.json());

( async() => {
    try{
        await mongoose.connect("mongodb+srv://Tolunays:124578963@cluster0.6ddows8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDp connect")
    }

    catch(err){
        console.log(err)
    }
})()


app.use("/products",product)
app.use("/category",category)



app.listen(7001,() => {
    console.log("Api Start")
})