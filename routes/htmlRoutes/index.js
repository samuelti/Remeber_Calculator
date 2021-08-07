const router = require('express').Router();

const homepageRoute= require('./homepage.js')

router.use('/', homepageRoute);

module.exports = router;