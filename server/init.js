const db = require('../db/mongo/index');
const exampleData = require('../db/mongo/exampleData');

db.RelatedItems.insertMany(exampleData, (err, docs) => {
  if (err) {
    console.log('there was an error adding items to the database');
  } else {
    console.log('Many items were successfully added to the database', docs);
  }
});