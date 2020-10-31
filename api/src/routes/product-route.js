'use strict'

const connection = require('../database/connection')
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')


router.post('/', ProductController.newProduct);
router.get('/', ProductController.listProducts);
router.get('/:id', ProductController.listProduct);

module.exports = router;