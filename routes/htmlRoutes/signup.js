const Users = require('../../models/Users');
const router = require('express').Router();

router.post("/signUp", (req, res) => {

  console.log("sign up data");

  console.log(req.body);

  Users.create(req.body).then(createData => {

    console.log(createData);

    req.session.username = req.body.username;
    req.session.userId = createData.dataValues.id;

    console.log('Id',createData.dataValues.id);

    res.redirect('/')

  }).catch(err => {
    console.log('\nerror', err.errors)
    err.errors.map(x=> console.log('error item', x.type));
    if(err.errors.ValidationErrorItem == 'unique violation'){
      console.log('yay :DDDDD')
    }
    else{
      console.log('didn\'t work DDDDDDD:')
    }
    res.status(500)

  })

});
router.get("/signUp", (req, res) => {
  res.render('signup')
});

module.exports = router;