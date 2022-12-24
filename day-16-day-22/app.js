const mongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://myUser:Admin123456@cluster0.xrfjl.mongodb.net/?retryWrites=true&w=majority`;
const config = { useUnifiedTopology: true };

mongoClient.connect(uri, config, (err, myMongoClient) => {
  if (err) {
    return `connection failed`;
  } else {
    console.log(`connection ok`);
  }
  InsertOne(myMongoClient);
});

function InsertOne(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");

  myCollection.insertOne({ name: "Xiaomi 9s", price: "25500" }, (err) => {
    if (err) console.log(`Data insert failed`);
    else console.log(`Data insertion ok`);
  });
}
