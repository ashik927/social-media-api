const mongoose = require('mongoose');
const Model = require('../models');
const Post = Model.postSchema;

const findAll = async (req, res) => {
    // const categories = await Category.find({ client_id: parseInt(req.query.client_id) });
    res.send("categories");
}



module.exports = { findAll };
