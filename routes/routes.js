const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const Vehicles = require('../models/Vehicles');
const Owener = require('../models/Ownership');


router.get('/api/v1/user_owned_vechicles/:id', (req, res) => {

    var userid = req.params.id;
    Owener.find({ user_uuid: userid }).populate('vehicle_uuid',).
        exec(function (err, data) {
            if (err) {
                res.json({ messsage: err.message })
            } else {
                res.json(data);
            }
        });

});

router.get('/api/v1/vehicles', (req, res) => {
    Vehicles.find().populate('uuid').exec(function (err, data) {
        if (err) {
            res.json({ messsage: err.message })
        } else {
            res.json(data);
        }

    });
});




module.exports = router;