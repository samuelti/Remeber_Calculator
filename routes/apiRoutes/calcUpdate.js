const { create } = require('../../models/Calculations.js');
const Calculations = require('../../models/Calculations.js');
const UsersCalculations = require('../../models/UsersCalculations.js');
const router = require('express').Router();

function incrementCalled(req, res) {
    Calculations.increment(
        {
            calc_called: +1,
        },
        {
            where: {
                calc_content: req.body.calc_content,
            }
        }
    ).then((incrementresult) => {
        console.log(incrementresult);
        return 200;
    }).catch(err => {
        console.log('\nerror', err.errors)
        return 500;
    });
}

function handleCalcExists(req, res) {

    Calculations.findOne({
        where: {
            calc_content: req.body.calc_content,
        },
    }).then((findResult) => {
        console.log(findResult);
        const newUsersCalc = {
            calculation_id: findResult.dataValues.id,
            user_id: req.session.userId,
        };
        UsersCalculations.create(newUsersCalc)
            .then((createUserCalcResult) => {
                console.log(createUserCalcResult)
            }).catch(err => {
                console.log('\nerror', err.errors)
            });
        if (incrementCalled(req, res) == 200) {
            return findResult.dataValues.id;
        }
        else {
            return -1;
        }
    }).catch(err => {
        console.log('find error', err);
        return -1;
    });
};

function createUserCalc(req, res, calcId) {
    const newUsersCalc = {
        calculation_id: calcId,
        user_id: req.session.userId,
    };
    UsersCalculations.create(newUsersCalc)
        .then((createUserCalcResult) => {
            console.log(createUserCalcResult);
            return 200;
        }).catch(err => {
            console.log('\nerror', err.errors);
            var uniqueViolation = false;
            err.errors.map(x => {
                if (x.type == 'unique violation') {
                    uniqueViolation = true;
                }
                console.log('error item', x.type);
            });
            if (uniqueViolation) {
                console.log('yay :DDDDD');
                return 200;
            }
            else {
                console.log('didn\'t work DDDDDDD:');
                return 500;
            }
        });
}

router.post('/calcUpdate', (req, res) => {
    console.log('req.body', req.body);
    const newCalc = {
        calc_content: req.body.calc_content,
        calc_called: 1
    }
    Calculations.create(newCalc)
        .then((createResult) => {
            console.log('createResult', createResult)
            
            res.status(createUserCalc(req, res,createResult.dataValues.id))
        }).catch(err => {
            console.log('\nerror', err.errors)
            var uniqueViolation = false;
            err.errors.map(x => {
                if (x.type == 'unique violation') {
                    uniqueViolation = true;
                }
                console.log('error item', x.type)
            });
            if (uniqueViolation) {
                console.log('yay :DDDDD')
                var calcId = handleCalcExists(req, res);
                if (calcId > 0)
                {
                    res.status(createUserCalc(req, res, calcId));
                }
                else {
                    res.status(500);
                }
                /*
                var status = createUserCalc(req, res);
                if (status == 200) {
                    res.status(handleCalcExists(req, res))
                }
                else {
                    res.status(status)
                }
                */
            }
            else {
                console.log('didn\'t work DDDDDDD:')
                res.status(500)
            }
        });

});

module.exports = router;