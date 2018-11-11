//*npm install pg-promise --save
const pgp = require('pg-promise')();
var db = pgp('postgres://qkdqxkxpilzsab:5e52ceaf831ad64674c9906b4f631d0af31c60f7d8421492681e5f84a1c705e7@ec2-107-20-249-48.compute-1.amazonaws.com:5432/dc9ptjn5vp80vf?ssl=true');

//CRUD Product
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved products'
                });
        })
}

function getProductByID(req, res) {
    db.any('select * from products where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved products id:' + req.params.id
                });
        })
}
function insertProduct(req, res) {
    db.none('insert into products(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updateProduct(req, res) {
    db.none('update products set title = ${title} , price= ${price} , tags= ${tags} where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deleteProduct(req, res) {
    db.none('delete from products where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//CRUD User
function getAllUsers(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL users'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved users'
                });
        })
}
function getUserByID(req, res) {
    db.any('select * from users where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved users id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved users id:' + req.params.id
                });
        })
}
function insertUser(req, res) {
    db.none('insert into users(id, email, password, details, created_at)' +
        'values(${id}, ${email}, ${password}, ${details}, ${created_at})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updateUser(req, res) {
    db.none('update users set email = ${email} , password= ${password} , details= ${details} where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deleteUser(req, res) {
    db.none('delete from users where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//CRUD Purchases
function getAllPurchases(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchasess'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved purchases'
                });
        })
}
function getPurchaseByID(req, res) {
    db.any('select * from purchases where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved purchase id:' + req.params.id
                });
        })
}
function insertPurchase(req, res) {
    db.none('insert into purchases(id, created_at, name, address, state, zipcode, user_id)' +
        'values(${id}, ${created_at}, ${name}, ${address}, ${state}, ${zipcode}, ${user_id})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updatePurchase(req, res) {
    db.none('update purchases set name = ${name} , address= ${address} , state= ${state}, zipcode= ${zipcode}, zipcode= ${zipcode} , user_id= ${user_id} where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deletePurchase(req, res) {
    db.none('delete from purchases where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//CRUD Purchases item
function getAllpurchase_items(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved purchase_items'
                });
        })
}
function getpurchase_itemByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase purchase_item id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved purchase_item id:' + req.params.id
                });
        })
}
function insertpurchase_item(req, res) {
    db.none('insert into purchase_items(id, purchase_id, product_id, price, quantity, state)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity}, ${state})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase_item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updatepurchase_item(req, res) {
    db.none('update purchase_items set purchase_id = ${purchase_id} , product_id= ${product_id} , price= ${price}, quantity= ${quantity}, state= ${state} where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchase_item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deletePurchase(req, res) {
    db.none('delete from purchases where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//set function public
module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getAllUsers,
    getUserByID,
    insertUser,
    updateUser,
    deleteUser,
    getAllPurchases,
    getPurchaseByID,
    insertPurchase,
    updatePurchase,
    deletePurchase,
    getAllpurchase_items,
    getpurchase_itemByID,
    insertpurchase_item,
    updatepurchase_item
}