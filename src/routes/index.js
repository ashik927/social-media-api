const express = require('express');

const categoryRouter = require('./categoryRouter');
const postRouter = require('./postRouter');
const controller = require('../controllers');
const authController = controller.authController;


let router = express.Router();

router.use('/categories', categoryRouter)
router.use('/posts', postRouter)

router.use('/login', authController.login )
router.use('/register', authController.register )


module.exports = router;
