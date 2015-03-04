var Thermostat = function() {
  this.temperature = 20
};

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature -= 1
};

Thermostat.prototype.minimumTemperature = function() {
  if(this.temperature < 10) this.temperature = 10;
    return true
};

