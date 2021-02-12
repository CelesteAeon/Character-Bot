const mongoose = require('mongoose');
const cfg = require('../config.json');
const mongoURI = cfg.mgUri;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
    if(err) {
        throw err;
    } else if(!err) {
    console.log("We are connected!")};
});