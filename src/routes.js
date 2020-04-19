const express = require('express');
const routes = express.Router();
const RegistrationController = require('./controllers/RegistrationController');

routes.get('/', function (req, res) {
    res.send('Host');
  });


routes.post('/registration',RegistrationController.store);


  module.exports = routes