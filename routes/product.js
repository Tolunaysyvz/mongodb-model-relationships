const express = require("express")
const {products, commet} = require("../schema/productSchema");

const rout = express.Router();


rout.get("/", async (req,res)=> {
    const product = await products.find().populate("Category","category -_id").
    select("-comment._id");

    res.send(product);
})


rout.get("/:id",async (req,res) => {
    const productid = await products.findById(req.params.id);
    res.send(productid);
})


rout.post("/", async (req,res) => {
    const ProductData = new products({
        name:req.body.name,
        price:req.body.price,
        isActive:req.body.isActive,
        description:req.body.description,
        Category:req.body.Category,
        comment:req.body.comment,
        
    });

    const data = await ProductData.save();

    res.send(data);
    
})


rout.put("/commet/:id",async (req,res) => {

    const productid = await products.findById(req.params.id);

    const commets = new commet({
        name:req.body.name,
        comment:req.body.comment,
    });

    productid.comment.push(commets)
    const uptprodcuntcommet = await productid.save();

    res.send(uptprodcuntcommet);
})

rout.put("/:id", async (req,res) => {
    const product = await products.findById(req.params.id);

    product.name = req.body.name;
    product.price = req.body.price;
    product.isActive = req.body.isActive;
    product.description = req.body.description;
    product.category = req.body.category;

    const productss = await product.save();
    res.send(productss);

})

rout.delete("/commet/:id", async (req,res) => {

    const product = await products.findById(req.params.id);

    const commett = product.comment.id(req.body.commetid);
    commett.remove();
    const upddelete = await product.save();
    res.send(upddelete)

})

rout.delete("/:id",async (req,res) => {
    const product = await products.findByIdAndDelete(req.params.id);

    res.send(product);
})

module.exports = rout;