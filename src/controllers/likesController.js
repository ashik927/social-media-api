const mongoose = require('mongoose');
const Model = require('../models');
const Post = Model.postSchema;
const dbConn = require('../database');

const findAll = async (req, res) => {

    dbConn.query('SELECT * FROM likes', function (error, results, fields) {
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
const store = async (req, res) => {
    // destructuring
    const { userID, postID,likeCount } = req.body

    // insert to db
    dbConn.query("INSERT INTO likes (userID, postID ) VALUES (?,?)", [userID, postID], function (error, results, fields) {
        if (error) throw error;

        const updateLike = updateTotalLike(postID , likeCount)
        return res.send({ error: false, data: results, message: 'Like successfully added' });
    });

}

const destroy = async (req, res) => {

    let id = req.params.id;

    dbConn.query('DELETE FROM likes where id=?', id, function (err, results) {
        if (err) { throw err }
        let message = "";
        if (results.affectedRows == 0) {
            message = "like not found"
        }
        else {
            message = "like successfully Delete"
        }
        return res.send({ data: results, message: message })
    })

}

const updateTotalLike = (postID , likeCount)=>{
    dbConn.query('UPDATE murmurs set likeCount=? WHERE id=?',[likeCount,postID],function(err,results){
        if(err){throw err}
        let message = "";
        if(results.changedRows == 0){
            message = "Update Failed";
        }
        else{
            message ="successfully updatedata";
        }
    })
}

module.exports = { findAll, store, destroy };
