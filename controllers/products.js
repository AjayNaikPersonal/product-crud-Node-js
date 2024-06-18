const productSchema = require('../models/products');

const getAllProducts = async (req,res)=>{
    try {
        const products = await productSchema.find({});
        return products;
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

let product = {
    name :"product 3",
    inStock : true,

}
const createProduct = async (req,res)=>{
    try {
        const myProduct = await productSchema.create(product);
        res.status(200).json(myProduct);
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

const getProduct = async (req,res)=>{
    const productID = req.params.id;
    try {
        const MyProduct = await productSchema.findOne({_id : productID})
        if(!MyProduct){
            res.status(404).json({msg: ` product with id ${productID} not found`});
        }
        res.status(200).json(MyProduct);
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

const updateProduct =async (req,res)=>{
    const productID = req.params.id;
    try {
        const MyProduct = await productSchema.findOne({_id : productID})
        if(!MyProduct){
            res.status(404).json({msg: ` product with id ${productID} not found`});
        }
        MyProduct.inStock = false;
        MyProduct.save();
        res.status(200).json(MyProduct);
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

const deleteProduct = (req,res)=>{
    res.send("deleting a product..")
}

module.exports = {
    getAllProducts, createProduct,getProduct,updateProduct,deleteProduct
}