    var router = require('express').Router();
    const jwt = require('jsonwebtoken');

    const mysqlConnection = require("./../db/mysqlConnection");

    //get all data of colleges
    router.get('/college', function (req, res, next) {

        var sql = 'SELECT * FROM colleges';
        mysqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                res.send(rows);
                console.log("salam pak");
            } else {
                res.json({
                    msg: 'error',
                    code: 200
                });
            }
        })

    });


    //get  data of colleges by id
    router.get('/college/edit/:clg_id', verifyToken, function (req, res, next) {

        mysqlConnection.query('SELECT clg_Name FROM colleges where clg_id=?', [req.params.clg_id], (err, rows, fields) => {
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


    //edit  data of colleges by id
    // router.get('/college/edit', function (req, res, next) {

    //     mysqlConnection.query('SELECT * FROM colleges where clg_id=?', [req.body.clg_id], (err, rows, fields) => {
    //         if (!err)
    //             res.send(rows);
    //         else
    //             console.log(err);
    //     })
    // });


    // delete data of colleges by id
    router.delete('/college/delete/:id', verifyToken, function (req, res, next) {

        mysqlConnection.query('DELETE FROM colleges where clg_id=?', [req.params.id], (err, rows, fields) => {
            if (!err)
                res.json(rows);
            // res.json({
            //     hello: 'world',
            //     code: 200
            // });
            else {
                res.json({
                    msg: 'error',
                    code: 200
                });
            }
        })
    });



    // insert data in colleges table
    router.post('/college/add', function (req, res, next) {

        let emp = req.body;
        let sql = "INSERT INTO `colleges` (clg_Name) VALUES ('" + emp.clg_Name + "')";


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

            }
        })
    });



    // update data in colleges table by id
    router.put('/college/update/:clg_id', verifyToken, function (req, res, next) {

        let emp = req.body;
        // let sql= "UPDATE `colleges` SET   `clg_Name` = '" + emp.clg_Name + "' where `clg_id` = '" + emp.clg_id+ "'";

        mysqlConnection.query("UPDATE `colleges` SET   `clg_Name` = '" + emp.clg_Name + "' where `clg_id` = '" + req.params.clg_id + "'", (err, rows, fields) => {
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


    // // Verify Token
    // function verifyToken(req, res, next) {



    //     jwt.verify(req.token, 'secretkey', (err) => {
    //         if (err) {
    //             res.sendStatus(403);
    //         } else {

    //             next();
    //         }
    //     });




    // }

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

    // function verifyToken(req, res, next) {



    //     // Get auth header value
    //     const bearerHeader = req.headers['authorization'];
    //     // Check if bearer is undefined
    //     if (typeof bearerHeader !== 'undefined') {
    //         // Split at the space
    //         const bearer = bearerHeader.split(' ');
    //         // Get token from array
    //         const bearerToken = bearer[1];
    //         // Set the token

    //         req.token = bearerToken;
    //         jwt.verify(req.token, 'secretkey', (err, authData) => {
    //             if (err) {
    //                 res.sendStatus(403);
    //             } else {

    //                 next();
    //             }
    //         });

    //         // Next middleware

    //     } else {
    //         // Forbidden
    //         res.sendStatus(403);
    //     }

    // }