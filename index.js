exports.Dispatcher = function () {


    var self = this;
    var maps = {};


    function off(id, f) {
        var map, index;
        if ((map = maps[id]) && ~(index = map.indexOf(f)))
            map.splice(index, 1);
    }


    function on(id, f) {
        off(id, f);
        (maps[id] || (maps[id] = [])).push(f);
    }


    function once(id, f) {
        on(id, function wrapped(event) {
            off(id, wrapped);
            f(event);
        });
    }


    function stopListening(event) {
        if (event)
            delete maps[event];
        else
            maps = {};
    }


    function dispatch(id, event) {
        var map;
        if (map = maps[id])
            map.forEach(function (f) {
                f(event);
            });
    }


    self.on = on;
    self.addListener = on;
    self.once = once;
    self.off = off;
    self.removeEventListener = off;
    self.stopListening = stopListening;
    self.removeAllEventListeners = stopListening;
    self.dispatch = dispatch;
    self.trigger = dispatch;
    self.emit = dispatch;


};