/// <reference path='systems/move.ts'/>
/// <reference path='systems/render.ts'/>

var time = performance.now();
function tick() {
    var delta = Math.min((performance.now() - time) / 1000, 0.05);
    time = performance.now();
    systems.move(delta);
    systems.render();
    window.requestAnimationFrame(tick);
}
window.requestAnimationFrame(tick);
