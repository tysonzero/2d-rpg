/// <reference path='systems/move.ts'/>
/// <reference path='systems/render.ts'/>

var engine = {
    time: performance.now(),
    tick: () => {
        var delta = Math.min((performance.now() - engine.time) / 1000, 0.05);
        engine.time = performance.now();
        systems.move(delta);
        systems.render();
        window.requestAnimationFrame(engine.tick);
    }
}
window.requestAnimationFrame(engine.tick);
