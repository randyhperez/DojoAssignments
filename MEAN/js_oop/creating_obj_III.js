// Modify your Vehicle Class to take advantage of Prototypes!

class VehicleConstructor {
  constructor(name, num_wheels, num_passengers, speed) {
    if (!(this instanceof VehicleConstructor)) {
      return new VehicleConstructor(name, num_wheels, num_passengers, speed)
    }
    var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
    // Create a private variable called distance_travelled that starts at 0
    this.distance_travelled = 0;
    this.name = name;
    this.wheels = num_wheels;
    this.passengers = num_passengers;
    this.speed = speed;
    this.vin = vinCreate();

    function vinCreate() {
      var vin = '';
      for (var vinNum = 0; vinNum < 18; vinNum++) {
        vin += chars[Math.floor(Math.random()*35)];
      }
      return vin;
    }
  }
}

VehicleConstructor.prototype.makeNoise = function () {
  console.log('VROOOM');
  return this;
}

// Create a private method called updateDistanceTravelled that increments distance traveled by speed
VehicleConstructor.prototype.updateDistanceTravelled = function () {
  this.distance_travelled += this.speed;
  return this;
}

// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
VehicleConstructor.prototype.move = function () {
  this.updateDistanceTravelled();
  this.makeNoise();
  return this;
}

// Add a method called checkMiles that console.logs the distance_travelled
VehicleConstructor.prototype.checkMiles = function (){
  console.log(this.distance_travelled);
  return this;
}

var bike = new VehicleConstructor('bike', 4, 1, 10)
bike.makeNoise()

var bus = new VehicleConstructor('bus', 6, 5, 50)
bus.addPassengers = function (newPassengers) {
  this.passengers += newPassengers;
  return this;
}
bus.addPassengers(10)
console.log(bus.passengers);
