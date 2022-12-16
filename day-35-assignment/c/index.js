
const express = require("express");
const app = express();

app.get('/download', (req, res) => {
    res.download('../img/google.jpg');
})


app.listen(3030, () => console.log(`Listening on port 3030`));