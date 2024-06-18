const express = require("express");
const category = require("../schema/categorySchema");

const rout = express.Router();

rout.get("/", async (req,res) => {
    const Category = await category.find().populate("product","name price -_id");

    res.send(Category); 
});

rout.get("/:id",async (req,res) => {
    const categoryId = await category.findById(req.params.id);

    res.send(categoryId);
})

rout.post("/", async (req,res) =>{
    const categoryData = new category({
        category:req.body.category,
        product:req.body.product,
        
    });

    const categoryname = await categoryData.save();
    res.send(categoryname)
})


rout.put("/:id",async (req,res) => {
    const categoryid = await category.findById(req.params.id);

    categoryid.category = req.body.Category;
    

    const uptCategory = await categoryid.save();
    res.send(uptCategory);
})

module.exports = rout;