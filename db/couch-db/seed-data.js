const nano = require('nano')('http://localhost:5984');
const couchimport = require('couchimport');
const path = require('path');

const loadData = (callback) => {
  const options = {
    COUCH_FILETYPE: 'jsonl',
    COUCH_URL: 'http://localhost:5984',
    COUCH_DATABASE: 'products',
    COUCH_PARALLELISM: 10
  };

  couchimport.importFile(path.resolve(__dirname, '../data/allData.json'), options, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('upload complete!', data);
      callback();
    }
  }).on('written', (data) => {
    console.log(data);
  });
};

const addViews = () => {
  const db = nano.use('products');

  const views = {
    views: {
      getProduct: {
        map: `function (doc) {
          emit(doc.id, doc.related);
        }`
      },
      getRelated: {
        map: `function (doc) {
          emit(doc.id, {
            title: doc.title,
            main_img: doc.main_img,
            hov_img: doc.hov_img,
            price: doc.price,
            colors: doc.colors
          });
        }`
      }
    },
    language: 'javascript'
  };

  db.insert(views, '_design/productDesign', (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log('index created!');
    }
  });
};

nano.db.destroy('products', () => {
  nano.db.create('products', () => {
    console.log('table created, beginning csv dump..');
    loadData(() => {
      console.log('creating views..');
      addViews();
    });
  });
});
