const Users = require('../../models/Users');
const router = require('express').Router();

router.post("/signUp", (req, res) => {

  console.log("sign up data");

  console.log(req.body);

  Users.create(req.body).then(createData => {

    console.log(createData);

    res.redirect('/')

  });

});
router.get("/signUp", (req, res) => {
  res.render('signup')
});

module.exports = router;