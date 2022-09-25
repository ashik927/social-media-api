const mongoose = require('mongoose');
const Model = require('../models');
const Post = Model.postSchema;
const dbConn = require('../database');

const findAllFollower = async (req, res) => {
    let userID = req.params.userID;

    // dbConn.query('SELECT * FROM follow where userID=?',userID, function (error, results, fields) {
    dbConn.query(' SELECT follow.id, user.userName , user.name FROM follow INNER JOIN user ON follow.followUserID = user.id where follow.userID=?', userID, function (error, results, fields) {
        if (error) throw error;

        // check has data or not
        let message = "";
        if (results === undefined || results.length == 0)
            message = "follow table is empty";
        else
            message = "Successfully retrived all follow";

        return res.send({ data: results });
    });

}

const findAllFollowing = async (req, res) => {
    let userID = req.params.userID;

    // dbConn.query('SELECT * FROM follow where followUserID=?',userID, function (error, results, fields) {
    dbConn.query(' SELECT follow.id, user.userName , user.name FROM follow INNER JOIN user ON follow.userID = user.id where follow.followUserID=?', userID, function (error, results, fields) {
        if (error) throw error;

        // check has data or not
        let message = "";
        if (results === undefined || results.length == 0)
            message = "follow table is empty";
        else
            message = "Successfully retrived all follow";

        return res.send({ data: results });
    });

}

const findMeFollow = async (req, res) => {
    const { followUserID, userID } = req.query

    dbConn.query('SELECT * FROM follow where followUserID=? AND  userID=?', [followUserID, userID], function (error, results, fields) {
        if (error) throw error;

        // check has data or not
        let message = "";
        if (results === undefined || results.length == 0)
            message = "Like table data not found";
        else
            message = "Successfully retrived  follow";

        return res.send({ data: results });
    });

}

const store = async (req, res) => {
    // destructuring
    console.log('req.body', req.body)

    const { userID, followUserID, myfollowingCount, userFollowerCount } = req.body
    // insert to db
    dbConn.query("INSERT INTO follow (userID, followUserID ) VALUES (?,?)", [userID, followUserID], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        // throw error;

        followerCount(followUserID, userFollowerCount + 1)
        followingCount(userID, myfollowingCount + 1)
        return res.send({ error: false, data: results, message: 'follow successfully added' });
    });

}

const destroy = async (req, res) => {

    let id = req.params.id;
    const { userID, followUserID, myfollowingCount, userFollowerCount } = req.query


    dbConn.query('DELETE FROM follow where id=?', id, function (err, results) {
        if (err) { throw err }
        let message = "";
        if (results.affectedRows == 0) {
            message = "follow not found"
        }
        else {
            followerCount(followUserID, userFollowerCount - 1)
            followingCount(userID, myfollowingCount - 1)
            message = "follow successfully Delete"
        }
        return res.send({ data: results, message: message })
    })

}

const followerCount = (id, followerCount) => {
    dbConn.query('UPDATE user set followerCount=? WHERE id=?', [followerCount, id], function (err, results) {
        if (err) { throw err }
        let message = "";
        if (results.changedRows == 0) {
            message = "Update Failed";
        }
        else {
            message = "successfully updatedata";
        }
        console.log(message);
    })
}

const followingCount = (id, followingCount) => {
    dbConn.query('UPDATE user set followingCount=? WHERE id=?', [followingCount, id], function (err, results) {
        if (err) { throw err }
        let message = "";
        if (results.changedRows == 0) {
            message = "Update Failed";
        }
        else {
            message = "successfully updatedata";
        }
        console.log(message);
    })
}

module.exports = { findAllFollower, store, destroy, findAllFollowing, findMeFollow };
