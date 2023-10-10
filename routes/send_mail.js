const nodemailer = require("nodemailer");
const express = require("express");
const router = express();

const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 587,
    auth: {
        user: 'jimmysuthar08@gmail.com',
        pass: '@123Password'
    }
});



router.get('/sendEmail', async (req, res, next) => {

    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <peter.heidenreich75@ethereal.email>', // sender address
        to: "jimmysuthar789@gmail.com", // list of receivers
        subject: "Hello Jimmy Suthar", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    }).then((method) => {
        console.log("Message sent: %s", method.messageId);
        return res.status(200).json({
            Message: "Mail Send Successfully"
        });
    });

})

module.exports = router;     