/// <reference path='../context.ts'/>

module systems {
    export function resetContext() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = '#FFFFFF';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
}
