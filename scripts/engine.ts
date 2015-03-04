/// <reference path='systems/move.ts'/>

function tick() {
    systems.move();
    window.requestAnimationFrame(tick);
}
window.requestAnimationFrame(tick);
