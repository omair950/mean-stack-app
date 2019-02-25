var router = require('express').Router();
const jwt = require('jsonwebtoken');
const mysqlConnection = require("./../db/mysqlConnection");

// get data from students table 
router.get('/student', verifyToken, function (req, res, next) {

    var sql = 'SELECT * FROM students';
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


// get data from students table by id
router.get('/student/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM students where std_id=?', [req.params.id], (err, rows, fields) => {
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

// insert data in students table 
// router.post('/student/add', function (req, res, next) {

//     let emp = req.body;
//     let sql = "INSERT INTO `students` (std_Nic,std_Name,std_F_Name,std_DOB,std_Phone_no, std_Email,std_Gender) VALUES ('" + emp.std_Nic + "','" + emp.std_Name + "', '" + emp.std_F_Name + "','" + emp.std_DOB + "', '" + emp.std_Phone_no + "',  '" + emp.std_Email + "', '" + emp.std_Gender + "')";

//     mysqlConnection.query(sql, (err, rows, fields) => {
//         if (!err)
//             res.send(" Inserted Employee ");
//         else {
//             res.json({
//                 msg: 'error',
//                 code: 200
//             });
//         }
//     })


// });
//get  data of students by id
router.get('/student/edit/:std_Nic', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM students where std_Nic=?', [req.params.std_Nic], (err, rows, fields) => {
        if (!err)
            res.json(
                rows
            );
        else {
            res.json({
                msg: 'error',
                code: 200
            });
        };
    })
});


// update data in students table 
router.put('/student/update/:std_Nic', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `students` SET  `std_Name` = '" + emp.std_Name + "', `std_F_Name` = '" + emp.std_F_Name + "',`std_DOB` = '" + emp.std_DOB + "',`std_Phone_no` = '" + emp.std_Phone_no + "', `std_Email` = '" + emp.std_Email + "',`std_Gender` = '" + emp.std_Gender + "'  where `std_Nic` = '" + req.params.std_Nic + "'";


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


//update data in students table 
router.put('/student/update/app/:std_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `students` SET  `std_Name` = '" + emp.std_Name + "', `std_F_Name` = '" + emp.std_F_Name + "',`std_DOB` = '" + emp.std_DOB + "',`std_Phone_no` = '" + emp.std_Phone_no + "', `std_Email` = '" + emp.std_Email + "',`std_Gender` = '" + emp.std_Gender + "'  where `std_id` = '" + req.params.std_id + "'";


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




//delete  data from students table by id
router.delete('/student/delete/:std_Nic', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE  FROM students where std_Nic=?', [req.params.std_Nic], (err, rows, fields) => {
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


//insert student data
router.post('/student/add', (req, res) => {
    emp = req.body;
    let sql = "INSERT INTO students (std_Nic,std_Name,std_F_Name,std_Gender,std_Phone_no,std_DOB,std_Email) VALUES \
                                  ('" + emp.std_Nic + "','" + emp.std_Name + "'\
                                  ,'" + emp.std_F_Name + "','" + emp.std_Gender + "','" + emp.std_Phone_no + "'\
                                  ,'" + emp.std_DOB + "'\
                                  ,'" + emp.std_Email + "')";
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json({
                msg: 'error',
                code: 200
            });
        else
            res.json({
                msg: 'error',
                code: 200
            });
    })
});



//insert student data
router.put('/student/update', (req, res) => {
    let emp = req.body;
    let sql = "UPDATE `students` SET  `std_Phone_no` = '" + emp.std_Phone_no + "', `std_Email` = '" + emp.std_Email + "'  where `std_Nic` = '" + emp.std_Nic + "'";


    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(" Updated Successfully");

        } else {
            res.json({
                msg: 'error',
                code: 200
            });
            console.log(err)
        }
    })

});


//get one
router.get('/student/studentcnic/:std_Nic', (req, res) => {
    mysqlConnection.query('SELECT std_id FROM students WHERE std_Nic = ?', [req.params.std_Nic], (err, rows, fields) => {
        if (err) {
            res.send("error");
        } else {
            res.send(rows);

        }
    });
});




// router.get('/student/:Cnic', function (req, res, next) {


//     mysqlConnection.query('SELECT * FROM students WHERE std_Nic = ?', [req.params.Cnic], (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else {
//             res.json({
//                 msg: 'error',
//                 code: 200
//             });
//         }
//     })


// });


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