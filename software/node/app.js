var path = require("path"),
    rotat0r = new (require("./rotate.js"))([18, 23, 24, 25], 4096),
    bodyParser = require('body-parser'),
    express = require('express');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

router.post('/rotate', function (req, res) {
    rotat0r.rotate();
    res.json({message: 'rotating!'});
});

app.use('/api', router);

var server = app.listen(8080, function () {});
