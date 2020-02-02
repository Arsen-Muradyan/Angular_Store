const faker = require("faker");
var database = { products: [] };
for (let i = 0; i < 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    imageURL: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });
}
console.log(JSON.stringify(database));
