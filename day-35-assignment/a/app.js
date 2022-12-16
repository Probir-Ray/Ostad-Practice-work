
const express = require("express");
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    const cityName = req.query.city;
    const userAgent = req.header(`User-Agent`);
    const data = JSON.stringify(req.body);
    const countryName = req.body.country;
    res.send(`City: ${cityName}, ${countryName}; User-Agent: ${userAgent}, ${data}`);
})


app.listen(3030, () => console.log(`Listening on port 3030`));