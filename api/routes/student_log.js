var router = require('express').Router();

const mysqlConnection = require("./../db/mysqlConnection");

//get all data of student_log
router.get('/student_log', function (req, res, next) {

    var sql = 'SELECT * FROM students_log';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })

});


//get  data of student_log by id
router.get('/student_log/:id', function (req, res, next) {

    mysqlConnection.query('SELECT * FROM students_log where std_id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            res.json(rows);
    })
});



// delete data of student_log by id
router.delete('/student_log/:id', function (req, res, next) {

    mysqlConnection.query('DELETE FROM students_log where std_id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json("Delete Successfully");
        else
            console.log(err);
    })
});


//no use in this route for now

// // insert data in schlorship table
// router.post('/student_log/add', function(req, res, next) {  

//     let emp=req.body;
//     let sql= "INSERT INTO `schlorships` (sch_id,sch_Name) VALUES ('" +
//     emp.sch_id + "', '" + emp.sch_Name + "')";


//     mysqlConnection.query(sql,(err,rows,fields)=>{
//        if(!err)
//            res.send(" Inserted Employee ");
//        else
//        console.log(err);
//     })
// });



// // update data in schlorship table
// router.put('/student_log/update', function(req, res, next) {  

//     let emp=req.body;
//     let sql= "UPDATE `schlorships` SET   `sch_Name` = '" + emp.std_Name + "' where `sch_id` = '" + emp.sch_id+ "'";

//    mysqlConnection.query(sql,(err,rows,fields)=>{
//        if(!err)
//            res.send(" Updated Successfully");

//        else
//        console.log(err);
//    })

// });

module.exports = router;