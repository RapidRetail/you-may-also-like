require('newrelic');
const express = require('express');
const path = require('path');
const db = require('../db/postgres/index.js');
// const db = require('../db/couch-db/index.js');
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
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200).send(data);
    }
  });
});

// accepts /related?title=title&price=45&main_img=link
//   &hov_img=link&colors=[blue,blue,blue,blue]&related=[1,2,3,4]
app.post('/related', (req, res) => {
  const colors = req.query.colors.substring(1, req.query.colors.length - 1).split(',');
  const related = req.query.related.substring(1, req.query.related.length - 1).split(',').map(id => parseInt(id, 10));

  const item = {
    title: req.query.title,
    price: req.query.price,
    main_img: req.query.main_img,
    hov_img: req.query.hov_img,
    colors,
    related
  };

  db.insertItem(item, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(201).send(data);
    }
  });
});

// accepts /product/id/related?title=title&price=price
app.put('/product/:productId/related', (req, res) => {
  const productId = parseInt(req.params.productId, 10);
  const updateDetails = {
    title: req.query.title,
    price: req.query.price
  };

  db.updateItem(productId, updateDetails, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(204).send(data);
    }
  });
});

app.delete('/product/:productId/related', (req, res) => {
  const productId = parseInt(req.params.productId, 10);

  db.deleteItem(productId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(202).send(data);
    }
  });
});

app.listen(3003, () => console.log('listening on port 3003'));
