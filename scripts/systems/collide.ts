/// <reference path='../entities.ts'/>
/// <reference path='../time.ts'/>

module systems {
    function collideRects(i: number, j: number) {
        var leftOverlap: number;
        var rightOverlap: number;
        var topOverlap: number;
        var bottomOverlap: number;
        var leftOverlapTime: number;
        var rightOverlapTime: number;
        var topOverlapTime: number;
        var bottomOverlapTime: number;
        var velocityI: number;
        var velocityJ: number;
        var massI: number;
        var massJ: number;
        leftOverlap = entities[j].position.x - entities[i].position.x + entities[i].hitbox.width / 2 + entities[j].hitbox.width / 2;
        rightOverlap = entities[i].position.x - entities[j].position.x + entities[i].hitbox.width / 2 + entities[j].hitbox.width / 2;
        topOverlap = entities[j].position.y - entities[i].position.y + entities[i].hitbox.height / 2 + entities[j].hitbox.height / 2;
        bottomOverlap = entities[i].position.y - entities[j].position.y + entities[i].hitbox.height / 2 + entities[j].hitbox.height / 2;
        leftOverlapTime = leftOverlap / (entities[j].velocity.x - entities[i].velocity.x);
        rightOverlapTime = rightOverlap / (entities[i].velocity.x - entities[j].velocity.x);
        topOverlapTime = topOverlap / (entities[j].velocity.y - entities[i].velocity.y);
        bottomOverlapTime = bottomOverlap / (entities[i].velocity.y - entities[j].velocity.y);
        if ((0 < leftOverlapTime && leftOverlapTime < time.delta || 0 < rightOverlapTime && rightOverlapTime < time.delta)
                && topOverlap > 0 && bottomOverlap > 0) {
            velocityI = entities[i].velocity.x;
            velocityJ = entities[j].velocity.x;
            massI = entities[i].hitbox.mass;
            massJ = entities[j].hitbox.mass;
            entities[i].velocity.x += 2 * massJ / (massI + massJ) * (velocityJ - velocityI);
            entities[j].velocity.x += 2 * massI / (massI + massJ) * (velocityI - velocityJ);
            entities[i].position.x += time.delta * entities[i].velocity.x;
            entities[j].position.x += time.delta * entities[j].velocity.x;
        }
        if ((0 < topOverlapTime && topOverlapTime < time.delta || 0 < bottomOverlapTime && bottomOverlapTime < time.delta)
                && leftOverlap > 0 && rightOverlap > 0) {
            velocityI = entities[i].velocity.y;
            velocityJ = entities[j].velocity.y;
            massI = entities[i].hitbox.mass;
            massJ = entities[j].hitbox.mass;
            entities[i].velocity.y += 2 * massJ / (massI + massJ) * (velocityJ - velocityI);
            entities[j].velocity.y += 2 * massI / (massI + massJ) * (velocityI - velocityJ);
            entities[i].position.y += time.delta * entities[i].velocity.y;
            entities[j].position.y += time.delta * entities[j].velocity.y;
        }
    }
    function collideCircles(i: number, j: number) {
        var positionDiff: {x: number; y: number};
        var positionDiffMag: number;
        var velocityDiff: {x: number; y: number};
        var direction: {x: number; y: number};
        var projection: {x: number; y: number};
        var projectionMag: number;
        var massI: number;
        var massJ: number;
        positionDiff = {x: entities[i].position.x - entities[j].position.x, y: entities[i].position.y - entities[j].position.y};
        positionDiffMag = Math.sqrt(Math.pow(positionDiff.x, 2) + Math.pow(positionDiff.y, 2));
        velocityDiff = {x: entities[i].velocity.x - entities[j].velocity.x, y: entities[i].velocity.y - entities[j].velocity.y};
        if (positionDiffMag < entities[i].hitbox.radius + entities[j].hitbox.radius) {
            direction = {x: positionDiff.x / positionDiffMag, y: positionDiff.y / positionDiffMag};
            projectionMag = velocityDiff.x * direction.x + velocityDiff.y * direction.y;
            projection = {x: projectionMag * direction.x, y: projectionMag * direction.y};
            massI = entities[i].hitbox.mass;
            massJ = entities[j].hitbox.mass;
            entities[i].velocity.x -= 2 * massJ / (massI + massJ) * projection.x;
            entities[j].velocity.x += 2 * massI / (massI + massJ) * projection.x;
            entities[i].velocity.y -= 2 * massJ / (massI + massJ) * projection.y;
            entities[j].velocity.y += 2 * massI / (massI + massJ) * projection.y;
            entities[i].position.x += time.delta * entities[i].velocity.x;
            entities[j].position.x += time.delta * entities[j].velocity.x;
            entities[i].position.y += time.delta * entities[i].velocity.y;
            entities[j].position.y += time.delta * entities[j].velocity.y;
        }
    }
    export function collide() {
        var i: number;
        var j: number;
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].position && entities[i].velocity && entities[i].hitbox) {
                for (j = i - 1; j >= 0; j--) {
                    if (entities[j] && entities[j].position && entities[j].hitbox) {
                        if (entities[i].hitbox.radius) {
                            collideCircles(i, j);
                        } else {
                            collideRects(i, j);
                        }
                    }
                }
            }
        }
    }
}
