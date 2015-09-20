"use strict";

var _ = require('underscore');

var _instance = null;

function Game(renderer){
    _instance = this;
    this._renderer = renderer;
    this._objects = [];
}

Object.defineProperties(Game, {
    instance: {get: function(){ return _instance; }}
});

_.extend(Game.prototype, {
    add: function(obj){ this._objects.push(obj); return this; },
    step: function(timeDelta){
        this._objects.forEach(function(obj){
            obj.step(timeDelta);
        });
        return this;
    }
});

Object.defineProperties(Game.prototype, {
    renderer: {get: function(){ return this._renderer; }},
});

module.exports = Game;
