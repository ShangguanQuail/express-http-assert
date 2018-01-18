var express = require('express');

var expressAssert = require('../index');

var app = express();

app.use(expressAssert());

app.post('/test', function (req, res, next) {
    req.assert(1 === 0, 'this is a error message!', {url: req.originalUrl, myMsg: 'this is my message.'});
});

app.post('/test2', function (req, res, next) {
    try {
        req.assert(1 === 0, 'this is a error message!', {url: req.originalUrl, myMsg: 'this is my message.'});
    } catch (e) {
        console.log(e);
    }
});

app.use(function (err, req, res, next) {

    if (!err) {
        err = new Error('Not Found');
        err.status = 404;
    }

    res.json({
        err: err || 404
    });
});

app.listen(5000, function (err) {
    if (err) {
        console.log(err);
    }
});