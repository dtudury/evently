var assert = require('assert');
var sinon = require('sinon');
var evently = require('../index');


describe('evently', function () {
    describe('Dispatcher', function () {
        describe('#stop', function () {
            it('should stop events firing', function () {
                var dispatcher = new evently.Dispatcher();
                var aCounter = sinon.spy();
                var bCounter = sinon.spy();
                dispatcher.on("a", aCounter);
                dispatcher.on("b", bCounter);
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                dispatcher.trigger("b");
                dispatcher.stop("a");
                dispatcher.trigger("b");
                dispatcher.trigger("b");
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                assert.equal(aCounter.callCount, 2);
                assert.equal(bCounter.callCount, 3);
            });
        });
    });
    describe('static', function () {
        describe('#stop', function () {
            it('should stop events firing', function () {
                var StaticDispatcher = evently.static;
                var aCounter = sinon.spy();
                var bCounter = sinon.spy();
                StaticDispatcher.on("a", aCounter);
                StaticDispatcher.on("b", bCounter);
                StaticDispatcher.trigger("a");
                StaticDispatcher.trigger("a");
                StaticDispatcher.trigger("b");
                StaticDispatcher.stop();
                StaticDispatcher.trigger("b");
                StaticDispatcher.trigger("b");
                StaticDispatcher.trigger("a");
                StaticDispatcher.trigger("a");
                assert.equal(aCounter.callCount, 2);
                assert.equal(bCounter.callCount, 1);
            });
        });
    });
});



