const { create } = require('../../models/Calculations.js');
const Calculations = require('../../models/Calculations.js');
const UsersCalculations = require('../../models/UsersCalculations.js');
const router = require('express').Router();

function handleCalcExists(req,res) {

    Calculations.findOne({
        where: {
            calc_content: req.body.calc_content,
        },
    }).then((findResult) => {
        console.log(findResult)
        const newUsersCalc = {
            calculation_id:findResult.dataValues.id,
            user_id: req.session.userId,
        };
        UsersCalculations.create(newUsersCalc)
        .then((createUserCalcResult) => {
            console.log(createUserCalcResult)
            res.status(200)
        }).catch(err => {
            console.log('\nerror', err.errors)
            res.status(500)
          });
        res.status(200)
    }).catch(err => {
        console.log('find error', err)
        res.status(500)
    });
};

router.post('/calcUpdate', (req, res) => {
    console.log('req.body', req.body);
    const newCalc = {
        calc_content: req.body.calc_content,
        calc_called: 1
    }
    Calculations.create(newCalc)
    .then((createResult) => {
        console.log('createResult',createResult)
        const newUsersCalc = {
            calculation_id:createResult.dataValues.id,
            user_id: req.session.userId,
        };
        UsersCalculations.create(newUsersCalc)
        .then((createUserCalcResult) => {
            console.log(createUserCalcResult)
            res.status(200)
        }).catch(err => {
            console.log('\nerror', err.errors)
            res.status(500)
          });
        res.status(200)
    }).catch(err => {
        console.log('\nerror', err.errors)
        var uniqueViolation = false;
        err.errors.map(x=> {
            if (x.type == 'unique violation') {
                uniqueViolation = true;
            }    
            console.log('error item', x.type)
        });
        if(uniqueViolation){
          console.log('yay :DDDDD')
          handleCalcExists(req,res)
          res.status(200)
        }
        else{
          console.log('didn\'t work DDDDDDD:')
          res.status(500)
        }
      });
    // Calculations.create(req.body)
    //   .then((product) => {
    
    //     if (req.body.tagIds.length) {
    //       const productTagIdArr = req.body.tagIds.map((tag_id) => {
    //         return {
    //           product_id: product.id,
    //           tag_id,
    //         };
    //       });
    //       return ProductTag.bulkCreate(productTagIdArr);
    //     }
    //     res.status(200).json(product);
    //   })
    //   .then((productTagIds) => res.status(200).json(productTagIds))
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(400).json(err);
    //   });

  });

module.exports = router;