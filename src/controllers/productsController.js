import { getProducts, addProduct } from '../services/productsService.js';

export const getProductsController = async (req, res, next) => {
  try {
    const result = await getProducts();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const addProductsController = async (req, res, next) => {
  try {
    const result = await addProduct(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
