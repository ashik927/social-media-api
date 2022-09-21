const express = require('express');
const controller = require('../controllers');
const {handleValidation} = require("../middlewares");
const validators = require("../models/request-models");

const router = express.Router();
const CategoryController = controller.categoryController;

router.get("/", CategoryController.findAll);
router.get("/:page/:pageSize", CategoryController.findByPagination);
router.get("/findCategories/", CategoryController.findCategoriesbyStatus);
router.get("/:id", CategoryController.findById);
router.put("/updateItembyCategory/:item_category_id", CategoryController.updateItembyCategory);
// router.post("/", CategoryController.store);
router.post("/",handleValidation(validators.categorySchemaValidate), CategoryController.store);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.destroy);

module.exports = router;
