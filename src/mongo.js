const MongoClient = require('mongodb').MongoClient;
const mongoURI = require('./mongo.json').mgUri;

MongoClient.connect(mongoURI, { useUnifiedTopology: true }, function(err, db) {
    if(!err) {
        console.log("We are connected!")
    } else if(err) {
        throw err;
    }
}  );