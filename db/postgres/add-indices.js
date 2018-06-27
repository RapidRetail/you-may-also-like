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

const createMaterializedView = `
  CREATE MATERIALIZED VIEW related_products as
    SELECT 
        pr.product_id1 as product_id,
        p2.id as related_product_id, 
        p2.title,
        p2.main_img, 
        p2.hov_img, 
        p2.price, 
        string_agg(c.name,',') as colors
    FROM product_relations pr
    JOIN products p2 ON p2.id = pr.product_id2
    JOIN products_colors pc ON p2.id = pc.product_id
    JOIN colors c ON c.id = pc.color_id
    GROUP BY 1,2,3,4,5
;`;

const relatedProductsIndex = `
  CREATE INDEX ON related_products (product_id);
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
                console.log('adding materialized view..')
                client.query(createMaterializedView, (err, res) => {
                  if (err) {
                    console.log('filed to created materialized view', err);
                  } else {
                    console.log('created materialized view!');
                    console.log('adding index on materialized view..');
                    client.query(relatedProductsIndex, (err, res) => {
                      if (err) {
                        console.log('failed to create index on materialized view');
                      } else {
                        console.log('created index on materialized view!');
                        client.end();
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
