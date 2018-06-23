const nano = require('nano')('http://localhost:5984');

const products = nano.use('products');

const getProduct = (id, callback) => {
  const params = {
    key: id,
    include_docs: true
  };

  products.view('productDesign', 'getProduct', params, (err, body) => {
    if (!err) {
      body.rows.forEach((doc) => {
        callback(doc.value);
      });
    }
  });
};

const getRelated = (ids, callback) => {
  const params = {
    keys: ids
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
  getProduct(id, (items) => {
    getRelated(items, callback);
  });
};
