const router = require('express').Router();

const homepageRoute= require('./homepage.js');
const signUpRoute = require('./signup.js');

router.use('/', homepageRoute);
router.use('/signUp', signUpRoute);

module.exports = router;