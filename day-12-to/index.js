const mongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://myUser:Abcd123456@cluster0.xrfjl.mongodb.net/school?retryWrites=true&w=majority`;
const config = { useUnifiedTopology: true };

mongoClient.connect(url, config, (err, myMongoClient) => {
  if (err) console.log(`Connection failed`);
  else console.log(`Connected successfully`);
  // insertData(myMongoClient);
  // deleteOneItem(myMongoClient);
  // deleteAll(myMongoClient);

  // Find
  // findOneWithoutCondition(myMongoClient);
  // findOneWithLogic(myMongoClient);
  // findAll(myMongoClient);
  // findProjection(myMongoClient);
  // findQuery(myMongoClient);
  // findWithLimit(myMongoClient);
  findAndSort(myMongoClient);
});

// Insert Data
function insertData(myMongoClient) {
  const myDb = myMongoClient.db("school");
  const myCollection = myDb.collection("student");
  myCollection.insertOne({ name: "Node.js", category: "Backend" }, (err) => {
    if (err) console.log(`Data insert failed`);
    else console.log(`Data inserted successfully`);
  });
}

// Delete One
function deleteOneItem(myMongoClient) {
  const myCollection = myMongoClient.db("school").collection("student");
  myCollection.deleteOne({ category: "Web Design" }, (err) => {
    if (err) console.log(`Data delete failed`);
    else console.log(`Data delete successfully`);
  });
}

// Delete All
function deleteAll(myMongoClient) {
  const myCollection = myMongoClient.db("school").collection("student");
  myCollection.deleteMany((err, result) => {
    if (err) console.log("Delete failed");
    else console.log(`Deleted ${result.deletedCount} items`);
  });
}

// Find one
function findOneWithoutCondition(myMongoClient) {
  const myCollection = myMongoClient.db("school").collection("student");
  myCollection.findOne({}, (err, result) => {
    if (err) console.log(`Not found`);
    else console.log(result);
  });
}

// Find one with logic
function findOneWithLogic(myMongoClient) {
  const myCollection = myMongoClient.db("school").collection("student");
  myCollection.findOne({ name: "PHP" }, (err, result) => {
    if (err) console.log(`Not found`);
    else console.log(result);
  });
}

function findAll(myMongoClient) {
  const myCollection = myMongoClient.db("school").collection("student");
  myCollection.find().toArray((err, result) => {
    console.log(result);
  });
}

function findProjection(myMongoClient) {
  const myCollection = myMongoClient.db("school").collection("student");
  const itemObj = {};
  const itemProjection = { projection: { category: 1 } };
  myCollection.find(itemObj, itemProjection).toArray((err, result) => {
    console.log(result);
  });
}

function findQuery(myMongoClient) {
  const myCollection = myMongoClient.db("school").collection("student");
  myCollection
    .find({ category: "Programming", name: "PHP" })
    .toArray((err, result) => {
      console.log(result);
    });
}

function findWithLimit(myMongoClient) {
  const myCollection = myMongoClient.db("school").collection("student");
  myCollection
    .find()
    .limit(15)
    .toArray((err, result) => {
      console.log(result);
    });
}

function findAndSort(myMongoClient) {
  const myCollection = myMongoClient.db("school").collection("student");
  myCollection
    .find()
    .sort({ name: -1 })
    .toArray((err, result) => {
      console.log(result);
    });
}
