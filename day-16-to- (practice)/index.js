const mongoClient = require("mongodb").MongoClient;
const url = `mongodb://127.0.0.1:27017`;
const config = { useUnifiedTopology: true };

mongoClient.connect(url, config, (err, mngClient) => {
  if (err) console.log(`Database connection failed`);
  else {
    console.log(`Database connection ok`);
    // InsertOne(mngClient);
    // InsertMany(mngClient);

    // DeleteOne(mngClient);
    // DeleteMany(mngClient);
    // FindOne(mngClient);
    // Find(mngClient);
    // Update(mngClient);

    // CreateCollection(mngClient);
    DeleteCollection(mngClient);
  }
});

// Insert One
function InsertOne(mngClient) {
  const myCollection = mngClient.db("countries").collection("cities");
  myCollection.insertOne(
    { id: 3, name: "Dhaka", population: "23.7 million" },
    (err) => {
      if (err) console.log(`Insertion failed`);
      else console.log(`Data insert successfully`);
    }
  );
}

// Insert Many
function InsertMany(mngClient) {
  const myCollection = mngClient.db("countries").collection("cities");
  myCollection.insertMany(
    [
      { id: 4, name: "Rajshahi", population: "9.7 million" },
      { id: 7, name: "Rangpur", population: "8.7 million" },
      { id: 11, name: "Comilla", population: "13.7 million" },
    ],
    (err) => {
      if (err) console.log(`Failed`);
      else console.log(`Insert successfully`);
    }
  );
}

// Delete One
function DeleteOne(mngClient) {
  const myCollection = mngClient.db("countries").collection("cities");
  myCollection.deleteOne({ id: 7 }, (err) => {
    if (err) console.log(`Delete failed`);
    else console.log(`Delete successfully`);
  });
}

// Delete Many
function DeleteMany(mngClient) {
  const myCollection = mngClient.db("countries").collection("cities");
  myCollection.deleteMany((err, result) => {
    if (err) console.log(`Delete failed`);
    else console.log(`Delete ${result.deletedCount} item successfully`);
  });
}

function FindOne(mngClient) {
  const myCollection = mngClient.db("countries").collection("cities");
  myCollection.findOne({ name: "rangpur" }, (err, result) => {
    if (err) console.log(`Not found`);
    else console.log(result);
  });
}

function Find(mngClient) {
  const myCollection = mngClient.db("countries").collection("cities");
  myCollection
    .find({ name: "Comilla" })
    .sort({ population: 1 })
    .toArray((err, result) => {
      console.log(result);
    });
}

function Update(mngClient) {
  const myCollection = mngClient.db("countries").collection("cities");
  myCollection.updateOne(
    { id: 11 },
    { $set: { name: "Jeshore", population: "19.9 million" } },
    (err, data) => {
      console.log(data.modifiedCount);
    }
  );
}

// Create Collection
function CreateCollection(mngClient) {
  const myCollection = mngClient.db("countries");
  myCollection.createCollection("megaCities", (err, result) => {
    console.log(result);
  });
}

// Delete Collection::
function DeleteCollection(mngClient) {
  const myCollection = mngClient.db("countries");
  myCollection.dropCollection("megaCities", (err, result) => {
    if (result) console.log(`Collection delete successfully`);
    else console.log(`Collection delete failed`);
  });
}
