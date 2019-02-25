const mysql = require('mysql');
var express = require('express');
const jwt = require('jsonwebtoken');
var app = express();
const bodyparser = require('body-parser');
var router = require('express').Router();



app.use(bodyparser.json());

const mysqlConnection = require("./db/mysqlConnection");



// app.post('/api/login', (req, res) => {
//     console.log(gettoken.sendtoken + " yeeeeeeeeee")
// });



app.listen(3000, () => console.log("Express server is running on port 3000 !"));

// app.use(middlewareTest);
app.use('/', require('./routes/login'));
app.use('/', require('./routes/schlorship'));
app.use('/', require('./routes/student_log'));
app.use('/', require('./routes/profession'));
app.use('/', require('./routes/address'));
app.use('/', require('./routes/college'));
app.use('/', require('./routes/gaudian'));
app.use('/', require('./routes/subject'));
app.use('/', require('./routes/student'));
app.use('/', require('./routes/application'));
app.use('/', require('./routes/bill'));
app.use('/', require('./routes/std_clg'));
app.use('/', require('./routes/acadamic'));
app.use('/', require('./routes/register'));












// Verify Token


// //Verify Token
// function verifyToken(req, res, next) {

//     if (req.headers.hasOwnProperty('token')) {
//         req.headers.authorization = 'Bearer ' + req.headers.token;
//         var token = req.headers.token;

//     }
//     console.log(req.headers.token)

//     req.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiY2hlY2tpbmcifSwiaWF0IjoxNTQ5OTczNjEwfQ.idYuOazM634hkEHTphf4-EkFKZjv_1JeKSUoHKABS_E";
//     jwt.verify(req.token, 'secretkey', (err) => {
//         if (err) {
//             res.sendStatus(403);
//         } else {

//             next();
//         }
//     });




// }



// // Verify Token
// function verifyToken(req, res, next) {
//     let token = req.headers.authorization;
//     console.log(token + "dhkkkkk")
//     // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiY2hlY2tpbmcifSwiaWF0IjoxNTQ5OTczNjEwfQ.idYuOazM634hkEHTphf4-EkFKZjv_1JeKSUoHKABS_E"
//     jwt.verify(token, 'secretkey', (err) => {
//         if (err) {
//             res.sendStatus(403);
//         } else {

//             next();
//         }
//     });




// }