const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const setupModels = require('./../db/models');

const sequelize = new Sequelize(
    config.DbName,
    config.DbUser,
    config.DbPassword,
    {
        host: config.DbHost,
        dialect: 'postgresql'
    }
);

sequelize.sync();
setupModels(sequelize);
console.log(setupModels)

module.exports = sequelize;