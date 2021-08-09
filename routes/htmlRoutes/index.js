const router = require('express').Router();

const homepageRoute= require('./homepage.js');
const signUpRoute = require('./signup.js');
const loginRoute = require('./login.js');
const calculatorRoute = require('./calculator.js');
const statsRoute = require('./stats.js');

// router.use('/', homepageRoute);
// router.use('/signUp', signUpRoute);
// router.use('/login', loginRoute);

router.use('/', homepageRoute);
router.use('/', signUpRoute);
router.use('/', loginRoute);
router.use('/', calculatorRoute);
router.use('/', statsRoute);

module.exports = router;