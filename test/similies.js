var assert = require('assert');
var evently = require('../index');


describe('evently.Dispatcher #removeEventListener #addListener #stopListening #removeAllEventListeners #trigger #emit', function () {
    it('should allow method names from popular libraries', function () {
        var a = evently.static;
        var aCount = 0;
        var aCounter = function () {
            aCount++;
        };

        a.addListener("a", aCounter);
        a.trigger("a");
        assert(aCount === 1);
        a.removeListener("a", aCounter);
        a.trigger("a");
        assert(aCount === 1);

        a.addEventListener("a", aCounter);
        a.emit("a");
        assert(aCount === 2);
        a.removeEventListener("a", aCounter);
        a.emit("a");
        assert(aCount === 2);

        a.on("a", aCounter);
        a.dispatch("a");
        assert(aCount === 3);
        a.stopListening();
        a.dispatch("a");
        assert(aCount === 3);

        a.on("a", aCounter);
        a.dispatch("a");
        assert(aCount === 4);
        a.removeAllEventListeners();
        a.dispatch("a");
        assert(aCount === 4);
    });
});

