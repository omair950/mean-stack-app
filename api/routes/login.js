var router = require('express').Router();

const mysqlConnection = require("./../db/mysqlConnection");
const jwt = require('jsonwebtoken');





//for login
router.get('/login/:email', middleware, function (req, res, next) {



    // console.log('tokentokentoken', req.token);
    mysqlConnection.query('SELECT name ,email ,password ,role FROM registers WHERE email = ?', [req.params.email], (err, rows, fields) => {






        if (!err) {

            if (rows.length === 0) {
                res.json({
                    rows: rows,
                    code: 200,

                });



            } else {

                res.json({
                    rows: rows,
                    code: 200,
                    token: req.token
                });


            }


        } else {
            res.json({

                msg: " no record found"

            });
        }

    })


});

function middleware(req, res, next) {

    const user = {

        email: 'checking'
    }
    jwt.sign({
            user
        }, 'secretkey',
        // {
        //     expiresIn: '24h'
        // },
        (err, token) => {
            req.token = token;


        });


    next();

}

module.exports = router;