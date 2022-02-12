// connecting to database
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/students").then(() => {
    console.log("Connection Successful...")
}).catch(err => {
    console.log("Error Occured!")
})

// defining schema
const collect = new mongoose.Schema({
    name: String,
    Salery: Number,
    Designation: {
        type: String,
        default:"Teacher"
    }
})

// using model for collection
const TeachR = new mongoose.model("Teacher", collect);
