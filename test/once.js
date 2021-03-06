var assert = require('assert');
var sinon = require('sinon');
var evently = require('../index');


describe('evently', function () {
    describe('Dispatcher', function () {
        describe('#once', function () {
            it('should fire once', function () {
                var dispatcher = new evently.Dispatcher();
                var aCounter = sinon.spy();
                var bCounter = sinon.spy();
                dispatcher.once("a", aCounter);
                dispatcher.once("b", bCounter);
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                dispatcher.trigger("b");
                dispatcher.trigger("b");
                dispatcher.trigger("b");
                dispatcher.trigger("a");
                dispatcher.trigger("a");
                assert(aCounter.calledOnce);
                assert(bCounter.calledOnce);
            });
        });
    });
});



