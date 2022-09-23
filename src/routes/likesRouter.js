const express = require('express');
const controller = require('../controllers');
const {handleValidation} = require("../middlewares");
const validators = require("../models/request-models");

const router = express.Router();
const likesController = controller.likesController;

router.get("/likes", likesController.findAll);
router.get("/me/like", likesController.findMeLike);
router.post("/me/like",handleValidation(validators.likesSchemaValidate), likesController.store);
router.delete("/me/like/:id", likesController.destroy);

module.exports = router;
