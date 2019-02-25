var router = require('express').Router();
const jwt = require('jsonwebtoken');
const mysqlConnection = require("./../db/mysqlConnection");

//get all data of profession
router.get('/profession', function (req, res, next) {

    var sql = 'SELECT * FROM professions';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })

});


//get  data of profession by id
router.get('/profession/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM professions where pro_id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })
});









// delete data of profession by id
router.delete('/profession/delete/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE FROM professions where pro_id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json({
                hello: 'world',
                code: 200
            });
        else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })
});


//get  data of professions by id
router.get('/profession/edit/:pro_id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM professions where pro_id=?', [req.params.pro_id], (err, rows, fields) => {
        if (!err)
            res.json(
                rows
            );
        else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })
});


// insert data in profession table
router.post('/profession/add', function (req, res, next) {

    let emp = req.body;
    let sql = "INSERT INTO `professions` (profession) VALUES ( '" + emp.profession + "')";


    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json("profession Inserted ");
        else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })
});



// update data in profession table
router.put('/profession/update/:pro_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `professions` SET   `profession` = '" + emp.profession + "' where `pro_id` = '" + req.params.pro_id + "'";

    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json(" Updated Successfully");

        else {
            res.json({
                msg: 'error',
                code: 200
            });
        };
    })

});

module.exports = router;

// Verify Token
function verifyToken(req, res, next) {
    let token = req.headers.authorization;

    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiY2hlY2tpbmcifSwiaWF0IjoxNTQ5OTczNjEwfQ.idYuOazM634hkEHTphf4-EkFKZjv_1JeKSUoHKABS_E"
    jwt.verify(token, 'secretkey', (err) => {
        if (err) {
            res.sendStatus(403);
        } else {

            next();
        }
    });




}