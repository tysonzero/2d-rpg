/// <reference path='../entities.ts'/>
/// <reference path='../keys.ts'/>
/// <reference path='../time.ts'/>

module systems {
    export function walk() {
        var i: number;
        var desired: {x: number; y: number};
        var change: {x: number; y: number};
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].walk) {
                desired = {x: 0, y: 0};
                if (keys.down[entities[i].walk.keys.up]) desired.y--;
                if (keys.down[entities[i].walk.keys.down]) desired.y++;
                if (keys.down[entities[i].walk.keys.left]) desired.x--;
                if (keys.down[entities[i].walk.keys.right]) desired.x++;
                if (desired.x) desired.y /= Math.sqrt(2);
                if (desired.y) desired.x /= Math.sqrt(2);
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
