const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    landf: String,
    title: String,
    type: String,
    description: String,
    location: String,
    date: Date,
    photo: String,
    contact: String,
    name : String,
    email : String
});

const Item = mongoose.model('Item', itemSchema);

const itemSchema2 = new mongoose.Schema({
    id: String,
    description: String,
    phone: String
});
const Item2 = mongoose.model('Item2', itemSchema2);

module.exports = {Item, Item2};