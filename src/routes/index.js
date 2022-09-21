const express = require('express');

const categoryRouter = require('./categoryRouter');



let router = express.Router();

router.use('/categories', categoryRouter)


module.exports = router;
