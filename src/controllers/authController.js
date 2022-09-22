const mongoose = require('mongoose');
const Model = require('../models');
const Category = Model.categoryModel;
const dbConn = require('../database');

const login = async (req, res) => {
    // const categories = await Category.find({ client_id: parseInt(req.query.client_id) });
    const { email, password } = req.body
    dbConn.query("SELECT `id`, `name`, `userName`, `email`, `created_at`, `password` FROM `user` WHERE `email` = ? AND `password`=?", [email, password], function (error, results, fields) {
        if (error) throw error;

        // check has data or not
        let message = "";
        if (results === undefined || results.length == 0)
            message = "Login Failed";
        else
            message = "Successfully Login";

        return res.send({ data: results[0] });
    });
}

const register = async (req, res) => {

    const { name, userName, email, password } = req.body
    dbConn.query('SELECT * FROM user where email=?', email, function (error, results, fields) {
        if (error) throw error;
        
        console.log("results",results.length)
        // check has data or not
        let message = "";
        if (results === undefined || results.length >0) {
            message = "Email Already Existes";
            return res.send({ error: true, message: 'Email Already Existes' });
        }

        else {
            // validation
            if (!name || !email)
                return res.status(400).send({ error: true, message: 'Please provide user userName and email' });

            // insert to db
            dbConn.query("INSERT INTO user (name, userName ,email,password) VALUES (?, ? ,? ,?)", [name, email, email, password], function (error, results, fields) {
                if (error) throw error;
                return res.send({ error: false, data: results, message: 'User successfully added' });
            });
        }

    });


}




module.exports = { login, register };
