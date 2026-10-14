const mongoose = require('mongoose');

//The URL which will be queried. Run "mongod.exe" for this to connect
//var url = 'mongodb://localhost:27017/test';
mongoose.Promise = global.Promise;

const mongoDB_Games = 'mongodb://localhost:27017/Football_Data';
connection = mongoose.connect(mongoDB_Games, {
    checkServerIdentity: false,
    family: 4
})
    .then(() => {
        console.log('connection to mongodb worked!' + mongoDB_Games);
    })
    .catch((error) => {
        console.log('connection to mongodb did not work! ' + mongoDB_Games + JSON.stringify(error));
    })

module.exports = connection;