const router = require('express').Router();

const homepageRoute= require('./homepage.js');
const signUpRoute = require('./signup.js');
const loginRoute = require('./login.js');

router.use('/', homepageRoute);
router.use('/signUp', signUpRoute);
router.use('/login', loginRoute);

module.exports = router;