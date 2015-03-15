/// <reference path='../entities.ts'/>
/// <reference path='../keys.ts'/>
/// <reference path='../time.ts'/>

module systems {
    export function walk() {
        var i: number;
        var up: number;
        var down: number;
        var left: number;
        var right: number;
        var desired: {x: number; y: number};
        var change: {x: number; y: number};
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].walk) {
                up = keys.down[entities[i].walk.keys.up] ? 1 : 0;
                down = keys.down[entities[i].walk.keys.down] ? 1 : 0;
                left = keys.down[entities[i].walk.keys.left] ? 1 : 0;
                right = keys.down[entities[i].walk.keys.right] ? 1 : 0;
                desired = {
                    x: (right - left) * ((down - up) ? Math.sqrt(2) / 2 : 1),
                    y: (down - up) * ((right - left) ? Math.sqrt(2) / 2 : 1)
                };
                desired.x *= entities[i].walk.speed;
                desired.y *= entities[i].walk.speed;
                change = {
                    x: desired.x - entities[i].velocity.x,
                    y: desired.y - entities[i].velocity.y
                };
                if (Math.sqrt(Math.pow(change.x, 2) + Math.pow(change.y, 2)) > time.delta * entities[i].walk.acceleration) {
                    change.x /= Math.sqrt(Math.pow(change.x, 2) + Math.pow(change.y, 2));
                    change.y /= Math.sqrt(Math.pow(change.x, 2) + Math.pow(change.y, 2));
                    change.x *= time.delta * entities[i].walk.acceleration;
                    change.y *= time.delta * entities[i].walk.acceleration;
                }
                entities[i].velocity.x += change.x;
                entities[i].velocity.y += change.y;
            }
        }
    }
}
