var setup = {
	'A': 18,
	'B': 23,
	'C': 24,
	'D': 25
}


var gpio = require('rpi-gpio');
var pinLib = require('./pin');
var pins = {};
for(value in setup){
	pins[value] = new pinLib(setup[value]);
	pins[value].write(false);
}

console.log(pins);
