"use strict";

var _instance = null;
function Renderer(){
    _instance = this;
    this._root = new PIXI.Container();
    this._renderer = PIXI.autoDetectRenderer(800, 600);
    document.getElementById('viewer').appendChild(this._renderer.view);
}

Object.defineProperties(Renderer, {
    instance: {get: function(){ return _instance; }}
});

Object.defineProperties(Renderer.prototype, {
    render: {value: function(){ this._renderer.render(this._root); }},
    root: {get: function(){ return this._root; }}
});

module.exports = Renderer;
