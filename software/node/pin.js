var gpio = require('rpi-gpio');

var PIN = function(pinToSetup){ 
gpio.setup(pinToSetup, gpio.DIR_OUT, this.write);
 
this.write = function() {
    gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}
return this;
}

module.exports = PIN;