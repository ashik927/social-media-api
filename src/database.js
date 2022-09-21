const mongoose = require("mongoose");

const HOST = process.env.MONGODB_HOST || "localhost";
const DATABASE = process.env.MONGODB_DATABASE || "kx-fulfillment";

const uri = `mongodb://${HOST}:27017/${DATABASE}`;
const options = { 
    useUnifiedTopology: true,
    useNewUrlParser: true
};

connectWithDb = () => {
    mongoose.connect(uri, options, (err, db) => {
        if (err) console.error(err);
        else console.log("Connection established with database");
    });
};

module.exports = connectWithDb;
