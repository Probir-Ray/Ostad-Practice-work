const URL = require("url");
const myUrl = "https://www.bbc.com/bengali";
const mUrl = URL.parse(myUrl, true);

console.log(mUrl);
console.log(`Host: ${mUrl.host}`);
console.log(`Hostname: ${mUrl.hostname}`);
console.log(`Link: ${mUrl.href}`);
console.log(`Protocol: ${mUrl.protocol}`);
