/// <reference path='../entities.ts'/>
/// <reference path='../keys.ts'/>
/// <reference path='../time.ts'/>

module systems {
    export function walk() {
        var i: number;
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].walk) {
                if (keys.down[entities[i].walk.upKey]) {
                    entities[i].velocity.y -= time.delta * entities[i].walk.acceleration;
                }
                if (keys.down[entities[i].walk.downKey]) {
                    entities[i].velocity.y += time.delta * entities[i].walk.acceleration;
                }
                if (keys.down[entities[i].walk.leftKey]) {
                    entities[i].velocity.x -= time.delta * entities[i].walk.acceleration;
                }
                if (keys.down[entities[i].walk.rightKey]) {
                    entities[i].velocity.x += time.delta * entities[i].walk.acceleration;
                }
            }
        }
    }
}
