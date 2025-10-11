import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Product = sequelize.define('product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: {
        msg: 'Product already exists',
      },
    },
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: false,
    validate: {
      isDecimal: {
        msg: 'Price must be a decimal number',
      },
      min: {
        args: [0],
        msg: 'Price must be greater than or equal to 0',
      },
    },
  },
});

Product.sync({ alter: true });

export default Product;
