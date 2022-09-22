const express = require('express');
const controller = require('../controllers');
const {handleValidation} = require("../middlewares");
const validators = require("../models/request-models");

const router = express.Router();
const postController = controller.postController;

router.get("/murmurs", postController.findAll);
router.post("/me/murmurs",handleValidation(validators.postSchemaValidate), postController.store);
router.delete("/me/murmurs/:id", postController.destroy);

module.exports = router;
