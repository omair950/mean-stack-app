var router = require('express').Router();
const jwt = require('jsonwebtoken');
const mysqlConnection = require("./../db/mysqlConnection");

//get all data of bills
router.get('/bill', verifyToken, function (req, res, next) {

    var sql = 'SELECT * FROM bills join students on students.std_id = bills.std_id ';
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


//get  data of bills by id
router.get('/bill/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM bills where bill_id=?', [req.params.id], (err, rows, fields) => {
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

//get  data of bill  by id
router.get('/bill/edit/:bill_id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM bills where bill_id=?', [req.params.bill_id], (err, rows, fields) => {
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



// delete data of bills by id
router.delete('/bill/delete/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE FROM bills where bill_id=?', [req.params.id], (err, rows, fields) => {
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



// insert data in bills table
// router.post('/bill/add', function (req, res, next) {

//     let emp = req.body;
//     let sql = "INSERT INTO `bills` (bill_last_month,bill_Average, bill_address) VALUES ('" + emp.bill_Name + "','" + emp.bill_last_month + "','" + emp.bill_Average + "','" + emp.bill_address + "')";


//     mysqlConnection.query(sql, (err, rows, fields) => {
//         if (!err)
//             res.json("bill Inserted ");
//         else {
//             res.json({
//                 msg: 'error',
//                 code: 200
//             });
//         }
//     })
// });






//INSERT record in table
router.post('/bill/add', (req, res) => {
    emp = req.body;
    let sql = "INSERT INTO bills ( bill_last_month, bill_Average, bill_address , std_id) VALUES ('" + emp.bill_last_month + "','" + emp.bill_Average + "','" + emp.bill_address + "','" + emp.std_id + "')";
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (err) {
            res.json(err);
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("add Item succeeded:", JSON.stringify(rows, null, 2));
            res.json(rows);
        }
    });
});


//get one
router.get('/bill/billid/:std_id', (req, res) => {


    mysqlConnection.query('SELECT bill_id FROM bills WHERE std_id = ?', [req.params.std_id], (err, rows, fields) => {
        if (err) {

            console.log(err);
        } else {

            res.send(rows);
        }
    });
});


// update data in bills table
router.put('/bill/update/:bill_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `bills` SET   `bill_last_month` = '" + emp.bill_last_month + "',`bill_Average` = '" + emp.bill_Average + "',`bill_address` = '" + emp.bill_address + "' where `bill_id` = '" + req.params.bill_id + "'";

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



// update data in bills table
router.put('/bill/update/app/:bill_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `bills` SET   `bill_last_month` = '" + emp.bill_last_month + "',`bill_Average` = '" + emp.bill_Average + "',`bill_address` = '" + emp.bill_address + "' where `bill_id` = '" + req.params.bill_id + "'";

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