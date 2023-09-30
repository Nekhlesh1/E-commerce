const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/product',productsController.products );
router.post('/product/create', productsController.create);
router.delete('/product/delete/:productID', productsController.delete);
router.post('/product/:productID/update_quantity', productsController.updateQunatity)


module.exports = router;