const nodemailer = require("nodemailer");
const express = require("express");
const router = express();
const { body, validationResult } = require('express-validator');
const User = require("../model/user_model");
// complete sending email request to user 
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'jimmysuthar08@gmail.com',
        pass: 'ylzallnhcosdpsui'
    }
});

router.get('/sendEmail', [
    // Check if email is valid or not
    body("email").optional().isEmail().withMessage("Provide valid email"),
    // for demo purposes
    body('lastName').trim().not().isEmpty().withMessage('Custoum').isLength({ min: 3, max: 5 }).withMessage('Please enter only letters, numbers'),
    // ADd custom validation function
    body('firstName').custom((value, { req }) => {

        return User.count({ where: { email: req.body.firstName } }).then((user) => {
            console.log(user);
            if (user > 0) {
                console.log(req.body);
                throw new Error("Email is already in use");
                // return Promise.reject("Email is already in use/ without validation");
                // return res.status(200).json({ sucess: false });

            }
        });


        return true;
    })
], async (req, res, next) => {
    const email = req.body.email;
    const errors = validationResult(req);

    // if there is error then return Error
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),


        });
    }
    // if (!email) {
    //     return res.status(404).json({
    //         Message: "Email can't be empty"
    //     });
    // }

    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <jimmysuthar08@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello Jimmy Suthar", // Subject line
        text: "Hello world?", // plain text body
        html: `<html>
        <head>
            <title>Beautiful HTML with Hyperlinks</title>
        </head>
        <body>
            <h1>Welcome to My Beautiful HTML Page</h1>
            <p>This is a sample HTML page with hyperlinks. Below are some links to various websites:</p>
            <ul>
                <li><a href="https://www.example.com">Visit Example.com</a></li>
                <li><a href="https://www.google.com">Go to Google</a></li>
                <li><a href="https://www.github.com">Check out GitHub</a></li>
            </ul>
            <p>Feel free to explore these links and create your own beautiful HTML pages!</p>
        </body>
        </html>` // html body
    }).then((method) => {
        console.log("Message sent: %s", method.messageId);
        return res.status(200).json({
            Message: "Mail Send Successfully"
        });
    });

})

module.exports = router;     