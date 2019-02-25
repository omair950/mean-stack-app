var router = require('express').Router();
const jwt = require('jsonwebtoken');
const mysqlConnection = require("./../db/mysqlConnection");

//get all data of schlorship
router.get('/schlorship', function (req, res, next) {

    var sql = 'SELECT * FROM schlorships';
    mysqlConnection.query(sql, (err, rows, fields) => {
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


//edit  data of schlorships by id
router.get('/schlorship/edit/:sch_id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM schlorships where sch_id=?', [req.params.sch_id], (err, rows, fields) => {
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



// delete data of schlorship by id
router.delete('/schlorship/delete/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE FROM schlorships where sch_id=?', [req.params.id], (err, rows, fields) => {
        if (err)


            res.json({
                msg: 'error',
                code: 200
            });

        else {
            res.json({
                hello: 'world',
                code: 200
            });
        }
    })
});


// insert data in schlorship table
router.post('/schlorship/add', function (req, res, next) {

    let emp = req.body;
    let sql = "INSERT INTO `schlorships` (sch_Name) VALUES ('" + emp.sch_Name + "')";


    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json({
                msg: 'ok',
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



// update data in schlorship table
router.put('/schlorship/update/:sch_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `schlorships` SET   `sch_Name` = '" + emp.sch_Name + "' where `sch_id` = '" + req.params.sch_id + "'";

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