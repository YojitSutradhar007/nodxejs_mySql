const nodemailer = require("nodemailer");
const express = require("express");
const router = express();
// complete sending email request to user 
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'jimmysuthar08@gmail.com',
        pass: 'ylzallnhcosdpsui'
    }
});



router.get('/sendEmail', async (req, res, next) => {

    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <jimmysuthar08@gmail.com>', // sender address
        to: "jimmysuthar789@gmail.com", // list of receivers
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