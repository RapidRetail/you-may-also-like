const { Client } = require('pg');
const path = require('path');

const client = new Client();
client.connect();

// DROP TABLE IF EXISTS
client.query('DROP TABLE IF EXISTS product_relations', (err, res) => {
  if (err) {
    console.log('could not drop product_relations table');
    console.log(err);
  } else {
    console.log('product_relations table dropped');
  }
});

// CREATE TABLE
const productRelationsTable = `
  CREATE TABLE product_relations (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id1 INT NOT NULL,
  product_id2 INT NOT NULL
)`;
client.query(productRelationsTable, (err, res) => {
  if (err) {
    console.log('could not create product_relations table');
    console.log(err);
  } else {
    console.log('table product_relations created');
  }
});

// COPY DATA INTO TABLE
const copyProductRelationsTable = `COPY product_relations(product_id1, product_id2) FROM '${path.resolve(__dirname, '../data/product_relations.csv')}' WITH csv`;
client.query(copyProductRelationsTable, (err, res) => {
  if (err) {
    console.log('could not copy product table');
    console.log(err);
  } else {
    console.log(`copied ${res.rowCount} rows to product_relations!`);
  }

  client.end();
});
