var PIN = function(pinToSetup){
   	var gpio = require('rpi-gpio');
	gpio.setup(pinToSetup, gpio.DIR_OUT, this.write);

	this.pin = pinToSetup;
	this.write = function(val){
		if(this.pin == null)
		{
			console.error("pin is not initialized");
			return;
		}

console.log(this.pin);

		gpio.write(this.pin, val, function(err){
			if (err) throw err;
		});
	}

	return this;
}


module.exports = PIN;