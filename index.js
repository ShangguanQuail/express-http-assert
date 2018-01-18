var createError = require('http-errors');
var eql = require('deep-equal');

module.exports = expressAssert;

function expressAssert() {
    return function (req, res, next) {
        function assert(value, msg, opts, err) {
            if (value) return;
            if (err instanceof Error) {
                opts.error = err;
            }
            throw createError(500, msg, opts);
        }

        assert.equal = function (a, b, status, msg, opts, err) {
            assert(a == b, status, msg, opts, err);
        };

        assert.notEqual = function (a, b, status, msg, opts, err) {
            assert(a != b, status, msg, opts, err);
        };

        assert.strictEqual = function (a, b, status, msg, opts, err) {
            assert(a === b, status, msg, opts, err);
        };

        assert.notStrictEqual = function (a, b, status, msg, opts, err) {
            assert(a !== b, status, msg, opts, err);
        };

        assert.deepEqual = function (a, b, status, msg, opts, err) {
            assert(eql(a, b), status, msg, opts, err);
        };

        assert.notDeepEqual = function (a, b, status, msg, opts, err) {
            assert(!eql(a, b), status, msg, opts, err);
        };

        req.assert = assert;
        next();
    };
}