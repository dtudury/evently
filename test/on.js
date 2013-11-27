var assert = require('assert');
var sinon = require('sinon');
var evently = require('../index');


describe('evently', function () {
    describe('Dispatcher', function () {
        describe('#on', function () {
            it('should fire events', function () {
                var dispatcher = new evently.Dispatcher();
                var aCount = 0;
                var bCount = 0;
                var aCounter = sinon.spy();
                var bCounter = sinon.spy();
                dispatcher.on("a", aCounter);
                dispatcher.on("b", bCounter);
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                dispatcher.trigger("b");
                dispatcher.trigger("b");
                dispatcher.trigger("b");
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                assert.equal(aCounter.callCount, 4);
                assert.equal(bCounter.callCount, 3);
            });
        });
    });
});

