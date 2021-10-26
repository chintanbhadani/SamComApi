const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const vehiclesSchema = new mongoose.Schema({
    uuid: { 
        type: ObjectId, ref: 'User' 
    },
    vehicle_name: {
        type: String,
        // required: true
    },
    vehicle_brand: {
        type: String,
        // required:true
    },
    vehicle_number: {
        type: String,
        // required: true,
    },
    
});

module.exports = mongoose.model("Vehicles", vehiclesSchema);


// b) Vehicles Table
// - uuid
// - vehicle_name
// - vehicle_brand
// - vehicle_number