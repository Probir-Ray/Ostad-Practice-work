const mongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://admin:A123456@cluster0.xrfjl.mongodb.net/?retryWrites=true&w=majority`;
const config = { useUnifiedTopology: true };

mongoClient.connect(uri, config, (err) => {
  if (err) {
    console.log(`Connection failed`);
  } else {
    console.log(`Connection ok`);
  }
});
