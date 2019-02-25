var router = require('express').Router();
const mysqlConnection = require("./../db/mysqlConnection");
const jwt = require('jsonwebtoken');

router.post('/register/add', function (req, res, next) {

    let emp = req.body;
    let sql = "INSERT INTO `registers` (name, email, password , role) VALUES ('" + emp.name + "','" + emp.email + "','" + emp.password + "','" + 0 + "')";


    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json({
                hello: 'sucess',
                code: 404
            });
        else {
            res.json(
                msg = 'error',

            );

        }
    })
});



router.get('/register', verifyToken, function (req, res, next) {

    var sql = 'SELECT * FROM registers';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);

        } else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })

});

router.get('/register/role', verifyToken, function (req, res, next) {

    var sql = 'SELECT email,role FROM registers where role = 2';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(
                rows

            )

        } else {

            res.json(
                'error')


            // res.json({
            //     msg: 'error',
            //     code: 200
            // });
        }
    })

});


// router.get('/register/:email', function (req, res, next) {


//     mysqlConnection.query('SELECT name ,email ,password ,role FROM registers WHERE email = ?', [req.params.email], (err, rows, fields) => {
//         if (!err) {
//             res.json(rows);

//         } else {
//             res.json({
//                 msg: 'error',
//                 code: 200
//             });
//         }
//     })

// });

router.put('/register/update/:reg_id', verifyToken, function (req, res, next) {


    mysqlConnection.query("update registers set  role  = '" + req.body.role + "' WHERE reg_id = ?", [req.params.reg_id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);

        } else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })

});

router.delete('/register/delete/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE  FROM registers where reg_id=?', [req.params.id], (err, rows, fields) => {
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