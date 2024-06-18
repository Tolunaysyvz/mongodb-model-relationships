const{ mongoose, Schema }= require("mongoose");
    


const categorySchema = mongoose.Schema({
    category:String,
    Date:{
        type:Date,
        default:Date.now
    },

    product:{type:Schema.Types.ObjectId, ref:"Products"},

});

const Category = mongoose.model("Category",categorySchema);

module.exports = Category;