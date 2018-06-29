const { Client } = require('pg');

const client = new Client({
  database: 'ec2-user',
  host: process.env.HOST, //'54.153.1.26'
  user: 'power_user',
  password: 'power',
  port: '5432'
});
client.connect();

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

module.exports.getRelatedItems = (productId, callback) => {
  const getRelatedItemsQuery = `
    SELECT p2.id as related_product_id, p2.title, p2.main_img, p2.hov_img, p2.price, string_agg(c.name,',') as colors
    FROM product_relations pr
    JOIN products p2 ON p2.id = pr.product_id2
    JOIN products_colors pc ON p2.id = pc.product_id 
    JOIN colors c ON c.id = pc.color_id
    WHERE pr.product_id1 = ${productId}
    GROUP BY 1,2,3,4,5;
  `;

  // const getRelatedItemsMatViewQuery = `
  //   SELECT *
  //   FROM related_products 
  //   WHERE product_id = ${productId}
  // ;`;

  const sendData = (res) => {
    const data = res.rows.map(row => (
      {
        id: row.related_product_id,
        title: row.title,
        main: row.main_img,
        hover: row.hov_img,
        color: row.colors.split(','),
        price: `$${row.price} USD`
      }
    ));

    callback(null, data);
  };

  client.query(getRelatedItemsQuery, (err, res) => {
    if (err) {
      callback(err);
    // } else if (res.rows.length === 0) {
    //   client.query(getRelatedItemsQuery, (err, res) => {
    //     if (err) {
    //       callback(err);
    //     } else {
    //       sendData(res);
    //     }
    //   });
    } else {
      sendData(res);
    }
  });
};

module.exports.insertItem = (item, callback) => {
  const insertProductQuery = `
    INSERT INTO products (title, main_img, hov_img, price)
    VALUES ('${item.title}', '${item.main_img}', '${item.hov_img}', ${item.price})
    RETURNING *
  ;`;

  client.query(insertProductQuery, (pErr, pRes) => {
    if (pErr) {
      callback(pErr);
    } else {
      const insertedProductId = pRes.rows[0].id;

      const insertProductColorQuery = `
        INSERT INTO products_colors (product_id, color_id)
        VALUES 
          (${insertedProductId}, ${getRandomInt(1, 116)}),
          (${insertedProductId}, ${getRandomInt(1, 116)}),
          (${insertedProductId}, ${getRandomInt(1, 116)}),
          (${insertedProductId}, ${getRandomInt(1, 116)})
      ;`;

      client.query(insertProductColorQuery, (pcErr, pcRes) => {
        if (pcErr) {
          callback(pcErr);
        } else {
          const insertProductRelationsQuery = `
            INSERT INTO product_relations (product_id1, product_id2) 
            VALUES
              (${insertedProductId}, ${getRandomInt(1, 10000000)}),
              (${insertedProductId}, ${getRandomInt(1, 10000000)}),
              (${insertedProductId}, ${getRandomInt(1, 10000000)}),
              (${insertedProductId}, ${getRandomInt(1, 10000000)})
          ;`;

          client.query(insertProductRelationsQuery, (prErr, prRes) => {
            if (prErr) {
              callback(prErr);
            } else {
              callback(null, [pRes, pcRes, prRes]);
            }
          });
        }
      });
    }
  });
};

module.exports.updateItem = (id, details, callback) => {
  const updateQuery = `
    UPDATE products
    SET title = '${details.title}', price = ${details.price}
    WHERE id = ${id}
  ;`;

  client.query(updateQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

module.exports.deleteItem = (id, callback) => {
  const deleteProductColorsQuery = `DELETE FROM products_colors WHERE product_id = ${id};`;
  const deleteProductRelationsQuery = `DELETE FROM product_relations WHERE product_id1 = ${id};`;
  const deleteProductQuery = `DELETE FROM products WHERE id = ${id};`;

  client.query(deleteProductColorsQuery, (pcErr, pcRes) => {
    if (pcErr) {
      callback(pcErr);
    } else {
      client.query(deleteProductRelationsQuery, (prErr, prRes) => {
        if (prErr) {
          callback(prErr);
        } else {
          client.query(deleteProductQuery, (pErr, pRes) => {
            if (pErr) {
              callback(pErr);
            } else {
              callback(null, pRes);
            }
          });
        }
      });
    }
  });
};
