const router = require('express').Router();

// get all posts 
router.get('/', (req, res) => {
    res.render('homepage')
});

module.exports = router;