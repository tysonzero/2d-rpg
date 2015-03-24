/// <reference path='systems/collide.ts'/>
/// <reference path='systems/move.ts'/>
/// <reference path='systems/render.ts'/>
/// <reference path='systems/reset-context.ts'/>
/// <reference path='systems/reset-keys.ts'/>
/// <reference path='systems/reset-mouse.ts'/>
/// <reference path='systems/update-time.ts'/>
/// <reference path='systems/walk.ts'/>

function engine() {
    systems.updateTime();
    systems.walk();
    systems.move();
    systems.collide();
    systems.resetContext();
    systems.render();
    systems.resetKeys();
    systems.resetMouse();
    window.requestAnimationFrame(engine);
}
window.requestAnimationFrame(engine);
