import { faker } from '@faker-js/faker';

export function getProductsArray(count) {
    let productsArray = [];

    for (let index = 1; index < count; index++) {
        let name = faker.commerce.product();
        productsArray.push({
            id: index,
            name,
            price: +faker.commerce.price(100, 1000, 2),
            image: faker.image.imageUrl(640, 480, name, true),
        });
    }
    return productsArray;
}
