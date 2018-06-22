const nano = require('nano')('http://localhost:5984');
const couchimport = require('couchimport');
const path = require('path');

const loadData = () => {
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
    }
  }).on('written', (data) => {
    console.log(data);
  });
};

nano.db.destroy('products', () => {
  nano.db.create('products', () => {
    console.log('table created, beginning csv dump..');
    loadData();
  });
});
