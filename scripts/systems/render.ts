/// <reference path='../context.ts'/>
/// <reference path='../entities.ts'/>

module systems {
    export function render() {
        var i: number;
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].position && entities[i].sprite) {
                context.fillStyle = entities[i].sprite.color;
                if (entities[i].sprite.radius) {
                    context.beginPath();
                    context.arc(
                        entities[i].position.x,
                        entities[i].position.y,
                        entities[i].sprite.radius,
                        0, 2 * Math.PI
                    );
                    context.fill();
                } else {
                    context.fillRect(
                        entities[i].position.x - entities[i].sprite.width / 2,
                        entities[i].position.y - entities[i].sprite.height / 2,
                        entities[i].sprite.width,
                        entities[i].sprite.height
                    );
                }
            }
        }
    }
}
