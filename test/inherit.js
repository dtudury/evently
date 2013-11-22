var assert = require('assert');
var evently = require('../index');


describe('evently.Dispatcher', function () {
    it('should be inheritable without cross-talk', function () {
        var MyDispatcherClass = new Function();
        MyDispatcherClass.prototype = new evently.Dispatcher();
        var a = new MyDispatcherClass();
        var b = new MyDispatcherClass();
        var aCount = 0;
        var bCount = 0;
        a.on("x", function () {
            aCount++;
        });
        b.on("x", function () {
            bCount++;
        });
        a.trigger("x");
        assert(aCount === 1);
        assert(bCount === 0);
    });
});
