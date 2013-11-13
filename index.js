exports.dispatcher = function () {
    var eventMap = {};

    function on(id, f) {
        off(id, f);
        (eventMap[id] = eventMap[id] || []).push(f);
    }

    function off(id, f) {
        var event, index;
        if ((event = eventMap[id]) && ~(index = event.indexOf(f))) {
            eventMap[id].splice(index, 1);
        }
    }

    function once(id, f) {
        var wrapped;
        on(id, wrapped = function() {
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
};