"use strict";

var Renderer = (function(global, PIXI){
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

    return Renderer;
})(window, PIXI);

var GameObject = (function(){
    function GameObject(){}
    GameObject.constructor = GameObject;

    GameObject.prototype.step = function(){};

    Object.defineProperties(GameObject.prototype, {})

    return GameObject;
})();

var Kerbal = (function(global, PIXI){
    function Kerbal(parent){
        this._model = new PIXI.Graphics();
        this._model
            .beginFill(0xbada55)
            .drawCircle(0, 0, 5)
            .endFill()
        ;
        parent.addChild(this._model);
    }
    Kerbal.constructor = Kerbal;
    Kerbal.prototype = Object.create(GameObject.prototype);

    Kerbal.prototype.step = function(){
        if (keys.w) {
            this.position.y -= 1;
        }
        if (keys.s) {
            this.position.y += 1;
        }
        if (keys.a) {
            this.position.x -= 1;
        }
        if (keys.d) {
            this.position.x += 1;
        }
    };

    Object.defineProperties(Kerbal.prototype, {
        position: {get: function(){ return this._model.position; }}
    });

    return Kerbal;
})(window, PIXI);

var Game = (function(global){
    var _instance = null;

    function Game(renderer){
        _instance = this;
        this._renderer = renderer;
        this._objects = [];
    }

    Object.defineProperties(Game, {
        instance: {get: function(){ return _instance; }}
    });

    Object.defineProperties(Game.prototype, {
        add: {value: function(obj){ this._objects.push(obj); return this; }},
        renderer: {get: function(){ return this._renderer; }},
        step: {value: function(){
            this._objects.forEach(function(obj){
                obj.step();
            });
            return this;
        }}
    });

    return Game;
})(window);

window.onload = function(){
    var renderer = new Renderer();
    var game = new Game(renderer);

    game.add(new Kerbal(renderer.root));

    function animate(){
        requestAnimationFrame(animate);
        game.step();
        renderer.render();
    }
    requestAnimationFrame(animate);
};

// window.onload = function(){
//     var root = new PIXI.Container();
//     var renderer = PIXI.autoDetectRenderer(800, 600);
//     document.getElementById('viewer').appendChild(renderer.view);
//
//     var circle = new PIXI.Graphics();
//     circle
//         .beginFill(0xbada55)
//         .drawCircle(100, 200, 50)
//         .endFill()
//     ;
//     root.addChild(circle);
//
//     requestAnimationFrame(animate);
//     function animate(){
//         requestAnimationFrame(animate);
//         renderer.render(root);
//     }
// };
