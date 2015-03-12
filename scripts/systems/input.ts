/// <reference path='../entities.ts'/>
/// <reference path='../time.ts'/>
/// <reference path='../keys.ts'/>

module systems {
    export function input() {
        var i: number;
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].input) {
                if (keys.down[entities[i].input.upKey]) {
                    entities[i].velocity.y -= time.delta * entities[i].input.acceleration;
                }
                if (keys.down[entities[i].input.downKey]) {
                    entities[i].velocity.y += time.delta * entities[i].input.acceleration;
                }
                if (keys.down[entities[i].input.leftKey]) {
                    entities[i].velocity.x -= time.delta * entities[i].input.acceleration;
                }
                if (keys.down[entities[i].input.rightKey]) {
                    entities[i].velocity.x += time.delta * entities[i].input.acceleration;
                }
            }
        }
        for (i = keys.clicked.length - 1; i >= 0; i--) {
            if (keys.clicked[i]) {
                keys.clicked[i] = 0;
            }
        }
        for (i = keys.released.length - 1; i >= 0; i--) {
            if (keys.released[i]) {
                keys.released[i] = 0;
            }
        }
    }
}
