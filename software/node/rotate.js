var rotate = function (stepPins, stepsForRotataion) {
    var that = {};
    //use GPIO pin numbers
    var gpio = require("onoff").Gpio;
    var button = new gpio(4, 'in', 'both');

    var buttonPushed = false;

    button.watch(function (err, value) {
        value == 0 ? buttonPushed = true : buttonPushed = false;
    });

    var pinNumber = stepPins.length;
    var pins = [];
    var stepCounter = 0;
    var timeout = 0.1;
    var stepCount = 8;

    Seq = [];
    Seq[0] = [1, 0, 0, 0];
    Seq[1] = [1, 1, 0, 0];
    Seq[2] = [0, 1, 0, 0];
    Seq[3] = [0, 1, 1, 0];
    Seq[4] = [0, 0, 1, 0];
    Seq[5] = [0, 0, 1, 1];
    Seq[6] = [0, 0, 0, 1];
    Seq[7] = [1, 0, 0, 1];

    for (var i = 0; i < pinNumber; i++) {
        pins[i] = new gpio(stepPins[i], 'out');
    }
    var count = 0;
    var step = function () {
        for (var pin = 0; pin < 4; pin++) {
            if (Seq[stepCounter][pin] != 0) {
                pins[pin].writeSync(1);
            } else {
                pins[pin].writeSync(0);
            }
        }
        count++;
        stepCounter += 1;
        if (stepCounter == stepCount) {
            stepCounter = 0;
        }
        if (count <= stepsForRotataion)
            setTimeout(step, timeout);
        else return false;
    };

    that.rotate = function () {
        while (step()) {
        }
        count = 0;
    };

    return that;
};

module.exports = rotate;