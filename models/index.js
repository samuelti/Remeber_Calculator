const Users = require('./Users');
const Calculations = require('./Calculations');
const UsersCalculations = require('./UsersCalculations');

Users.belongsToMany(Calculations, { through: UsersCalculations});

Calculations.belongsToMany(Users, {through: UsersCalculations});

module.exports = {
    Users,
    Calculations,
    UsersCalculations,
};