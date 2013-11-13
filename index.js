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
        on(id, function wrapped() {
            off(id, wrapped);
            f.apply(null, arguments);
        })
    }

    function dispatch(id) {
        var eventMap, args;
        if (eventMap = eventMaps[id]) {
            args = [].slice.call(arguments, 1);
            eventMap.forEach(function (f) {
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