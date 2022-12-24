const mongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://myUser:Abcd123456@cluster0.xrfjl.mongodb.net/school?retryWrites=true&w=majority`;

mongoClient.connect(url, (err, mngClient) => {
  if (err) console.log(`Connection failed`);
  else console.log(`Connected successfully`);
  //   insertDB(mngClient);
  //   deleteOneData(mngClient);
  //   deleteAll(mngClient);
  //   findOneItem(mngClient);
  //   findAll(mngClient);
  //   findWithProjection(mngClient);
  //   findWithQuery(mngClient);
  //   findWithLimit(mngClient);
  findWithSort(mngClient);
});

// Insert data
function insertDB(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.insertOne({ name: "Laravel", category: "Backend" }, (err) => {
    if (err) console.log("Data insert failed");
    else console.log("Data insert successfully");
  });
}

// Delete single data
function deleteOneData(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.deleteOne({ name: "React.js" }, (err) => {
    if (err) console.log(`Delete failed`);
    else console.log(`Delete successfully`);
  });
}

// Delete all data
function deleteAll(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.deleteMany((err, result) => {
    if (err) console.log(`Delete failed`);
    else console.log(`${result.deletedCount} item delete successfully`);
  });
}

// Find one
function findOneItem(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.findOne({}, (err, result) => {
    if (err) console.log("Not found");
    else console.log(result);
  });
}

// Find all
function findAll(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection.find().toArray((err, result) => {
    console.log(result);
  });
}

// Find with Projection
function findWithProjection(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection
    .find({}, { projection: { category: 1 } })
    .toArray((err, result) => {
      console.log(result);
    });
}

// Find with Query
function findWithQuery(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection
    .find({ category: "Framework", name: "Vue.js" })
    .toArray((err, result) => {
      console.log(result);
    });
}

// Find with limit
function findWithLimit(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection
    .find()
    .limit(3)
    .toArray((err, result) => {
      console.log(result);
    });
}

// Find with sort::
function findWithSort(mngClient) {
  const myCollection = mngClient.db("school").collection("student");
  myCollection
    .find()
    .sort({ name: -1 })
    .toArray((err, data) => {
      console.log(data);
    });
}
