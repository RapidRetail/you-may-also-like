const { Client } = require('pg');

const client = new Client();
client.connect();

const productColorsKeyConstraint = `
  ALTER TABLE products_colors 
  ADD CONSTRAINT product_id_exists
  FOREIGN KEY (product_id) 
  REFERENCES products(id)
;`;

const productsRelationsKeyConstraint = `
  ALTER TABLE product_relations
  ADD CONSTRAINT product_id_exists
  FOREIGN KEY (product_id1)
  REFERENCES products(id)
;`;

const productsColorsIndex = `
  CREATE INDEX ON products_colors (product_id);
`;

const productRelationsIndex = `
  CREATE INDEX ON product_relations (product_id1);
`;

console.log('adding products_colors foreign key constraint..');
client.query(productColorsKeyConstraint, (err, res) => {
  if (err) {
    console.log('failed to add products_colors foreign key constraint', err);
  } else {
    console.log('added products_colors foreign key constraint!');
    console.log('adding product_relations foreign key constraint..');
    client.query(productsRelationsKeyConstraint, (err, res) => {
      if (err) {
        console.log('failed to add product_relations foreign key constraint', err);
      } else {
        console.log('added product_relations foreign key constraint!');
        console.log('adding products_colors index..');
        client.query(productsColorsIndex, (err, res) => {
          if (err) {
            console.log('failed to add products_colors index', err);
          } else {
            console.log('added products_colors index!');
            console.log('adding product_relations index..');
            client.query(productRelationsIndex, (err, res) => {
              if (err) {
                console.log('failed to add product_relations index', err);
              } else {
                console.log('added product_relations index!');
                client.end();
              }
            });
          }
        });
      }
    });
  }
});
