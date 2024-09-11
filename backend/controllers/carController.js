const Car = require("../models/Car");

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cars" });
  }
};

exports.createCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(400).json({ message: "Error creating car" });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedCar);
  } catch (error) {
    res.status(400).json({ message: "Error updating car" });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting car" });
  }
};
