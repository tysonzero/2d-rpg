/// <reference path='systems/input.ts'/>
/// <reference path='systems/move.ts'/>
/// <reference path='systems/render.ts'/>
/// <reference path='systems/reset-context.ts'/>
/// <reference path='systems/reset-keys.ts'/>
/// <reference path='systems/update-time.ts'/>

var engine = {
    tick: () => {
        systems.updateTime();
        systems.input();
        systems.move();
        systems.resetContext();
        systems.render();
        systems.resetKeys();
        window.requestAnimationFrame(engine.tick);
    }
};
window.requestAnimationFrame(engine.tick);
