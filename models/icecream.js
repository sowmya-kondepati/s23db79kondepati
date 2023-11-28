const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
icecream_flavours: String,
icecream_price: {
    type: Number,
    min: 10,
    max: 100, 
    required: true
  },
icecream_quantity: {
    type: Number,
    min: 50,
    max: 200, 
    required: true
  }
})
module.exports = mongoose.model("icecream",
icecreamSchema)