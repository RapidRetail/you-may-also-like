const { Client } = require('pg');

const client = new Client();
client.connect();

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

  client.query(getRelatedItemsQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      // parse data to match what is expected by front-end
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
    }

    client.end();
  });
};
