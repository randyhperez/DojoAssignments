/*
We are going to create our very own constructor. Create a VehicleConstructor
that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:
*/

function VehicleConstructor(name, num_wheels, num_passengers) {
  this.name = name;
  this.wheels = num_wheels;
  this.passengers = num_passengers;
  // Each vehicle should have a makeNoise method
  this.makeNoise = function () {
    console.log('VROOOOOOMM');
  }
}

// Using the constructor, create a Bike
var bike = new VehicleConstructor('bike', 2, 1)
bike.makeNoise()

// Redefine the Bike’s makeNoise method to print “ring ring!”
bike.makeNoise = function () {
  console.log('ring ring');
}
bike.makeNoise()

// Create a Sedan
var sedan = new VehicleConstructor('sedan', 4, 4)

// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
sedan.makeNoise = function () {
  console.log('honk honk');
}
sedan.makeNoise()


// Using the constructor, create a Bus
var bus = new VehicleConstructor('bus', 6, 0)

// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
bus.addPassengers = function (more_passengers) {
  this.passengers += more_passengers;
}
bus.addPassengers(10)
console.log(bus.passengers);
