const { Client } = require('pg');
const path = require('path');

const client = new Client();
client.connect();

// DROP TABLE IF EXISTS
client.query('DROP TABLE IF EXISTS products_colors', (err, res) => {
  if (err) {
    console.log('could not drop products_colors table');
    console.log(err);
  } else {
    console.log('products_colors table dropped');
  }
});

// CREATE TABLE
const productsColorsTable = `
  CREATE TABLE products_colors (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INT NOT NULL,
  color_id INT NOT NULL
)`;
client.query(productsColorsTable, (err, res) => {
  if (err) {
    console.log('could not create products_colors table');
    console.log(err);
  } else {
    console.log(`table products_colors created`);
  }
});

// COPY DATA INTO TABLE
const copyProductColorsTable = `COPY products_colors(product_id, color_id) FROM '${path.resolve(__dirname, '../data/products_colors.csv')}' WITH csv`;
client.query(copyProductColorsTable, (err, res) => {
  if (err) {
    console.log('could not copy products_colors table');
    console.log(err);
  } else {
    console.log(`copied ${res.rowCount} rows to products_colors!`);
  }

  client.end();
});
