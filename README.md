# express-http-assert

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Assert middleware with http error status codes and extra message for Express.

###install

```
npm install express-http-assert --save
```

###req.assert(value[, message, opts, err])

- value Bool
- message String
- opts Object
- err Error

this is a demo:

```
var express = require('express');
var expressAssert = require('express-http-assert');

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
        err: err
    });
});

app.listen(5000, function () {
if (err) {
        console.log(err);
    }
});
```

## Licence

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-http-assert.svg
[npm-url]: https://npmjs.org/package/express-http-assert
[node-version-image]: https://img.shields.io/node/v/express-http-assert.svg
[node-version-url]: https://nodejs.org/en/download/
[travis-image]: https://img.shields.io/travis/jshttp/express-http-assert/master.svg
[travis-url]: https://travis-ci.org/jshttp/express-http-assert
[coveralls-image]: https://img.shields.io/coveralls/jshttp/express-http-assert/master.svg
[coveralls-url]: https://coveralls.io/r/jshttp/express-http-assert
[downloads-image]: https://img.shields.io/npm/dm/express-http-assert.svg
[downloads-url]: https://npmjs.org/package/express-http-assert
