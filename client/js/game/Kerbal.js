"use strict";

var _       = require('underscore');
var util    = require('util');

var GameObject          = require('../lib/GameObject');
var TopDownController   = require('../lib/controllers/TopDownController');

function Kerbal(parent){
    Kerbal.super_.call(this);
    this._model = new PIXI.Graphics();
    this._model
        .beginFill(0xbada55)
        .drawCircle(0, 0, 5)
        .endFill()
    ;
    parent.addChild(this._model);

    this._controller = new TopDownController(this);
}
util.inherits(Kerbal, GameObject);

_.extend(Kerbal.prototype, {
    step: function(timeDelta){
        this._controller.update(timeDelta);
    }
});

Object.defineProperties(Kerbal.prototype, {
    position: {get: function(){ return this._model.position; }}
});

module.exports = Kerbal;
