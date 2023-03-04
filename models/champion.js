const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let championSchema = new Schema(
{
    name: {type: String},
    describtion: {type: String},
    region: {type: String},
    cost: {type: Number}
}    
);

module.exports = mongoose.model("champion", championSchema);
