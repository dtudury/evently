var assert = require('assert');
var evently = require('../index');


describe('evently', function () {
    describe('Dispatcher', function () {
        describe('#stop', function () {
            it('should stop events firing', function () {
                var dispatcher = new evently.Dispatcher();
                var aCount = 0;
                var bCount = 0;
                var aCounter = function () {
                    aCount++;
                }
                var bCounter = function () {
                    bCount++;
                }
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
                assert(aCount === 2);
                assert(bCount === 3);
            });
        });
    });
    describe('static', function () {
        describe('#stop', function () {
            it('should stop events firing', function () {
                var StaticDispatcher = evently.static;
                var aCount = 0;
                var bCount = 0;
                var aCounter = function () {
                    aCount++;
                }
                var bCounter = function () {
                    bCount++;
                }
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
                assert(aCount === 2);
                assert(bCount === 1);
            });
        });
    });
});



