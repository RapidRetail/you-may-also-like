const { Client } = require('pg');
const path = require('path');

const client = new Client();
client.connect();

// DROP TABLE IF EXISTS
client.query('DROP TABLE IF EXISTS colors', (err, res) => {
  if (err) {
    console.log('could not drop colors table');
    console.log(err);
  } else {
    console.log('colors table dropped');
  }
});

// CREATE TABLE
const colorsTable = `
  CREATE TABLE colors (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(25) NOT NULL
)`;
client.query(colorsTable, (err, res) => {
  if (err) {
    console.log('could not create colors table');
    console.log(err);
  } else {
    console.log('table colors created');
  }
});

// COPY DATA INTO TABLE
const copyColorsTable = `COPY colors(name) FROM '${path.resolve(__dirname, '../data/colors.csv')}' WITH csv`;
client.query(copyColorsTable, (err, res) => {
  if (err) {
    console.log('could not copy product table');
    console.log(err);
  } else {
    console.log(`copied ${res.rowCount} rows to colors!`);
  }

  client.end();
});
