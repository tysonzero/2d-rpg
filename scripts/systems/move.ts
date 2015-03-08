/// <reference path='../entities.ts'/>

module systems {
    export function move(delta: number) {
        var i;
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i].position && entities[i].velocity) {
                entities[i].position.x += delta * entities[i].velocity.x;
                entities[i].position.y += delta * entities[i].velocity.y;
            }
        }
    }
}
