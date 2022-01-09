const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'fa2544', {
    host: 'localhost',
    dialect: 'mysql',
    timezone:  "-03:00" //configuração para que a hora fique registrada certo 
});

module.exports = connection;