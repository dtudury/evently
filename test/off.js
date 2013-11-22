var assert = require('assert');
var sinon = require('sinon');
var evently = require('../index');


describe('evently', function () {
    describe('Dispatcher', function () {
        describe('#off', function () {
            it('should stop events firing', function () {
                var dispatcher = new evently.Dispatcher();
                var aCounter = sinon.spy();
                var bCounter = sinon.spy();
                dispatcher.on("a", aCounter);
                dispatcher.on("b", bCounter);
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                dispatcher.trigger("b");
                dispatcher.off("a", aCounter);
                dispatcher.off("b", bCounter);
                dispatcher.trigger("b");
                dispatcher.trigger("b");
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                assert.equal(aCounter.callCount, 2);
                assert.equal(bCounter.callCount, 1);
            });
        });
    });
    describe('static', function () {
        describe('#off', function () {
            it('should stop events firing', function () {
                var StaticDispatcher = evently.static;
                var aCounter = sinon.spy();
                var bCounter = sinon.spy();
                StaticDispatcher.on("a", aCounter);
                StaticDispatcher.on("b", bCounter);
                StaticDispatcher.trigger("a");
                StaticDispatcher.trigger("a");
                StaticDispatcher.trigger("b");
                StaticDispatcher.off("a", aCounter);
                StaticDispatcher.off("b", new Function());
                StaticDispatcher.trigger("b");
                StaticDispatcher.trigger("b");
                StaticDispatcher.trigger("a");
                StaticDispatcher.trigger("a");
                assert.equal(aCounter.callCount, 2);
                assert.equal(bCounter.callCount, 3);
            });
        });
    });
});


