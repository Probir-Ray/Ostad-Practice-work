const fs = require("fs");

// Asynchronous :: Read File.
fs.readFile("n.txt", "utf-8", (err, data) => {
  if (err) console.log(`not found`);
  else console.log(data);
});

// Synchronous :: Read File.
const data = fs.readFileSync("n.txt", "utf-8");
if (data) console.log(data);
else console.log(`Error! file not found`);

// Asynchronous :: Write File.
fs.writeFile(
  "drd.txt",
  "hello lorem ipsum dolr amet sit 🏆🏆🏆🥌🃏🎯🏏🎲",
  (err, data) => {
    if (err) console.log(`failed`);
    else console.log("File created");
  }
);
