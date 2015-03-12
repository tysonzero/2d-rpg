/// <reference path='../entities.ts'/>
/// <reference path='../time.ts'/>

module systems {
    export function move() {
        var i: number;
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].position && entities[i].velocity) {
                entities[i].position.x += time.delta * entities[i].velocity.x;
                entities[i].position.y += time.delta * entities[i].velocity.y;
            }
        }
    }
}
