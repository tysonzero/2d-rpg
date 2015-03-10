/// <reference path='../entities.ts'/>
/// <reference path='../singletons/keys.ts'/>

window.addEventListener('keydown', function (event) {
    if (!singletons.keys[event.keyCode]) {
        singletons.keys[event.keyCode] = {
            down: true,
            clicked: 1,
            released: 0
        }
    }
    singletons.keys[event.keyCode].clicked++;
    singletons.keys[event.keyCode].down = true;
});

window.addEventListener('keyup', function (event) {
    if (!singletons.keys[event.keyCode]) {
        singletons.keys[event.keyCode] = {
            down: false,
            clicked: 0,
            released: 1
        }
    }
    singletons.keys[event.keyCode].released++;
    singletons.keys[event.keyCode].down = false;
});

module systems {
    export function input(delta: number) {
        var i: number;
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].input) {
                var downKey = singletons.keys[entities[i].input.upKey],
                    upKey = singletons.keys[entities[i].input.downKey],
                    leftKey = singletons.keys[entities[i].input.leftKey],
                    rightKey = singletons.keys[entities[i].input.rightKey];
                if (downKey && downKey.down) {
                    entities[i].velocity.y -= delta * entities[i].input.acceleration;
                }
                if (upKey && upKey.down) {
                    entities[i].velocity.y += delta * entities[i].input.acceleration;
                }
                if (leftKey && leftKey.down) {
                    entities[i].velocity.x -= delta * entities[i].input.acceleration;
                }
                if (rightKey && rightKey.down) {
                    entities[i].velocity.x += delta * entities[i].input.acceleration;
                }
            }
        }
        for (i = singletons.keys.length - 1; i >= 0; i--) {
            if (singletons.keys[i]) {
                singletons.keys[i].clicked = 0;
                singletons.keys[i].released = 0;
            }
        }
    }
}
