const {mongoose, Schema } = require("mongoose");


const orderSchema = mongoose.Schema({
    name:String,
    comment:String,
    Date:{
        type:Date,
        default:Date.now,
    }
});

const Productschema = mongoose.Schema({
    name:String,
    price:Number,
    isActive:Boolean,
    description:String,
    Date:{
        type:Date,
        default:Date.now
    },

    Category: {type:Schema.Types.ObjectId, ref:"Category"},

    comment:[orderSchema]
   
})

const products = mongoose.model("Products",Productschema);
const commet = mongoose.model("Commet",orderSchema);

module.exports = {products, commet };