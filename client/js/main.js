"use strict";

window.onload = function(){
    var platforms = null;
    var kerb = null;
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'viewer', {
        preload: function(){},
        create: function(){
            kerb = game.add.graphics(0, 0);
            kerb
                .beginFill(0xbada55)
                .drawCircle(10, 10, 10)
                .endFill()
            ;
        },
        update: function(){
            if (keys.w) {
                kerb.position.y -= 1;
            }
            if (keys.s) {
                kerb.position.y += 1;
            }
            if (keys.a) {
                kerb.position.x -= 1;
            }
            if (keys.d) {
                kerb.position.x += 1;
            }
        }
    });
}

// var Renderer    = require('./lib/Renderer');
// var Game        = require('./lib/Game');
// var Kerbal      = require('./game/Kerbal');
//
// window.onload = function(){
//     var renderer = new Renderer();
//     var game = new Game(renderer);
//
//     game.add(new Kerbal(renderer.root));
//
//     var prevStart = Date.now();
//     function animate(){
//         requestAnimationFrame(animate);
//         var thisStart = Date.now();
//         game.step(thisStart - prevStart);
//         renderer.render();
//         prevStart = thisStart;
//     }
//     requestAnimationFrame(animate);
// };
