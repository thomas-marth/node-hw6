import Product from '../db/models/Product.js';

export const addProduct = (payload) => Product.create(payload);

export const getProducts = () =>
  Product.findAll({
    order: [['id', 'ASC']],
  });
