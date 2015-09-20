"use strict";

var util = require('util');

var Controller = require('./Controller');

function TopDownController(obj){
    this._obj = obj;
}
util.inherits(TopDownController, Controller);

_.extend(TopDownController.prototype, {
    update: function(timeDelta){
        if (keys.w) {
            this._obj.position.y -= 1;
        }
        if (keys.s) {
            this._obj.position.y += 1;
        }
        if (keys.a) {
            this._obj.position.x -= 1;
        }
        if (keys.d) {
            this._obj.position.x += 1;
        }
    }
});

module.exports = TopDownController;
