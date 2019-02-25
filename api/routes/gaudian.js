var router = require('express').Router();
const jwt = require('jsonwebtoken');
const mysqlConnection = require("./../db/mysqlConnection");

//get all data of gaudians
router.get('/gaudian', verifyToken, function (req, res, next) {

    var sql = 'SELECT guad_id,guad_Name, guad_Income, guad_cnic, std_Name ,std_Nic , professions.profession FROM gaudians join professions on professions.pro_id = gaudians.prof_id join students on students.std_id = gaudians.std_id';
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

// get data for select view profession in guadian
router.get('/gaudian/get/prof', verifyToken, function (req, res, next) {
    var sql = 'select professions.profession,professions.pro_id  from \
    professions';
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
//get  data of gaudian by id
router.get('/gaudian/edit/:gaud_id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM gaudians join professions on professions.pro_id = gaudians.prof_id  where guad_id=?', [req.params.gaud_id], (err, rows, fields) => {
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


//get  data of gaudians by id
router.get('/gaudian/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM gaudians where guad_id=?', [req.params.id], (err, rows, fields) => {
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



// delete data of gaudians by id
router.delete('/gaudian/delete/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE  FROM gaudians where guad_id=?', [req.params.id], (err, rows, fields) => {
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



// insert data in gaudians table
// router.post('/gaudian/add', function (req, res, next) {

//     let emp = req.body;
//     let sql = "INSERT INTO `gaudians` (guad_Name,guad_Income,guad_Cnic,prof_id) VALUES ('" + emp.guad_Name + "','" + emp.guad_Income + "','" + emp.guad_Cnic + "',\
//     '" + emp.prof_id + "')";


//     mysqlConnection.query(sql, (err, rows, fields) => {
//         if (!err)
//             res.send("guadians Inserted ");
//         else {
//             res.json({
//                 msg: 'error',
//                 code: 200
//             });
//         }
//     })
// });



// update data in guadians table
router.put('/gaudian/update/:gaud_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `gaudians` SET   `guad_Name` = '" + emp.guad_Name + "',`guad_Income` = '" + emp.guad_Income + "',`guad_Cnic` = '" + emp.guad_Cnic + "',`prof_id` = '" + emp.prof_id + "' where `guad_id` = '" + req.params.gaud_id + "'";

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




// update data in guadians table
router.put('/gaudian/update/app/:gaud_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `gaudians` SET   `guad_Name` = '" + emp.guad_Name + "',`guad_Income` = '" + emp.guad_Income + "',`guad_Cnic` = '" + emp.guad_Cnic + "',`prof_id` = '" + emp.prof_id + "' where `guad_id` = '" + req.params.gaud_id + "'";

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


//INSERT record in  table
router.post('/guadian/add', (req, res) => {
    emp = req.body;
    let sql = "INSERT INTO gaudians (guad_Name,guad_Income,prof_id,guad_Cnic,std_id) VALUES \
    ('" + emp.guad_Name + "','" + emp.guad_Income + "','" + emp.prof_id + "','" + emp.guad_Cnic + "',\
    '" + emp.std_id + "')";
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

//get one
router.get('/guadian/guadianid/:std_id', (req, res) => {
    mysqlConnection.query('SELECT guad_id FROM gaudians WHERE std_id = ?', [req.params.std_id], (err, rows, fields) => {
        if (err) {
            res.json(err);

        } else {
            res.json(rows);
        }
    });
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