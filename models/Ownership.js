const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const ownerSchema = new mongoose.Schema({
    uuid: {
        type: String,
        // required: true
    },
    vehicle_uuid: 
        { type: ObjectId, ref: 'Vehicles' },
        
    user_uuid: {
        type: String,
        // required:true
    },
    createdAt: {
        type: Date,
        // required: true,
    },
    isDeleted: {
        type: Boolean,
        // require: true
    },
    
});

module.exports = mongoose.model("Owner", ownerSchema);


// c) Vehicle ownership Table (User requested for vehicles and user can be owner)
// - uuid
// - vehicle_uuid
// - user_uuid

// - createdAt

// - isDeleted