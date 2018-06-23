const { Client } = require('pg');
const path = require('path');

const client = new Client();
client.connect();

// DROP TABLE IF EXISTS
client.query('DROP TABLE IF EXISTS products', (err, res) => {
  if (err) {
    console.log('could not drop product table');
    console.log(err);
  } else {
    console.log('product table dropped');
  }
});

// CREATE TABLE
const productTable = `
  CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(250) NOT NULL,
  main_img VARCHAR(250),
  hov_img VARCHAR(250),
  price INT NOT NULL
)`;
client.query(productTable, (err, res) => {
  if (err) {
    console.log('could not create product table');
    console.log(err);
  } else {
    console.log('table products created');
  }
});

// COPY DATA INTO TABLES
const copyProductTable = `COPY products(title, main_img, hov_img, price) FROM '${path.resolve(__dirname, '../data/products.csv')}' WITH csv quote '"'`;
client.query(copyProductTable, (err, res) => {
  if (err) {
    console.log('could not copy product table');
    console.log(err);
  } else {
    console.log(`copied ${res.rowCount} rows to products!`);
  }

  client.end();
});
