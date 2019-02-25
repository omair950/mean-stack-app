var router = require('express').Router();
const jwt = require('jsonwebtoken');
const mysqlConnection = require("./../db/mysqlConnection");

//get all data of subjects
router.get('/subject', function (req, res, next) {

    var sql = 'SELECT * FROM subjects';
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


//get  data of subjects by id
router.get('/subject/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM subjects where sub_id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);

        else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })
});


//get  data of subjects by id
router.get('/subject/edit/:sub_id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM subjects where sub_id=?', [req.params.sub_id], (err, rows, fields) => {
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


// delete data of subjects by id
router.delete('/subject/delete/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE FROM subjects where sub_id=?', [req.params.id], (err, rows, fields) => {
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



// insert data in subjects table
router.post('/subject/add', function (req, res, next) {

    let emp = req.body;
    let sql = "INSERT INTO `subjects` (subj_Group_department) VALUES ('" + emp.subj_Group_department + "')";


    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json("subject Inserted ");
        else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })
});



// update data in subjects table
router.put('/subject/update/:sub_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `subjects` SET   `subj_Group_department` = '" + emp.subj_Group_department + "' where `sub_id` = '" + req.params.sub_id + "'";

    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json(" Updated Successfully");

        else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
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