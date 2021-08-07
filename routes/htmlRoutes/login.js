const Users = require('../../models/Users');

router.post("/login", (req, res) => {

    console.log("login data");
  
    console.log(req.body);
  
      Users.create(req.body).then(createData => {
  
          console.log(createData);
  
      res.redirect('/')
  
    });
  
  });