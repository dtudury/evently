evently
=======

simple js event-like function stacks


# evently

  simple js event-like function stacks

 [![Build Status](https://secure.travis-ci.org/visionmedia/commander.js.png)](http://travis-ci.org/visionmedia/commander.js)

## Installation

    $ npm install evently

## Usage

```js
var evently = require('evently');

var d = new evently.dispatcher();

function log(a) {
    console.log("triggered with " + a);
}

d.on("a", log);
d.dispatch("a", [1, 2]); // "triggered with 1,2"

d.on("b", log);
d.off("b", log);
d.dispatch("b", "three"); // no effect

d.once('c', log);
d.dispatch("c", 4); // "triggered with 4"
d.dispatch("c", {a:5, b:6});
```