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

// insert field in db
const shivam = new TeachR({
    name: "Shivam",
    Salery: 45000
})
const rahul = new TeachR({
    name: "Rahul",
    Salery: 60000
})
const ramit = new TeachR({
    name: "Ramit",
    Salery: 15000
})
const rishi = new TeachR({
    name: "Rishi",
    Salery: 50000
})

// save
// rishi.save()

// insert many
async function doinsert(){
    const res = await TeachR.insertMany([rahul, ramit, rishi]);
    console.log(res);
}
// doinsert()

// find
// async function dofind(){
//     const res = await TeachR.find({name:"Rishi",Salery:70000}).select({Designation:1});
//     console.log(res);
// }
async function dofind(){
    const res = await TeachR.find({ Salery: {$gt:50000} });
    console.log(res);
}

// dofind()

// Update
async function doupdate(_id) {

    const res = await TeachR.findByIdAndUpdate(_id, { $set: { Salery: 95000 } })
    console.log(res);
}
// doupdate("62073f5e7d67d8cfbcd7e46a")

// Delete
async function dodelete(_id){
    const res=await TeachR.findByIdAndDelete(_id)
}
dodelete("62075040dd31ef7b1401ef01")
