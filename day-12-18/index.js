const mongoClient = require("mongodb").MongoClient;
const url = `mongodb://127.0.0.1:27017`;
const config = { useUnifiedTopology: true };
mongoClient.connect(url, config, (err, mngClinet) => {
  if (err) {
    console.log(`Database connection failed`);
  } else {
    console.log(`Database connection successfully`);
    InsertOne(mngClinet);
  }
});

function InsertOne(mngClinet) {
  const myCollection = mngClinet.db("employee").collection("support_employee");
  myCollection.insertOne(
    {
      name: "Khaja",
      designation: "Juinor Engineer",
      Salary: 18500,
      joining: "1/2/2022",
    },
    (err) => {
      if (err) console.log(`Not save`);
      else console.log(`Save successfully`);
    }
  );
}
