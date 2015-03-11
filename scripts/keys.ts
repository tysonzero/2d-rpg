var keys: {
    down: boolean[];
    clicked: number[];
    released: number[];
} = {
    down: [],
    clicked: [],
    released: []
};

window.addEventListener('keydown', function (event) {
    keys.clicked[event.keyCode] = keys.clicked[event.keyCode] + 1 || 1;
    keys.down[event.keyCode] = true;
});

window.addEventListener('keyup', function (event) {
    keys.released[event.keyCode] = keys.released[event.keyCode] + 1 || 1;
    keys.down[event.keyCode] = false;
});
