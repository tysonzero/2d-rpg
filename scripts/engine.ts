/// <reference path='systems/update-time.ts'/>
/// <reference path='systems/move.ts'/>
/// <reference path='systems/render.ts'/>
/// <reference path='systems/input.ts'/>

var engine = {
    tick: () => {
        systems.updateTime();
        systems.input();
        systems.move();
        systems.render();
        window.requestAnimationFrame(engine.tick);
    }
};
window.requestAnimationFrame(engine.tick);
