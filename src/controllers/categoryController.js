const mongoose = require('mongoose');
const Model = require('../models');
const Category = Model.categoryModel;
const Item = Model.itemModel;

const findAll = async (req, res) => {
    // const categories = await Category.find({ client_id: parseInt(req.query.client_id) });
    res.send("categories");
}

const findCategoriesbyStatus = async (req, res) => {
    const categories = await Category.find({ status: parseInt(req.query.status), client_id: parseInt(req.query.client_id) });
    res.send(categories);
}

const updateItembyCategory = async (req, res) => {
    const item = await Item.find({ item_category: req.params.item_category_id })
    if (item) {
        item.forEach(element => {
            element.sell_tax = req.body.tax
            element.save();
        });
    }
    res.send(item);
}

const findByPagination = async (req, res) => {
    const _pageNumber = parseInt(req.params.page)
    const _pageSize = parseInt(req.params.pageSize)

    console.log(_pageSize)

    Category.countDocuments({ client_id: parseInt(req.query.client_id) }, function (err, count) {
        Category.find({ client_id: parseInt(req.query.client_id) }, null,
            { sort: { createdAt: -1 } }
        ).skip(_pageNumber > 0 ? ((_pageNumber - 1) * _pageSize) : 0)
            .limit(_pageSize)
            .exec(function (err, docs) {
                if (err)
                    res.json(err);
                else
                    res.json({
                        "Total": count,
                        "_Data": docs
                    });
            });
    });
}

const findById = async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.send(category);
}

const store = async (req, res) => {
    await Category.insertMany(req.body);
    res.send(req.body);
}

const update = async (req, res) => {
    const id = req.params.id;
    let category = await Category.findById(id);

    if (category) {
        await Category.updateOne({ _id: req.params.id }, { ...req.body, updatedAt: Date.now().toString() })
        res.send(category);
    }
    else {
        res.send("Category not found by the id: " + id);
    }

}

const destroy = async (req, res) => {
    let category = await Category.findById(req.params.id);
    if (category) {
        let result = await Category.deleteOne({ _id: req.params.id });
        res.send(category);
    }
    else {
        res.send("Category not found by the id: " + req.params.id);
    }
}

module.exports = { findAll, findByPagination, findById, findCategoriesbyStatus, store, update, destroy, updateItembyCategory };
