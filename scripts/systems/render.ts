/// <reference path='../entities.ts'/>
/// <reference path='../context.ts'/>

module systems {
    export function render() {
        var i;
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = '#FFFFFF'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        for (i = entities.length - 1; i >= 0; i--) {
            if (entities[i] && entities[i].position && entities[i].sprite) {
                context.fillStyle = '#000000'
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
