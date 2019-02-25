const mysql = require('mysql');
var express = require ('express');
var app =express();
const bodyparser = require ('body-parser');


app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"password",
    database:"project_db",
    multipleStatements:true
});


mysqlConnection.connect((err)=>{

    if (!err)
    console.log("Database conection success");
    else
    console.log("Database conection  NOT success"+ JSON.stringify(err,undefined,2));
});


// GET ALL DATA OF students
app.get('/students',(req,res)=>{

    var sql ='SELECT * FROM students';
    mysqlConnection.query(sql,(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })

});


// get data from students table by id
app.get('/students/:id',(req,res)=>{

    mysqlConnection.query('SELECT * FROM students where std_id=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })

});



// insert data in students table 
app.post('/students/add',(req,res)=>{
    let emp=req.body;
    let sql= "INSERT INTO `students` (std_id,std_Name,std_F_Name,std_Gaud_id,std_Phone_no,add_id,std_Email,std_Gender,sub_id,clg_id,sch_id,pro_id) VALUES ('" +
emp.std_id + "', '" + emp.std_Name + "', '" + emp.std_F_Name + "', '" + emp.std_Gaud_id + "', '" + emp.std_Phone_no + "', '" + emp.add_id + "', '" + emp.std_Email + "', '" + emp.std_Gender + "','" + emp.sub_id + "', '" + emp.clg_id + "', '" + emp.sch_id+ "', '" + emp.pro_id+ "')";
  


// let sql="INSERT INTO colleges (clg_id,clg_Name,clg_Year) VALUES ('" + emp.clg_id + "','" + emp.clg_Name + "','" + emp.clg_Year + "')";
    
mysqlConnection.query(sql,(err,rows,fields)=>{
       if(!err)
           res.send(" Inserted Employee ");
       else
       console.log(err);
   })

});

// delete data in students table by id
app.delete('/delete/:id',(req,res)=>{
    mysqlConnection.query('DELETE  FROM students where std_id=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send("Delete Successfully");
        else
        console.log(err);
    })

});


// update data in students table
app.put('/students/update',(req,res)=>{
    let emp=req.body;
    let sql= "UPDATE `students` SET   `std_Name` = '" + emp.std_Name + "', `std_F_Name` = '" + emp.std_F_Name + "',`std_Gaud_id` = '" + emp.std_Gaud_id  + "',`std_Phone_no` = '" + emp.std_Phone_no + "', `std_Email` = '" + emp.std_Email+ "', `add_id` = '" + emp.add_id + "',`std_Gender` = '" + emp.std_Gender + "' ,`sub_id` = '" + emp.sub_id+ "',`sch_id` = '" + emp.sch_id+ "',`clg_id` = '" + emp.clg_id+ "',`pro_id` = '" + emp.pro_id+ "' where `std_id` = '" + emp.std_id+ "'";


   mysqlConnection.query(sql,(err,rows,fields)=>{
       if(!err)
           res.send(" Updated Successfully");
    
       else
       console.log(err);
   })

});
