exports.dispatcher = function () {
    var eventMap = {};

    function on(id, f) {
        off(id, f);
        (eventMap[id] || (eventMap[id] = [])).push(f);
    }

    function off(id, f) {
        var event, index;
        if ((event = eventMap[id]) && ~(index = event.indexOf(f))) {
            eventMap[id].splice(index, 1);
        }
    }

    function once(id, f) {
        on(id, function wrapped() {
            off(id, wrapped);
            f.apply(null, arguments);
        })
    }

    function dispatch(id) {
        var event, args;
        if (event = eventMap[id]){
            args = [].slice.call(arguments, 1);
            event.forEach(function (f) {
                f.apply(null, args);
            });
        }
    }

    this.on = on;
    this.once = once;
    this.off = off;
    this.dispatch = dispatch;
    this.trigger = dispatch;
};

var d = new exports.dispatcher();

function log(a, b) {
    console.log("triggered with " + a + " " + b);
}

d.on("a", log);
d.dispatch("a", 1, 2); // "triggered with 1 2"

d.on("b", log);
d.off("b", log);
d.dispatch("b", 3, 4); // no effect

d.once('c', log);
d.dispatch("c", 5, 6);
d.dispatch("c", 7, 8); // "triggered with 5 6"