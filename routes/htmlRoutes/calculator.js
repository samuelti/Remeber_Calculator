const Calculations = require('../../models/Calculations');
const router = require('express').Router();

  router.get("/calculator", (req, res) => {
    
    res.render('calculator')
  });
  
  module.exports = router;