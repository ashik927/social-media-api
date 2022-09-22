const express = require('express');
const controller = require('../controllers');
const {handleValidation} = require("../middlewares");
const validators = require("../models/request-models");

const router = express.Router();
const authController = controller.authController;

router.use('/login', authController.login )
router.post('/register',handleValidation(validators.authSchemaValidate), authController.register )

module.exports = router;
