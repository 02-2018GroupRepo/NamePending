const config = require('./config/config');
const accountSid = config.twilioAccount; 
const authToken = config.twilioApiKey; 

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = client;