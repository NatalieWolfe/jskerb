"use strict";

var Renderer    = require('./lib/Renderer');
var Game        = require('./lib/Game');
var Kerbal      = require('./game/Kerbal');

window.onload = function(){
    var renderer = new Renderer();
    var game = new Game(renderer);

    game.add(new Kerbal(renderer.root));

    var prevStart = Date.now();
    function animate(){
        requestAnimationFrame(animate);
        var thisStart = Date.now();
        game.step(thisStart - prevStart);
        renderer.render();
        prevStart = thisStart;
    }
    requestAnimationFrame(animate);
};
