const { Client } = require('pg');

const client = new Client();
client.connect();

const query = `
  SELECT p1.id as base_product, p2.id as related_product_id, p2.main_img, p2.hov_img, p2.price, string_agg(c.name,', ') 
  FROM products p1
  JOIN product_relations pr ON p1.id = pr.product_id1
  JOIN products p2 ON p2.id = pr.product_id2
  JOIN products_colors pc ON p2.id = pc.product_id 
  JOIN colors c ON c.id = pc.color_id
  WHERE p.id = 5
  GROUP BY 1,2,3,4,5;
`;
client.query()
