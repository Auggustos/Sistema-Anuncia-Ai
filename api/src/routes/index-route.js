'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Node Marketplace API",
    version: "0.0.1"
  });
});

router.post('/login', (req, res, next) => {
  
})

module.exports = router;