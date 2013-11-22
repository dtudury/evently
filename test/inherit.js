var assert = require('assert');
var sinon = require('sinon');
var evently = require('../index');


describe('evently.Dispatcher', function () {
    it('should be inheritable without cross-talk', function () {
        var MyDispatcherClass = new Function();
        MyDispatcherClass.prototype = new evently.Dispatcher();
        var a = new MyDispatcherClass();
        var b = new MyDispatcherClass();
        var aCounter = sinon.spy();
        var bCounter = sinon.spy();
        a.on("x", aCounter);
        b.on("x", bCounter);
        a.trigger("x");
        assert(aCounter.calledOnce);
        assert(!bCounter.called);
    });
});
