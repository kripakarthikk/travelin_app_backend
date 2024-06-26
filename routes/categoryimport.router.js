const express=require("express");
const router=express.Router();

const Category=require('../model/category.model');
const categories=require('../data/categories');

router.route('/').post(async(req,res)=>{
    try{
        const categoryInDB=await Category.insertMany(categories.data);
        res.json(categoryInDB)

    }catch(err){
        console.log(err);
        res.json({message:"could not add category to DB"})

    }


})

module.exports=router;