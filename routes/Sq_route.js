const express = require('express');
const router = express();
const productModel = require('../model/sq_product_model');
const userModel = require('../model/user_model');
const chechAuthor = require('../middleware/chech_auth');



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



router.post('/UserAdd', chechAuthor,async (req, res, next) => {
    const body = req.body;
    await userModel.create({ name: body.name, email: body.email })
        .then((result) => {
            return res.status(201).json({ message: "User add successfully", sucess: true, data: result });
        })
        .catch((err) => {
            return res.status(404).json({ message: "User add failed", sucess: false, data: err });

        });
})


module.exports = router;
