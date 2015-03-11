var keys: {
    down: boolean;
    clicked: number;
    released: number;
}[] = [];

window.addEventListener('keydown', function (event) {
    if (!keys[event.keyCode]) {
        keys[event.keyCode] = {
            down: true,
            clicked: 1,
            released: 0
        }
    }
    keys[event.keyCode].clicked++;
    keys[event.keyCode].down = true;
});

window.addEventListener('keyup', function (event) {
    if (!keys[event.keyCode]) {
        keys[event.keyCode] = {
            down: false,
            clicked: 0,
            released: 1
        }
    }
    keys[event.keyCode].released++;
    keys[event.keyCode].down = false;
});
