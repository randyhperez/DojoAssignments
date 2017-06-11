/*
Modify your VehicleConstructor (from earlier) to use this & new (and follow the JS conventions talked about in the previous
*/

function VehicleConstructor1(name, num_wheels, num_passengers) {
  this.name = name;
  this.wheels = num_wheels;
  this.passengers = num_passengers;
  // Each vehicle should have a makeNoise method
  this.makeNoise = function () {
    console.log('VROOOOOOMM');
  }
}

// Using the constructor, create a Bike
var bike = new VehicleConstructor1('bike', 2, 1)

// Redefine the Bike’s makeNoise method to print “ring ring!”
bike.makeNoise = function () {
  console.log('ring ring');
}

// Create a Sedan
var sedan = new VehicleConstructor1('sedan', 4, 4)

// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
sedan.makeNoise = function () {
  console.log('honk honk');
}

// Using the constructor, create a Bus
var bus = new VehicleConstructor1('bus', 6, 0)

// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
bus.addPassengers = function (more_passengers) {
  this.passengers += more_passengers;
}
bus.addPassengers(10)


// Bonus: Use ES6 Class!
// Have the Vehicle constructor also take in a “speed”
// Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance traveled by speed
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled

class VehicleConstructor2 {
  constructor(name, num_wheels, num_passengers, speed) {
    var distance_travelled = 0;
    var self = this;
    function updateDistanceTravelled() {
      distance_travelled += self.speed;
    }
    this.name = name;
    this.wheels = num_wheels;
    this.passengers = num_passengers;
    this.speed = speed;
    this.makeNoise = function () {
      console.log('VROOOOOM');
    }
    this.move = function (){
      updateDistanceTravelled();
      this.makeNoise();
    }
    this.checkMiles = function () {
      console.log(distance_travelled);
    }
  }
}

var truck = new VehicleConstructor2('Truck', 4, 5, 50)
truck.move()
truck.checkMiles()
