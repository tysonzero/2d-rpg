/// <reference path='../entities.ts'/>
/// <reference path='../keys.ts'/>
/// <reference path='../time.ts'/>

module systems {
    export function walk() {
        var i: number;
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].walk) {
                if (keys.down[entities[i].walk.keys.up]) {
                    entities[i].velocity.y -= time.delta * entities[i].walk.acceleration;
                }
                if (keys.down[entities[i].walk.keys.down]) {
                    entities[i].velocity.y += time.delta * entities[i].walk.acceleration;
                }
                if (keys.down[entities[i].walk.keys.left]) {
                    entities[i].velocity.x -= time.delta * entities[i].walk.acceleration;
                }
                if (keys.down[entities[i].walk.keys.right]) {
                    entities[i].velocity.x += time.delta * entities[i].walk.acceleration;
                }
            }
        }
    }
}
