const express = require('express');

const categoryRouter = require('./categoryRouter');
const postRouter = require('./postRouter');
const followRouter = require('./followRouter');
const likesRouter = require('./likesRouter');
const authRouter = require('./authRouter');


const controller = require('../controllers');
const authController = controller.authController;


let router = express.Router();

router.use('/categories', categoryRouter)
router.use('/', postRouter)
router.use('/', followRouter)
router.use('/', likesRouter)
router.use('/', authRouter)

// router.use('/login', authController.login )
// router.post('/register', authController.register )


module.exports = router;
