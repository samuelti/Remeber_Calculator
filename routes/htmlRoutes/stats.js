const router = require('express').Router();
const { Users, Calculations } = require('../../models');

router.get('/stats', (req, res) => {
    Calculations.findAll({
        order: [
            ['calc_called', 'DESC'],
        ],
    }).then((data) => {
        
    const cleanData = data.map(x =>
       x.get({plain:true})
    );
        console.log(cleanData);
        res.render('stats', {calculation: cleanData});
    }).catch(err => res.status(500).json(err));
});

  module.exports = router;