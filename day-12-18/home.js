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
    // FindAll(mngClient);
    // FindProjection(mngClient);
    // UpdateOne(mngClient);

    // createCollection(mngClient);
    DropCollection(mngClient);
  }
});

// Insert One
function InsertOne(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.insertOne(
    { id: 13, name: "Arjun", roll: "32", class: "Seven" },
    (err) => {
      if (err) console.log(`Data insertion failed`);
      else console.log(`Data insertion successfully`);
    }
  );
}

// Insert Many
function InsertMany(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.insertMany(
    [
      { id: 9, name: "Rampal", roll: "11", class: "Six" },
      { id: 19, name: "Kamal", roll: "23", class: "Eight" },
      { id: 3, name: "Habib", roll: "5", class: "Seven" },
    ],
    (err) => {
      if (err) console.log(`Failed`);
      else console.log(`Insertion ok`);
    }
  );
}

// Delete one
function DeleteOne(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.deleteOne({ id: 19 }, (err) => {
    if (err) console.log(`Delete failed`);
    else console.log(`Delete successfully`);
  });
}

// Delete many
function DeleteMany(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.deleteMany((err, result) => {
    if (err) console.log(`Delete failed`);
    else console.log(`${result.deletedCount} item deleted successfully`);
  });
}

// Find
function FindOne(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.findOne({ name: "Habib" }, (err, data) => {
    if (err) console.log(`Not found`);
    else console.log(data);
  });
}

// Find all
function FindAll(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection
    .find({ name: "Rampal" })
    .sort({ id: -1 })
    .limit(2)
    .toArray((err, data) => {
      console.log(data);
    });
}

// Find::Projection
function FindProjection(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection
    .find({}, { projection: { name: 1, roll: 1 } })
    .toArray((err, data) => {
      console.log(data);
    });
}

// Update
function UpdateOne(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.updateOne(
    { id: 19 },
    { $set: { name: "Rankin", roll: "3" } },
    (err, data) => {
      console.log(data);
    }
  );
}

// Create Collection
function createCollection(mngClient) {
  const myDb = mngClient.db("school");
  myDb.createCollection("inventory", (err, result) => {
    console.log(result);
  });
}

// Drop Collection::
function DropCollection(mngClient) {
  const myDb = mngClient.db("school");
  myDb.dropCollection("inventory", (err, result) => {
    console.log(result);
  });
}
