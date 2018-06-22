// this file creates 3 csvs that are stored in the local data folder
// use the postgres or cassandra loader files to load the csv into a db
const fs = require('fs');
const colorList = require('./colors.js');

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const text = `mumblecore migas semiotics
  shabby-chic sustainable art-party blue-bottle ugh health goth activated-charcoal
  listicle paleo helvetica lomo scenester echo-park put-a-bird-on-it salvia
  dreamcatcher neutra gochujang normcore helvetica XOXO chambray roof-party hoodie squid
  porkbelly polaroid vaporware actually heirloom wayfarers beard four-dollar-toast
  seitan cray authentic direct trade iPhone austin snackwave irony squid cliche scenester
  next-level typewriter ethical authentic single-origin coffee meditation enamel pin 90s bespoke
  umami selfies tattooed prism ugh chambray activated charcoal vinyl gastropub cray chillwave
  authentic shabby chic af taiyaki vape next-level gochujang street art hammock kombucha swag
  unicorn organic shaman humblebrag lo-fi tile bushwick gentrify live-edge XOXO umami chillwave
  kogi freegan shoreditch etsy whatever bushwick ramps mixtape post-ironic williamsburg sartorial
  adaptogen etsy gentrify tattooed chambray`;
let titleWords = text.replace(/\n/g, '').replace('  ', '').split(' ');
titleWords = titleWords.filter(word => word !== '');

// let csvContent = '';

// const header = ['id', 'title', 'main_img', 'hov_img', 'price', 'colors', 'related'];
// csvContent += `${header.join(',')}\r\n`;

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
