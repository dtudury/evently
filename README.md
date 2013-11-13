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
```