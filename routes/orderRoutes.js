const express = require('express');
const router = express.Router();
const { placeOrder, getUserOrders, getAllOrders } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, placeOrder);
router.route('/user').get(protect, getUserOrders);
router.route('/admin').get(protect, admin, getAllOrders);

module.exports = router;
