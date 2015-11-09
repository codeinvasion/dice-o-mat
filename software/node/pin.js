var gpio = require('rpi-gpio');
var pin=null;

module.exports = {
	PIN: function(pin){
		gpio.setup(pin, gpio.DIR_OUT, write);
		this.pin = pin;
	},

	write: function(val){
		if(this.pin == null)
		{
			console.error("pin is not initialized");
			return;
		}
		gpio.write(this.pin, val, function(err){
			if (err) throw err;
		});
	}
}