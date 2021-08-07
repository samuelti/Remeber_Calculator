const Users = require('../../models/Users');
const router = require('express').Router();

router.post("/login", (req, res) => {

    console.log("login data");

    console.log(req.body);

    Users.create(req.body).then(createData => {

        console.log(createData);

        res.redirect('/')

    });

});
router.get("/login", (req, res) => {
    console.log('login')
    res.render('login')
});

module.exports = router;