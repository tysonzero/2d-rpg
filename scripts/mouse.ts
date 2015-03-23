/// <reference path='context.ts'/>

var mouse: {
    down: boolean[];
    clicked: number[];
    released: number[];
    x: number;
    y: number;
} = {
    down: [],
    clicked: [],
    released: [],
    x: 0,
    y: 0
};

window.addEventListener('mousedown', (event) => {
    mouse.clicked[event.button] = mouse.clicked[event.button] + 1 || 1;
    mouse.down[event.button] = true;
});

window.addEventListener('mouseup', (event) => {
    mouse.released[event.button] = mouse.released[event.button] + 1 || 1;
    delete mouse.down[event.button];
});

context.canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;
});
