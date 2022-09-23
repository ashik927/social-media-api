const mongoose = require('mongoose');
const Model = require('../models');
const Post = Model.postSchema;
const dbConn = require('../database');

const findAll = async (req, res) => {
    // dbConn.query('SELECT * FROM murmurs', function (error, results, fields) {
    dbConn.query(' SELECT murmurs.id,murmurs.murmur,murmurs.userID,murmurs.likeCount,murmurs.created_at, user.userName , user.name FROM murmurs INNER JOIN user ON murmurs.userID = user.id ORDER BY id DESC', function (error, results, fields) {

        if (error) throw error;

        // check has data or not
        let message = "";
        if (results === undefined || results.length == 0)
            message = "Murmurs table is empty";
        else
            message = "Successfully retrived all Murmurs";

        return res.send({ data: results });
    });

}

const findUserPost = async (req, res) => {
    const id = req.params.id
    // dbConn.query('SELECT * FROM murmurs', function (error, results, fields) {
    dbConn.query(' SELECT murmurs.id,murmurs.murmur,murmurs.userID,murmurs.likeCount,murmurs.created_at, user.userName , user.name FROM murmurs INNER JOIN user ON murmurs.userID = user.id where murmurs.userID=? ORDER BY id DESC ',id, function (error, results, fields) {

        if (error) throw error;

        // check has data or not
        let message = "";
        if (results === undefined || results.length == 0)
            message = "Murmurs table is empty";
        else
            message = "Successfully retrived all Murmurs";

        return res.send({ data: results });
    });

}


const store = async (req, res) => {
    // destructuring
    const { userID, murmur, likeCount } = req.body

    // insert to db
    dbConn.query("INSERT INTO murmurs (userID, murmur ,likeCount) VALUES (?, ? ,?)", [userID, murmur, likeCount], function (error, results, fields) {
        if (error) throw error;
        return res.send({ status: 200, data: results, message: 'Post successfully added' });
    });

}

const destroy = async (req, res) => {

    let id = req.params.id;

    dbConn.query('DELETE FROM murmurs where id=?', id, function (err, results) {
        if (err) { throw err }
        let message = "";
        if (results.affectedRows == 0) {
            message = "Murmur not found"
        }
        else {
            message = "Murmur successfully Delete"
        }
        return res.send({ data: results, message: message })
    })

}

module.exports = { findAll, store, destroy,findUserPost };
