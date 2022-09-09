import { getProductsArray } from '../utils/faker.js'
import path from 'path';
const __dirname = path.resolve();

export const index = (req, res) =>{
    try {
        res.render('products-table');
    } catch (error) {
        console.log(error);
    }
}

export const getFakeProducts = async (req, res) => {
    try {
        res.json({
            products: getProductsArray(5)
        })
    } catch (error) {
        console.log(error);
    }
}