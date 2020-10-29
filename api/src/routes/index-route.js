'use strict'

const express = require('express');
const router = express.Router();
const connection = require('../database/connection')
const UserController = require('../controllers/UserController')
 

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Node Marketplace API",
    version: "0.0.1"
  });
});

router.post('/login', UserController.login)

router.post('/register', UserController.newUser)

module.exports = router;