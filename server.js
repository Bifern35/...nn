//*npm init --yes
//*npm install express --save
var express = require('express');
var app = express();
var db = require('./database');
//*npm install cors
var cors = require('cors')
app.use(cors())
//* npm install body-parser --save
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api/products/',db.getAllProducts);
app.get('/api/products/:id',db.getProductByID);
app.post('/api/products/', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);

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