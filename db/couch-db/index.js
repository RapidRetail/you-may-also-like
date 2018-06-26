const nano = require('nano')('http://localhost:5984');

const products = nano.use('products');

const getProduct = (id, callback) => {
  const params = {
    key: id,
    include_docs: true
  };

  products.view('productDesign', 'getProduct', params, (err, body) => {
    if (err) {
      callback(err);
    } else {
      callback(null, body.rows[0]);
    }
  });
};

const getRelated = (ids, callback) => {
  const params = {
    keys: ids,
    include_docs: false
  };

  products.view('productDesign', 'getRelated', params, (err, body) => {
    if (err) {
      callback(err);
    } else {
      const items = [];

      body.rows.forEach((doc, index) => {
        items.push({
          id: index,
          title: doc.value.title,
          main: doc.value.main_img,
          hover: doc.value.hov_img,
          color: doc.value.colors,
          price: `$${doc.value.price} USD`
        });
      });

      callback(null, items);
    }
  });
};

module.exports.getRelatedItems = (id, callback) => {
  getProduct(id, (err, doc) => {
    if (err) {
      callback(err);
    } else {
      getRelated(doc.value, (err, items) => {
        if (err) {
          callback(err);
        } else {
          callback(null, items);
        }
      });
    }
  });
};

module.exports.insertItem = (item, callback) => {
  products.view('productDesign', 'stats', (err, body) => {
    if (err) {
      callback(err);
    } else {
      const insertId = body.rows[0].value.max + 1;
      item.id = insertId;

      products.insert(item, (insertErr, insertBody) => {
        if (err) {
          callback(err);
        } else {
          callback(null, insertBody);
        }
      });
    }
  });
};

module.exports.updateItem = (id, details, callback) => {
  getProduct(id, (err, doc) => {
    if (err) {
      callback(err);
    } else {
      const updatedDoc = doc.doc;

      updatedDoc.title = details.title;
      updatedDoc.price = details.price;

      products.insert(updatedDoc, (err, body) => {
        if (err) {
          callback(err);
        } else {
          callback(null, err);
        }
      });
    }
  });
};

module.exports.deleteItem = (id, callback) => {
  getProduct(id, (err, doc) => {
    if (err) {
      callback(err);
    } else {
      products.destroy(doc.doc._id, doc.doc._rev, (err, body) => {
        if (err) {
          callback(err);
        } else {
          callback(body);
        }
      });
    }
  });
};
