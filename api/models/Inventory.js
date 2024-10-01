import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Inventory = sequelize.define('Inventory', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  publicationDate: {
    type: DataTypes.DATE,
  },
  isbn: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Inventory;