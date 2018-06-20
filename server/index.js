const express = require('express');
const path = require('path');
const db = require('../db/postgres/index.js');
const cors = require('cors');

const app = express();

// const mongoQuery = (currentItem, res) => {
//   db.RelatedItems.find()
//     .then((data) => {
//       let fourRelatedItems = [];
//       if (currentItem < 96) {
//         fourRelatedItems = data.slice(currentItem, currentItem + 4);
//       } else {
//         fourRelatedItems = data.slice(currentItem - 6, currentItem - 2);
//       }
//       res.send(fourRelatedItems);
//     });
// };

app.use(cors());

app.use('/', express.static(path.join(__dirname, '../public/')));
app.use('/product/:productId', express.static(path.join(__dirname, '../public/')));

app.get('/product/:productId/related', (req, res) => {
  const productId = parseInt(req.params.productId, 10);

  db.getRelatedItems(productId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      // process data to match what is expected by front-end
      const parsedData = data.map(row => (
        {
          id: row.related_product_id,
          title: row.title,
          main: row.main_img,
          hover: row.hov_img,
          color: row.colors.split(','),
          price: `$${row.price} USD`
        }
      ));

      res.header('Access-Control-Allow-Origin', '*');
      res.status(200).send(parsedData);
    }
  });
});

app.listen(3003, () => console.log('listening on port 3003'));
