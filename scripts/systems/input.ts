/// <reference path='../entities.ts'/>
/// <reference path='../keys.ts'/>
/// <reference path='../time.ts'/>

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
    }
}
