var app = require('../app');
var request = require('supertest');
var test = require('ava');

test.cb('assert test', function (t) {
    t.plan(1);

    request(app)
        .post('/test')
        .expect(200, function (err, res) {
            var body = res.body
            t.deepEqual(body, {
                "err": {
                    "message": "this is a error message!",
                    "url": "/test",
                    "myMsg": "this is my message."
                }
            });
            t.end();
        });
});