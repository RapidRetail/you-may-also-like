// this file creates 4 csvs that are stored in the local data folder
// use the postgres loader files to load the csv into a db
const fs = require('fs');
const colorList = require('./colors.js');
const titleWords = require('./title-words.js');

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

// generate products
console.log('starting products');

let csvContent = '';
for (let i = 1; i <= 10000000; i += 1) {
  const row = [];

  // create a title
  const title = [];
  for (let j = 0; j < 5; j += 1) {
    title.push(titleWords[getRandomInt(0, titleWords.length - 1)]);
  }
  row.push(`"${title.join(' ').trim()}"`);

  // get main & hover images
  row.push(`"https://s3-us-west-1.amazonaws.com/rapid-retail-product-images/${getRandomInt(0, 999)}.jpg"`);
  row.push(`"https://s3-us-west-1.amazonaws.com/rapid-retail-product-images/${getRandomInt(0, 999)}.jpg"`);

  // get price
  row.push(getRandomInt(13, 29) * 5);

  csvContent += `${row.join(',')}\r\n`;

  // append to file every 100000 rows
  if (i % 100000 === 0) {
    fs.appendFileSync('db/data/products.csv', csvContent);
    csvContent = '';
    console.log(`completed ${i} products`);
  }
}

console.log('generated products');

// generate colors
console.log('starting colors');
csvContent = '';

for (let i = 0; i < colorList.length; i += 1) {
  csvContent += `${colorList[i]}\r\n`;
}

fs.appendFileSync('db/data/colors.csv', csvContent);

console.log('generated colors');

// generate products_colors
console.log('starting products_colors');
csvContent = '';

for (let i = 1; i <= 10000000; i += 1) {
  for (let j = 0; j < 4; j += 1) {
    csvContent += `${i},${getRandomInt(1, 116)}\r\n`;
  }

  if (i % 100000 === 0) {
    fs.appendFileSync('db/data/products_colors.csv', csvContent);
    csvContent = '';
    console.log(`completed ${i} products`);
  }
}

console.log('generated products_colors!');

// generate product_relations
console.log('starting product_relations');
csvContent = '';
for (let i = 1; i <= 10000000; i += 1) {
  for (let j = 0; j < 4; j += 1) {
    csvContent += `${i},${getRandomInt(1, 10000000)}\r\n`;
  }

  if (i % 100000 === 0) {
    fs.appendFileSync('db/data/product_relations.csv', csvContent);
    csvContent = '';
    console.log(`completed ${i} products`);
  }
}

console.log('generated product_relations!');
