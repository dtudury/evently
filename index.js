exports.dispatcher = function () {
    var eventMaps = {};

    function on(id, f) {
        off(id, f);
        (eventMaps[id] || (eventMaps[id] = [])).push(f);
    }

    function off(id, f) {
        var eventMap, index;
        if ((eventMap = eventMaps[id]) && ~(index = eventMap.indexOf(f))) {
            eventMap.splice(index, 1);
        }
    }

    function once(id, f) {
        on(id, function wrapped(event) {
            off(id, wrapped);
            f(event);
        })
    }

    function dispatch(id, event) {
        var eventMap, args;
        if (eventMap = eventMaps[id]) {
            eventMap.forEach(function (f) {
                f(event);
            });
        }
    }

    this.on = on;
    this.once = once;
    this.off = off;
    this.dispatch = dispatch;
    this.trigger = dispatch;
};