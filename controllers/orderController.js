const Order = require('../models/order');

exports.placeOrder = async (req, res) => {
  const { products, totalAmount } = req.body;
  const order = await Order.create({ user: req.user.id, products, totalAmount });
  res.status(201).json(order);
};

exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('user');
  res.json(orders);
};

