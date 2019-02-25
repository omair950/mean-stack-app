var router = require('express').Router();

const mysqlConnection = require("./../db/mysqlConnection");

//get all data of std_Clg
router.get('/std_clg', function (req, res, next) {

    var sql = 'select std_Clg.std_clg_id,students.std_Nic, std_Name,clg_Name from \
    students join std_Clg on students.std_Nic=std_Clg.std_nic join  \
    colleges on colleges.clg_id=std_Clg.clg_id';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            res.send(err);
            console.log(err);
        }
    })

});
//get  data of std_clg by id
router.get('/std_clg/edit/:std_clg_id', function (req, res, next) {

    mysqlConnection.query(' SELECT colleges.clg_Name  FROM colleges join std_Clg on std_Clg.clg_id = colleges.clg_id where std_clg_id=?', [req.params.std_clg_id], (err, rows, fields) => {
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

// get data for select view college in stdclg
router.get('/std_clg/get/clg', function (req, res, next) {
    var sql = 'select colleges.clg_Name ,colleges.clg_id  from \
    colleges';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else {
            res.send(err);
            console.log(err);
        }
    })

});

//get  data of std_Clg by id
router.get('/std_clg/:id', function (req, res, next) {

    mysqlConnection.query('SELECT * FROM std_Clg where std_clg_id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else {
            res.json({
                msg: 'error',
                code: 200
            });
        };
    })
});



// delete data of std_Clg by id
router.delete('/std_clg/delete/:id', function (req, res, next) {

    mysqlConnection.query('DELETE FROM std_Clg where std_clg_id=?', [req.params.id], (err, rows, fields) => {
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



// insert data in std_Clg table
router.post('/std_clg/add', function (req, res, next) {

    let emp = req.body;
    let sql = "INSERT INTO `std_Clg` (std_clg_id,std_nic,clg_id) VALUES ('" +
        emp.std_clg_id + "','" + emp.std_nic + "','" + emp.clg_id + "')";


    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.json("std_clg data Inserted ");
        else {
            res.json({
                msg: 'error',
                code: 200
            });
        }
    })
});



// update data in std_Clg table
router.put('/std_clg/update/:std_clg_id', function (req, res, next) {

    let emp = req.body;
    let sql = "UPDATE `std_Clg`  set   `clg_id` = '" + emp.clg_id + "'  where `std_clg_id` = '" + req.params.std_clg_id + "'";

    mysqlConnection.query(sql, (err, rows, fields) => {
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