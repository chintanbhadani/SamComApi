const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const userSchema = new mongoose.Schema({
    uuid: {
        type: String,
        // required: true
    },
    name: {
        type: String,
        // required: true
    },
    surname: {
        type: String,
        // required:true
    },
    email: {
        type: String,
        // required: true,
    },
    phone: {
        type: Number,
        // require: true
    },
    location: 
        {
        lat: String,
        long: String
    },

});

module.exports = mongoose.model("User", userSchema);


// a) User table
// - uuid
// - name
// - surname
// - email
// - phone
// - location => latitude, longitude


