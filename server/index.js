require('newrelic');
const express = require('express');
const path = require('path');
const db = require('../db/postgres/index.js');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public/')));
app.use('/product/:productId', express.static(path.join(__dirname, '../public/')));

app.get('/product/:productId/related', (req, res) => {
  const productId = parseInt(req.params.productId, 10);

  db.getRelatedItems(productId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200).send(data);
    }
  });
});

// accepts json body containing data
app.post('/product', (req, res) => {
  db.insertItem(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
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
