const config = require('../config/config');
const mysql = require('mysql');

const connection = mysql.createConnection(config);

module.exports = connection;
