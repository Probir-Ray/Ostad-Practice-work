
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:a123@456@cluster0.cmav171.mongodb.net?retryWrites=true&w=majority";
const config = {useUnifiedTopology: true};

MongoClient.connect(url, config, err => {
	if(err) {
		console.log('Connection Fail!');
	} else {
		console.log('Connection ok');
	}
});

