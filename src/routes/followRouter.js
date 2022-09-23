const express = require('express');
const controller = require('../controllers');
const {handleValidation} = require("../middlewares");
const validators = require("../models/request-models");

const router = express.Router();
const followController = controller.followController;

router.get("/me/follows/:userID", followController.findAllFollower);
router.get("/me/following/:userID", followController.findAllFollowing);
router.get("/me/following", followController.findMeFollow);

router.post("/me/follow",handleValidation(validators.followSchemaValidate), followController.store);
router.delete("/me/follow/:id", followController.destroy);

module.exports = router;
