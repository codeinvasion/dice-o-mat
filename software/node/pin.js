var gpio = require('rpi-gpio');

var PIN = function(pinToSetup){
	gpio.setup(pinToSetup, gpio.DIR_OUT, this.write);

	this.pin = pinToSetup;
	this.write = function(val){
		if(this.pin == null)
		{
			console.error("pin is not initialized");
			return;
		}

		if(val == undefined || val == null){
			return;
		}

		gpio.write(this.pin, val, function(err){
			if (err) throw err;
		});
	}

	return this;
}

module.exports = PIN;