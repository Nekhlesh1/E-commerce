const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/product',productsController.products );
router.post('/product/create', productsController.create);


module.exports = router;