const express = require('express');
const router = express();
const productModel = require('../util/sq_database');



router.post('/productAdd', async (req, res, next) => {
    const body = req.body;
    await productModel.create({ title: body.title, price: body.price, description: body.description, ImageUrl: body.imageUrl })
        .then((result) => {
            return res.status(201).json({ message: "Data add successfully", sucess: true, data: result });
        })
        .catch((err) => {
            return res.status(404).json({ message: "Data add failed", sucess: false, data: err });

        });
})


module.exports=router;
