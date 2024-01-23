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

const vehicle = {
  type: "AutoMobile",
  Wheels: 4,
  start: function () {
    console.log("Engine Started ");
  },
  stop: function () {
    console.log("Engine Stopped");
  },
};
const FourWheeler = Object.create(vehicle);
FourWheeler.brand = "audi";
FourWheeler.Model = "latest";
FourWheeler.drive = function () {
  console.log("Driving Four Wheelers");
};

const MyCar = Object.create(FourWheeler);
MyCar.owner = "john";
MyCar.number = "12345";

MyCar.start();
MyCar.drive();
MyCar.stop();
