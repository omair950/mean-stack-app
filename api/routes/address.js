var router = require('express').Router();
const jwt = require('jsonwebtoken');
const mysqlConnection = require("./../db/mysqlConnection");

//get all data of address
router.get('/address', verifyToken, function (req, res, next) {

    var sql = 'SELECT * FROM addresses join students on students.std_id=addresses.std_id';
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


//get  data of address by id
router.get('/address/edit/:add_id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM addresses where add_id=?', [req.params.add_id], (err, rows, fields) => {
        if (!err)
            res.json(
                rows
            );
        else {
            res.json({
                msg: 'error',
                code: 200
            });;
        }
    })
});

//get  data of address by id
router.get('/address/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM addresses where add_id=?', [req.params.id], (err, rows, fields) => {
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



// delete data of address by id
router.delete('/address/delete/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE FROM addresses where add_id=?', [req.params.id], (err, rows, fields) => {
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



// insert data in address table
// router.post('/address/add/:std_Nic', function (req, res, next) {

//     let emp = req.body;
//     let sql = "INSERT INTO `addresses` (temp_add,parmnt_add,add_City,add_province,std_Nic) VALUES ('" + emp.temp_add + "','" + emp.parmnt_add + "','" + emp.add_City + "','" + req.params.std_Nic + "')";


//     mysqlConnection.query(sql, (err, rows, fields) => {
//         if (!err)
//             res.json(" Address inserted");
//         else {
//             res.json({
//                 msg: 'error',
//                 code: 200
//             });
//         }
//     })
// });


//INSERT record in  table
router.post('/address/add', (req, res) => {
    emp = req.body;
    let sql = "INSERT INTO addresses (parmnt_add,temp_add, add_city , add_province, std_id) VALUES ('" + emp.parmnt_add + "','" + emp.temp_add + "','" + emp.add_City + "','" + emp.add_province + "','" + emp.std_id + "')";
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.send(rows);

        else
            console.log(err);
    })
});


//get address id 
router.get('/address/addressid/:std_id', (req, res) => {
    mysqlConnection.query('SELECT add_id FROM addresses WHERE std_id = ?', [req.params.std_id], (err, rows, fields) => {
        if (err) {

            console.log(err);
        } else {
            console.log(req.params.std_id)
            res.send(rows);
        }
    });
})


// update data in address table
router.put('/address/update/:add_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `addresses` SET   `temp_add` = '" + emp.temp_add + "',`parmnt_add` = '" + emp.parmnt_add + "', `add_City` = '" + emp.add_City + "',`add_province` = '" + emp.add_province + "' where `add_id` = '" + req.params.add_id + "'";

    mysqlConnection.query(sql, (err, rows, fields) => {
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
        };
    })

});



// update data in address table
router.put('/address/update/app/:add_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `addresses` SET   `temp_add` = '" + emp.temp_add + "',`parmnt_add` = '" + emp.parmnt_add + "', `add_City` = '" + emp.add_City + "',`add_province` = '" + emp.add_province + "' where `add_id` = '" + req.params.add_id + "'";

    mysqlConnection.query(sql, (err, rows, fields) => {
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