import Message from '../database/models/messages.model.js';
import Product from '../database/models/products.model.js';


import MessageMemoryDAO from './messages/MessageMemoryDAO.js';
import ProductMemoryDAO from './products/ProductMemoryDAO.js';


import MessageFileDAO from './messages/MessageFileDAO.js';
import ProductFileDAO from './products/ProductFileDAO.js';


import MessageMongoDBDAO from './messages/MessageMongoDBDAO.js';
import ProductMongoDBDAO from './products/ProductMongoDBDAO.js';


//MEMORY DAO'S
export const messageMemoryDAO = new MessageMemoryDAO();
export const productMemoryDAO = new ProductMemoryDAO();


//FILE DAO'S
export const messageFileDAO = new MessageFileDAO(
    './src/database/data/messages.txt'
);

export const productFileDAO = new ProductFileDAO(
    './src/database/data/products.txt'
);

//MONGO DB DAO'S
export const messageMongoDBDAO = new MessageMongoDBDAO(Message);
export const productMongoDBDAO = new ProductMongoDBDAO(Product);

