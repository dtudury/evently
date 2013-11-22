var assert = require('assert');
var evently = require('../index');


describe('evently', function () {
    describe('#Dispatcher', function () {
        it('should fire events', function () {


            var dispatcher = new evently.Dispatcher();
            var aCount = 0;
            var bCount = 0;
            dispatcher.on("a", function () {
                aCount++;
            });
            dispatcher.on("b", function () {
                bCount++;
            });
            dispatcher.trigger("a");
            dispatcher.trigger("a");
            dispatcher.trigger("b");
            dispatcher.trigger("b");
            dispatcher.trigger("b");
            dispatcher.trigger("a");
            dispatcher.trigger("a");


            assert(aCount === 4);
            assert(bCount === 3);


        });
    });
    describe('#static', function () {
        it('should fire events', function () {


            var StaticDispatcher = evently.static;
            var aCount = 0;
            var bCount = 0;
            StaticDispatcher.on("a", function () {
                aCount++;
            });
            StaticDispatcher.on("b", function () {
                bCount++;
            });
            StaticDispatcher.trigger("a");
            StaticDispatcher.trigger("a");
            StaticDispatcher.trigger("b");
            StaticDispatcher.trigger("b");
            StaticDispatcher.trigger("b");
            StaticDispatcher.trigger("a");
            StaticDispatcher.trigger("a");


            assert(aCount === 4);
            assert(bCount === 3);


        });
    });
});

