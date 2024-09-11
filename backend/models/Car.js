const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  fuelType: { type: String, required: true },
  mileage: { type: Number, required: true },
  engineDisplacement: { type: Number, required: true },
  seats: { type: Number, required: true },
  image: { type: String, required: true },
  ratings: { type: Number, default: 0 },
});

module.exports = mongoose.model("Car", carSchema);
