const express = require('express')
const mongoose = require('mongoose')
const route1 = require("./routes/routes")

const app = express()
const PORT = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));  

// mongoose.connect('mongodb://localhost:27017/BCCI', 
// { useNewUrlParser: true }, 
// (err) => {
//     if (!err) { console.log('MongoDB Connection Succeeded.') }
//     else { console.log('Error in DB connection : ' + err) }
// });


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://chintan:chintan@123@cluster0.ovz1t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     console.log('MongoDB Connection Succeeded.')
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// mongodb+srv://chintanB:1234@cluster0.ovz1t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/RTO
mongoose.connect('mongodb+srv://chintanB:1234@cluster0.ovz1t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{ useNewUrlParser: true ,useUnifiedTopology: true}, 
(err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});


app.use("",route1)

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})