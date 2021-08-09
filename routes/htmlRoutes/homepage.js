const router = require('express').Router();

// get all posts 
router.get('/', (req, res) => {
    console.log('session',req.session);
    res.render('homepage', {username:req.session.username});
});

module.exports = router;