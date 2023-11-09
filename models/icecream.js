const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
icecream_flavours: String,
icecream_price: Number,
icecream_quantity: Number
})
module.exports = mongoose.model("icecream",
icecreamSchema)