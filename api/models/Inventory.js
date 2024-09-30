import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const Inventory = sequelize.define('Inventory', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
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
});

export default Inventory;