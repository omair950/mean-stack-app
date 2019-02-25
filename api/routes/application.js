var router = require('express').Router();
const jwt = require('jsonwebtoken');
const mysqlConnection = require("./../db/mysqlConnection");

//get all data of applications
router.get('/application', verifyToken, function (req, res, next) {

    var sql = 'select applications.app_id ,students.std_Nic,students.std_Name,std_F_Name,colleges.clg_Name,subjects.subj_Group_department,acadamics.last_exam_marks_obt,\
    acadamics.last_exam_total_marks,acadamics.percentage_last_exam,acadamics.year_passing_last_exam,acadamics.admission_date_current_degree,acadamics.current_degree_tittle,\
    acadamics.current_study_year,acadamics.current_degree_fee_amount,gaudians.guad_Income,professions.profession,bills.bill_Average from \
    students\
    join applications on students.std_id=applications.std_id join\
    colleges on colleges.clg_id=applications.clg_id join \
    gaudians on gaudians.std_id=students.std_id join \
    bills on bills.bill_id=applications.bill_id join \
    professions on professions.pro_id=gaudians.prof_id join \
    subjects on applications.subj_id=subjects.sub_id join \
    acadamics on acadamics.acad_id=applications.acad_id order by gaudians.guad_Income asc,acadamics.percentage_last_exam desc,bill_Average asc;';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log(rows)
        } else {
            res.err(err);
            console.log(err);
        }
    })

});


//get  data of applications by id
router.get('/application/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM applications where app_id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else {
            res.json(err);
            console.log(err);
        }
    })
});



// delete data of applications by id
router.delete('/application/delete/:id', verifyToken, function (req, res, next) {

    mysqlConnection.query('DELETE  FROM applications where app_id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json({
                hello: 'world',
                code: 200
            });
        else {
            res.json(err);
            console.log(err);
        }
    })
});

// insert data in applications table
// router.post('/application/add', function (req, res, next) {

//     let emp = req.body;
//     let sql = "INSERT INTO `application` (app_id,std_nic,clg_id,subj_id,sch_id,bill_id,fee_amount,marks_obt,total_marks,study_Year) VALUES ('" +
//         emp.app_id + "','" + emp.std_nic + "','" + emp.clg_id + "','" + emp.subj_id + "','" + emp.sch_id + "','" + emp.bill_id + "','" + emp.fee_amount + "','" + emp.marks_obt + "','" + emp.total_marks + "','" + emp.study_Year + "')";


//     mysqlConnection.query(sql, (err, rows, fields) => {
//         if (!err)
//             res.send("appliction Inserted ");
//         else {
//             res.send(err);
//             console.log(err);
//         }
//     })
// });



//INSERT record in  table
router.post('/application/add', (req, res) => {
    emp = req.body;
    let sql = "INSERT INTO applications (clg_id , sch_id , bill_id , subj_id , add_id ,gaud_id,acad_id ,std_id)\
     VALUES ('" + emp.clg_id + "','" + emp.sch_id + "','" + emp.bill_id + "','" + emp.subj_id + "','" + emp.add_id + "','" + emp.gaud_id + "'\
         ,'" + emp.acad_id + "','" + emp.std_id + "')";
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});



//get clg data of application by id
router.get('/application/collegeid/:std_id', (req, res) => {
    mysqlConnection.query('SELECT clg_id FROM applications WHERE std_id = ?', [req.params.std_id], (err, rows, fields) => {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            res.send(rows);
        }
    });
});

//get  data of application by id
router.get('/application/edit/:app_id', verifyToken, function (req, res, next) {

    mysqlConnection.query('SELECT * FROM applications join colleges on colleges.clg_id = applications.clg_id join \
    subjects on subjects.sub_id = applications.subj_id join schlorships on schlorships.sch_id = applications.sch_id \
    join students on students.std_id = applications.std_id join bills on bills.bill_id = applications.bill_id \
    join acadamics on acadamics.acad_id = applications.acad_id join addresses on addresses.add_id = applications.add_id join gaudians on gaudians.guad_id = applications.gaud_id \
    join professions on professions.pro_id = gaudians.prof_id where app_id=?', [req.params.app_id], (err, rows, fields) => {
        if (!err)
            res.json(
                rows
            );
        else {
            res.send(err);
            console.log(err);
        }
    })
});


// update data in applications table
router.put('/application/update/:app_id', verifyToken, function (req, res, next) {

    let emp = req.body;
    // let sql = "UPDATE `applications` SET   `clg_id` = '" + emp.clg_id + "',\
    // `subj_id` = '" + emp.subj_id + "',`sch_id` = '" + emp.sch_id + "' where app_id=?', [req.params.app_id] ;

    mysqlConnection.query("UPDATE `applications` SET   `clg_id` = '" + emp.clg_id + "',\
    `subj_id` = '" + emp.subj_id + "',`sch_id` = '" + emp.sch_id + "' where app_id=? ", [req.params.app_id], (err, rows, fields) => {
        if (!err)
            res.json(" Updated Successfully");

        else {
            res.json({
                msg: 'error',
                code: 200
            });;
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