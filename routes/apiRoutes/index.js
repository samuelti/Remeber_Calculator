const router = require('express').Router();
const calcUpdate = require('./calcUpdate');

router.use('/', calcUpdate);

module.exports = router;