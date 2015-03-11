/// <reference path='../entities.ts'/>
/// <reference path='../keys.ts'/>

module systems {
    export function input(delta: number) {
        var i: number;
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].input) {
                var downKey = keys[entities[i].input.upKey],
                    upKey = keys[entities[i].input.downKey],
                    leftKey = keys[entities[i].input.leftKey],
                    rightKey = keys[entities[i].input.rightKey];
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
        for (i = keys.length - 1; i >= 0; i--) {
            if (keys[i]) {
                keys[i].clicked = 0;
                keys[i].released = 0;
            }
        }
    }
}
