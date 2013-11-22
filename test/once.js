var assert = require('assert');
var evently = require('../index');


describe('evently', function () {
    describe('Dispatcher', function () {
        describe('#once', function () {
            it('should fire once', function () {
                var dispatcher = new evently.Dispatcher();
                var aCount = 0;
                var bCount = 0;
                var aCounter = function () {
                    aCount++;
                }
                var bCounter = function () {
                    bCount++;
                }
                dispatcher.once("a", aCounter);
                dispatcher.once("b", bCounter);
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                dispatcher.trigger("b");
                dispatcher.trigger("b");
                dispatcher.trigger("b");
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                assert(aCount === 1);
                assert(bCount === 1);
            });
        });
    });
    describe('static', function () {
        describe('#once', function () {
            it('should fire once', function () {
                var StaticDispatcher = evently.static;
                var aCount = 0;
                var bCount = 0;
                var aCounter = function () {
                    aCount++;
                }
                var bCounter = function () {
                    bCount++;
                }
                StaticDispatcher.once("a", aCounter);
                StaticDispatcher.once("b", bCounter);
                StaticDispatcher.trigger("a");
                StaticDispatcher.trigger("a");
                StaticDispatcher.trigger("b");
                StaticDispatcher.trigger("b");
                StaticDispatcher.trigger("b");
                StaticDispatcher.trigger("a");
                StaticDispatcher.trigger("a");
                assert(aCount === 1);
                assert(bCount === 1);
            });
        });
    });
});



