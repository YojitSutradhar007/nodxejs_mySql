const express = require('express');
const app = express();
const Product = require('../model/product_model');
const db = require('../util/database');


// app.use('/ab?cd', (req, res) => {
//     res.send('ab?cd')
// })

const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

const cb2 = function (req, res) {
    res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

app.get('/product/:id', (req, res, next) => {
    const id = req.params.id;
    db.execute('SELECT * FROM products WHERE id = ?', [id])
        .then(([data,filed]) => {
            return res.status(200).json({ sucess: true,data: data });
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json({ message: "query Failed ", sucess: false });
        });

})


app.route('/book')
    .get((req, res) => {
        db.execute('SELECT * FROM products').then(([ROWS, FIELDATA]) => {
            console.log(ROWS);
            res.status(200).json(ROWS);
        }).catch((err) => { });

    })
    .post((req, res) => {
        const body = req.body;
        db.execute(`INSERT INTO products(title,price,description,imageUrl) VALUES (?,?,?,?)`, [body.title, body.price, body.description, body.imageUrl])
            .then((result) => {
                return res.status(200).json({ message: "Added product Successfully", sucess: true });
            })
            .catch((err) => {
                console.log(err);
                return res.status(400).json({ message: "insertation Failed ", sucess: false });
            })
    })
    .put((req, res) => {
        res.send('Update the book')
    })

app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')

    next()
}, (req, res) => {
    res.send('Hello from B!')
})

app.get(/a/, (req, res) => {
    res.send('/a/')
})
app.get('/home', (req, res) => {
    const query = req.query
    const pro = new Product("Test title Written by jimmy", "Test description");
    pro.print();
    res.status(200).send(`Hello jimmmy ${pro.title} name ${query.name} age ${query.age}`);
})

module.exports = app;