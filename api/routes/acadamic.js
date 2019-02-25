var router = require('express').Router();
const mysqlConnection = require("./../db/mysqlConnection");
const jwt = require('jsonwebtoken');
//get all data of applications
router.get('/acadamic', verifyToken, function (req, res, next) {

    var sql = 'SELECT * FROM acadamics join students on students.std_id = acadamics.std_id';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else {
            res.json(err);
            console.log(err);
        }
    })

});


// //get  data of applications by id
// router.get('/application/:id', function(req, res, next) {  

//     mysqlConnection.query('SELECT * FROM applications where app_id=?',[req.params.id],(err,rows,fields)=>{
//         if(!err)
//         res.send(rows);
//         else
//         console.log(err);
//     })
// });



// delete data of applications by id
router.delete('/acadamic/delete/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE  FROM acadamics where acad_id=?', [req.params.id], (err, rows, fields) => {
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

// insert data in applications table
// router.post('/acadamic/add', function (req, res, next) {

//     let emp = req.body;
//     let sql = "INSERT INTO `acadamics` (std_Nic,last_degree_tittle,board_university_last_exam,last_exam_marks_obt,last_exam_total_marks,grade_last_exam,percentage_last_exam,year_passing_last_exam,admission_date_current_degree,current_degree_tittle,\
//         current_study_year,current_degree_fee_amount) VALUES ('" +
//         emp.std_Nic + "','" + emp.last_degree_tittle + "','" + emp.board_university_last_exam + "','" + emp.last_exam_marks_obt + "','" + emp.last_exam_total_marks + "',\
//     '" + emp.grade_last_exam + "','" + emp.percentage_last_exam + "','" + emp.year_passing_last_exam + "',\
//     '" + emp.admission_date_current_degree + "','" + emp.current_degree_tittle + "' ,  '" + emp.current_study_year + "','" + emp.current_degree_fee_amount + "')";


//     mysqlConnection.query(sql, (err, rows, fields) => {
//         if (!err)
//             res.json("appliction Inserted ");
//         else {
//             res.json({
//                 msg: 'error',
//                 code: 200
//             });
//         };
//     })
// });

//get  data of acadamics by id
router.get('/acadamic/edit/:acad_id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM acadamics where acad_id=?', [req.params.acad_id], (err, rows, fields) => {
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


// update data in applications table
router.put('/acadamic/update/:acad_id', verifyToken, function (req, res, next) {

    let emp = req.body;


    let sql = "UPDATE acadamics SET  `last_degree_tittle` = '" + emp.last_degree_tittle + "',\
    `board_university_last_exam` = '" + emp.board_university_last_exam + "',`last_exam_marks_obt` = '" + emp.last_exam_marks_obt + "',\
    `last_exam_total_marks` = '" + emp.last_exam_total_marks + "',`grade_last_exam` = '" + emp.grade_last_exam + "',\
    `percentage_last_exam` = '" + emp.percentage_last_exam + "',`year_passing_last_exam` = '" + emp.year_passing_last_exam + "',\
    `admission_date_current_degree` = '" + emp.admission_date_current_degree + "',`current_degree_tittle` = '" + emp.current_degree_tittle + "',\
    `current_study_year` = '" + emp.current_study_year + "',`current_degree_fee_amount` = '" + emp.current_degree_fee_amount + "' \
     where acad_id = '" + req.params.acad_id + "'";

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



// update data in applications table
router.put('/acadamic/update/app/:acad_id', verifyToken, function (req, res, next) {

    let emp = req.body;


    let sql = "UPDATE acadamics SET  `last_degree_tittle` = '" + emp.last_degree_tittle + "',\
    `board_university_last_exam` = '" + emp.board_university_last_exam + "',`last_exam_marks_obt` = '" + emp.last_exam_marks_obt + "',\
    `last_exam_total_marks` = '" + emp.last_exam_total_marks + "',`grade_last_exam` = '" + emp.grade_last_exam + "',\
    `percentage_last_exam` = '" + emp.percentage_last_exam + "',`year_passing_last_exam` = '" + emp.year_passing_last_exam + "',\
    `admission_date_current_degree` = '" + emp.admission_date_current_degree + "',`current_degree_tittle` = '" + emp.current_degree_tittle + "',\
    `current_study_year` = '" + emp.current_study_year + "',`current_degree_fee_amount` = '" + emp.current_degree_fee_amount + "' \
     where acad_id = '" + req.params.acad_id + "'";

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
//



//INSERT record in  table
router.post('/acadamic/add', (req, res) => {

    let sql = "INSERT INTO acadamics (last_degree_tittle, board_university_last_exam, last_exam_marks_obt,\
    last_exam_total_marks, percentage_last_exam , grade_last_exam, year_passing_last_exam,\
    current_degree_tittle, admission_date_current_degree, current_study_year,current_degree_fee_amount, std_id)\
    VALUES ('" + req.body.last_degree_tittle + "','" + req.body.board_university_last_exam + "',\
    '" + req.body.last_exam_marks_obt + "','" + req.body.last_exam_total_marks + "','" + req.body.percentage_last_exam + "',\
    '" + req.body.grade_last_exam + "','" + req.body.year_passing_last_exam + "',\
    '" + req.body.current_degree_tittle + "', '" + req.body.admission_date_current_degree + "',\
    '" + req.body.current_study_year + "','" + req.body.current_degree_fee_amount + "','" + req.body.std_id + "')";
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});


router.get('/acadamic/academicid/:std_id', (req, res) => {
    mysqlConnection.query('SELECT acad_id FROM acadamics WHERE std_id = ?', [req.params.std_id], (err, rows, fields) => {
        if (err) {
            res.json("Unable to read item. Error JSON");
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            res.json(rows);
        }
    });
});

// update data in guadians table
// router.put('/acadamic/update/:acad_id', function(req, res, next) {  

//     let emp=req.body;
//     let sql= "UPDATE `acadamics` SET   `std_Nic` = '" + emp.std_Nic + "',`last_degree_tittle` = '" + emp.last_degree_tittle + "',`board_university_last_exam` = '" + emp.board_university_last_exam + "',`last_exam_marks_obt` = '" + emp.last_exam_marks_obt + "',`last_exam_marks_obt` = '" + emp.last_exam_marks_obt + "', where `guad_id` = '" +req.params.gaud_id+ "'";

//    mysqlConnection.query(sql,(err,rows,fields)=>{
//        if(!err)
//            res.send(" Updated Successfully");

//        else
//        console.log(err);
//    })

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