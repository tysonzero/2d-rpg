/// <reference path='systems/update-time.ts'/>
/// <reference path='systems/move.ts'/>
/// <reference path='systems/render.ts'/>
/// <reference path='systems/input.ts'/>

var engine = {
    time: performance.now(),
    tick: () => {
        var delta = Math.min((performance.now() - engine.time) / 1000, 0.05);
        engine.time = performance.now();
        systems.input(delta);
        systems.move(delta);
        systems.updateTime();
        systems.render();
        window.requestAnimationFrame(engine.tick);
    }
};
window.requestAnimationFrame(engine.tick);
