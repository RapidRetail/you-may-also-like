// this file creates 3 csvs that are stored in the local data folder
// use the postgres or cassandra loader files to load the csv into a db
const fs = require('fs');
const colorList = require('./colors.js');
const titleWords = require('./title-words.js');

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

let allData = '';

for (let i = 1; i <= 10000000; i += 1) {
  const row = {};
  row.id = i;

  // create a title
  const title = [];
  for (let j = 0; j < 5; j += 1) {
    title.push(titleWords[getRandomInt(0, titleWords.length - 1)]);
  }
  row.title = title.join(' ').trim();

  // get main & hover images
  row.main_img = `https://s3-us-west-1.amazonaws.com/rapid-retail-product-images/${getRandomInt(0, 999)}.jpg`;
  row.hov_img = `https://s3-us-west-1.amazonaws.com/rapid-retail-product-images/${getRandomInt(0, 999)}.jpg`;

  // get price
  row.price = getRandomInt(13, 29) * 5;

  // get colors
  const colors = [];
  for (let j = 0; j < 4; j += 1) {
    colors.push(colorList[getRandomInt(0, colorList.length - 1)]);
  }

  row.colors = colors;

  // get related items
  const related = [];
  for (let j = 0; j < 4; j += 1) {
    related.push(getRandomInt(1, 10000000));
  }

  row.related = related;

  allData += `${JSON.stringify(row)}\r\n`;

  // append to file every 100000 rows
  if (i % 100000 === 0) {
    fs.appendFileSync('db/data/allData.json', allData);
    allData = '';
    console.log(`completed ${i} products`);
  }
}

console.log('file generated');
