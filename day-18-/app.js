const mongoClient = require("mongodb").MongoClient;
const url = `mongodb://127.0.0.1:27017/`;

const config = { useUnifiedTopology: true };

mongoClient.connect(url, config, (err, mngClient) => {
  if (err) console.log(`Connection failed`);
  else {
    console.log(`Connection Ok`);
  }
});
