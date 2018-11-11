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

// add routing
// index page
// app.get('/', function (req, res) {
//     res.send('Express is running');
// });

app.get('/api/products/',db.getAllProducts);
app.get('/api/products/:id',db.getProductByID);
app.post('/api/products/', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);
// Response data as JSON
// var output = {
//     status: 'success',
//     message: 'REST API is working'
// }
// app.get('/api/json', function (req, res) {
//     res.json(output);
// });

//Response data as JSON with Status Code
//sucess
// app.get('/api/json', function (req, res) {
//     res.status(200).json(output);
// });
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