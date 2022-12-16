const mongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://myUser:Asp123456@cluster0.xrfjl.mongodb.net/employee?retryWrites=true&w=majority`;
const config = { useUnifiedTopology: true };
mongoClient.connect(url, config, (err, mngClient) => {
  if (err) console.log("Connection failed");
  else {
    console.log("Database connection ok");
    // InsertOne(mngClient);
    // InsertMany(mngClient);
    // DeleteOne(mngClient);
    // DeleteMany(mngClient);

    // FindWithoutLogic(mngClient);
    // FindAll(mngClient);
    // FindProjection(mngClient);
    // FindQuery(mngClient);
    // UpdateOne(mngClient);

    // createMyCollection(mngClient);
    DropMyCollection(mngClient);
  }
});

// Insert Item
function InsertOne(mngClient) {
  const myCollection = mngClient.db("employee").collection("support_employee");
  myCollection.insertOne(
    {
      id: 115,
      name: "Kabir",
      designation: "Techinian",
      salary: "14000",
    },
    (err) => {
      if (err) {
        console.log(`Data insert failed`);
      } else {
        console.log(`Data store successfully`);
      }
    }
  );
}

function InsertMany(mngClient) {
  const myCollection = mngClient.db("employee").collection("support_employee");
  myCollection.insertMany(
    [
      {
        id: 113,
        name: "Mehrab",
        designation: "Techinian",
        salary: "11500",
      },
      {
        id: 52,
        name: "Nirjhor",
        designation: "Engineer",
        salary: "35000",
      },
    ],
    (err) => {
      if (err) return `Data insertion failed`;
      else {
        console.log(`Data inserted successfully`);
      }
    }
  );
}

// Delete One
function DeleteOne(mngClient) {
  const myCollection = mngClient.db("employee").collection("support_employee");
  myCollection.deleteOne({ id: 133 }, (err) => {
    if (err) console.log(`Delete failed`);
    else console.log("Delete successfully");
  });
}

// Delete All
function DeleteMany(mngClient) {
  const myCollection = mngClient.db("employee").collection("support_employee");
  myCollection.deleteMany((err, result) => {
    if (err) {
      console.log("Delete failed");
    } else {
      console.log(result.deletedCount, `item delete successfully`);
    }
  });
}

// Find Item
function FindWithoutLogic(mngClient) {
  const myCollection = mngClient.db("employee").collection("support_employee");
  myCollection.findOne({ designation: "Techinian" }, (err, result) => {
    if (err) {
      console.log("Not Found");
    } else {
      console.log(result);
    }
  });
}

// Find all item and limit and sorting
function FindAll(mngClient) {
  const myCollection = mngClient.db("employee").collection("support_employee");
  myCollection
    .find()
    .limit(3)
    .sort({ salary: -1 })
    .toArray((err, data) => {
      console.log(data);
    });
}

// Find Projection
function FindProjection(mngClient) {
  const myCollection = mngClient.db("employee").collection("support_employee");
  myCollection
    .find({}, { projection: { name: 1, salary: 1 } })
    .toArray((err, data) => {
      console.log(data);
    });
}

// Query
function FindQuery(mngClient) {
  const myCollection = mngClient.db("employee").collection("support_employee");
  myCollection.find({ designation: "Techinian" }).toArray((err, data) => {
    console.log(data);
  });
}

// Update
function UpdateOne(mngClient) {
  const myCollection = mngClient.db("employee").collection("support_employee");
  myCollection.updateOne(
    { id: 113 },
    { $set: { salary: 13999, designation: "Support" } },
    (err, data) => {
      console.log(data.modifiedCount);
    }
  );
}

// Create Collection
function createMyCollection(mngClient) {
  const myDb = mngClient.db("employee");
  myDb.createCollection("admin_section", (err, result) => {
    console.log(result);
  });
}

// Delete Collection
function DropMyCollection(mngClient) {
  const myDb = mngClient.db("employee");
  myDb.dropCollection("admin_section", (err, result) => {
    if (result) console.log("Collection delete successfully");
    else console.log("Collection delete failed");
  });
}
