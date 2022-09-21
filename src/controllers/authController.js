const mongoose = require('mongoose');
const Model = require('../models');
const Category = Model.categoryModel;

const login = async (req, res) => {
    // const categories = await Category.find({ client_id: parseInt(req.query.client_id) });
    res.send("Login");
}

const register = async (req, res) => {
    // const categories = await Category.find({ client_id: parseInt(req.query.client_id) });
    res.send("register");
}





module.exports = { login , register };
