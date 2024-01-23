// Instructions
// Prototypal Inheritance
// Level: 1
// Type: Implementation
// Avg Duration: 1 Hrs
// Problem Statement :-
// You have been appointed as senior developer in Tata’s R&D department. The engineers there are lazy, they don’t want to do everything from scratch whenever they create a new model. They expect you to help them create an inheritance model for the automobiles.

// Description :-
// Implement an inheritance model for four wheeler automobiles.
// Implement using both object.create() and constructor functions().
// Think of properties of what can be inherited.

function Vehicle() {
  this.type = "Automobile";
  this.wheels = 4;
}

Vehicle.prototype.start = function () {
  console.log("Engine started");
};

Vehicle.prototype.stop = function () {
  console.log("Engine stopped");
};

function FourWheeler(brand, model) {
  this.brand = brand;
  this.model = model;
}
FourWheeler.prototype = Vehicle.prototype;
FourWheeler.prototype.drive = function () {
  console.log("You Are Driving");
};
const myCar = new FourWheeler("audi", "Q4");
myCar.start();
myCar.drive();
myCar.stop();
