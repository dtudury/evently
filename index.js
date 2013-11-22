function Dispatcher() {


    this.off = this.removeListener = this.removeEventListener = function (id, f) {
        var map, index, maps = (this.maps || (this.maps = {}));
        if ((map = maps[id]) && ~(index = map.indexOf(f)))
            map.splice(index, 1);
    }


    this.on = this.addListener = this.addEventListener = function (id, f) {
        this.off(id, f);
        (this.maps[id] || (this.maps[id] = [])).push(f);
    }


    this.once = function (id, f) {
        var self = this;
        this.on(id, function wrapped(event) {
            self.off(id, wrapped);
            f(event);
        });
    }


    this.stop = this.stopListening = this.removeAllEventListeners = function (id) {
        if (this.maps && id)
            delete this.maps[id];
        else
            this.maps = {};
    }


    this.dispatch = this.trigger = this.emit = function (id, event) {
        var map;
        if (this.maps && (map = this.maps[id]))
            map.forEach(function (f) {
                f(event);
            });
    }


};


exports.Dispatcher = Dispatcher;
exports.static = new Dispatcher();
