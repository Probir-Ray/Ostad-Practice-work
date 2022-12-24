const mongoClient = require("mongodb").MongoClient;
// const uri = `mongodb+srv://myUser:Admin123456@cluster0.xrfjl.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb://127.0.0.1:27017/`;
const config = { useUnifiedTopology: true };

mongoClient.connect(uri, config, (err, myMongoClient) => {
  if (err) {
    return `connection failed`;
  } else {
    console.log(`connection ok`);
  }
  InsertOne(myMongoClient);
  InsertMany(myMongoClient);
  // FindOne(myMongoClient);
  // FindAll(myMongoClient);
  // FindProjection(myMongoClient);
  // FindQuery(myMongoClient);
  // FindWithLimit(myMongoClient);
  // FindAndSort(myMongoClient);
  // DeleteOne(myMongoClient);
  // DeleteMany(myMongoClient);
  // UpdateOne(myMongoClient);
  // CreateCollection(myMongoClient);
  // DeleteCollection(myMongoClient);
});

// Insert One
function InsertOne(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");

  myCollection.insertOne({ name: "Xiaomi 9s", price: "25500" }, (err) => {
    if (err) console.log(`Data insert failed`);
    else console.log(`Data insertion ok`);
  });
}

// Insert Many
function InsertMany(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");
  const data = [
    { name: "Vivo V6", price: "27999" },
    { name: "Realme Mi7", price: "21000" },
    { name: "Xiaomi Max", price: "32000" },
  ];
  myCollection.insertMany(data, (err) => {
    if (err) console.log(`Data insert failed`);
    else console.log(`Data insert success`);
  });
}

// Find One
function FindOne(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");
  myCollection.findOne({ name: "Vivo V6" }, (err, result) => {
    if (err) console.log("Error! not found");
    else console.log(result);
  });
}

// Find All
function FindAll(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");
  myCollection.find().toArray((err, result) => {
    console.log(result);
  });
}

// Find Projection
function FindProjection(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");
  myCollection
    .find({}, { projection: { name: 1, price: 1, _id: 0 } })
    .toArray((err, data) => console.log(data));
}

// Find Query
function FindQuery(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");
  myCollection.find({ name: "iPhone 12" }).toArray((err, data) => {
    console.log(data);
  });
}

// Find With Limit
function FindWithLimit(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");
  myCollection
    .find({})
    .limit(3)
    .toArray((err, data) => console.log(data));
}

// Find and Sort
function FindAndSort(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");
  myCollection
    .find({})
    .sort({ price: -1 })
    .toArray((err, data) => {
      console.log(data);
    });
}

// Delete One
function DeleteOne(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");
  myCollection.deleteOne({ name: "Xiaomi Max" }, (err) => {
    if (err) console.log(`Data delete failed`);
    else console.log(`Data delete success`);
  });
}

// Delete Many
function DeleteMany(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");
  myCollection.deleteMany((err, obj) => {
    if (err) {
      console.log(`Delete failed`);
    } else {
      if (obj.deletedCount) {
        console.log(`Delete ${obj.deletedCount} item success`);
      } else {
        console.log(`No item available`);
      }
    }
  });
}

// Update One
function UpdateOne(myMongoClient) {
  const myCollection = myMongoClient.db("inventory").collection("product_desc");

  myCollection.updateOne(
    { name: "Realme Mi7" },
    { $set: { name: "Realme Mi Pro", price: "25000" } },
    (err, result) => {
      console.log(result);
      console.log(result.modifiedCount);
    }
  );
}

// Create Collection
function CreateCollection(myMongoClient) {
  const myDb = myMongoClient.db("inventory");
  myDb.createCollection("HBC", (err, result) => {
    console.log(err);
    console.log(result);
  });
}

// Delete Collection
function DeleteCollection(myMongoClient) {
  const myDb = myMongoClient.db("inventory");
  myDb.dropCollection("HBC", (err, result) => {
    if (err) console.log(`Delete failed!`);
    else console.log(`success `, result);
  });
}
