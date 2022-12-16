const mongoClient = require("mongodb").MongoClient;
const url = `mongodb://127.0.0.1:27017/`;
const config = { useUnifiedTopology: true };

mongoClient.connect(url, config, (err, mngClient) => {
  if (err) {
    console.log(`Connection doesn't work`);
  } else {
    console.log(`Connection ok`);

    // InsertOne(mngClient);
    // DeleteOne(mngClient);
    Find(mngClient);
    // UpdateData(mngClient);
  }
});

// Insert Single data
function InsertOne(mngClient) {
  const myClient = mngClient.db("countries").collection("cities");
  myClient.insertOne(
    { id: 2, name: "Dinajpur", population: "2.3 million" },
    (err) => {
      if (err) console.log(`Data insertion failed`);
      else console.log(`Data insertion ok`);
    }
  );
}

// Delete single data
function DeleteOne(mngClient) {
  const myClient = mngClient.db("countries").collection("cities");
  myClient.deleteOne({ id: 2 }, (err) => {
    if (err) {
      console.log("Data delete failed");
    } else {
      console.log("Data delete successfully");
    }
  });
}

// Select Many item
function Find(mngClient) {
  const myClient = mngClient.db("countries").collection("cities");
  myClient
    .find()
    .sort({ id: 1 })
    .limit(5)
    .toArray((err, result) => {
      console.log(result);
    });
}

// Update item
function UpdateData(mngClient) {
  const myClient = mngClient.db("countries").collection("cities");
  myClient.updateOne(
    { id: 2 },
    { $set: { name: "Lalmonirhat", population: "2.65 million" } },
    (err, result) => {
      if (result.matchedCount) {
        console.log(`Update successfully`);
      } else {
        console.log("Not matching, update failed");
      }
    }
  );
}
