/// <reference path='systems/move.ts'/>
/// <reference path='systems/render.ts'/>

function tick() {
    systems.move();
    systems.render();
    window.requestAnimationFrame(tick);
}
window.requestAnimationFrame(tick);
