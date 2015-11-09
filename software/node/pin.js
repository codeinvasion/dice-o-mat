
module.exports = {
	pin: null,
	PIN: function(pinToSetup){
    	var gpio = require('rpi-gpio');
		gpio.setup(pinToSetup, gpio.DIR_OUT, write);
		this.pin = pinToSetup;
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