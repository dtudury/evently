var assert = require('assert');
var sinon = require('sinon');
var evently = require('../index');


describe('evently.Dispatcher #removeEventListener #addListener #stopListening #removeAllEventListeners #trigger #emit', function () {
    it('should allow method names from popular libraries', function () {
        var a = new evently.Dispatcher();
        var counter = sinon.spy();

        a.addListener("a", counter);
        a.trigger("a");
        assert(counter.calledOnce);
        a.removeListener("a", counter);
        a.trigger("a");
        assert(counter.calledOnce);

        a.addEventListener("a", counter);
        a.emit("a");
        assert.equal(counter.callCount, 2);
        a.removeEventListener("a", counter);
        a.emit("a");
        assert.equal(counter.callCount, 2);

        a.on("a", counter);
        a.dispatch("a");
        assert.equal(counter.callCount, 3);
        a.stopListening();
        a.dispatch("a");
        assert.equal(counter.callCount, 3);

        a.on("a", counter);
        a.dispatch("a");
        assert.equal(counter.callCount, 4);
        a.removeAllEventListeners();
        a.dispatch("a");
        assert.equal(counter.callCount, 4);
    });
});

