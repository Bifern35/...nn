var express = require('express');
var app = express();
var db = require('./database');

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//Products
app.get('/api/products/',db.getAllProducts);
app.get('/api/products/:id',db.getProductByID);
app.post('/api/products/', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);
//Users
app.get('/api/users/',db.getAllUsers);
app.get('/api/users/:id',db.getUserByID);
app.post('/api/users/', db.insertUser);
app.put('/api/users/:id', db.updateUser);
app.delete('/api/users/:id', db.deleteUser);
//Purchases
app.get('/api/purchases/',db.getAllPurchases);
app.get('/api/purchases/:id',db.getPurchaseByID);
app.post('/api/purchases/', db.insertPurchase);
app.put('/api/purchases/:id', db.updatePurchase);
app.delete('/api/purchases/:id', db.deletePurchase);

//failed
app.get('/api/json', function (req, res) {
    res.status(500).json({
        status: 'failed',
        message: 'REST API is NOT working'
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});