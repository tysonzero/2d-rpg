/// <reference path='../mouse.ts'/>

module systems {
    export function resetMouse() {
        var i: number;
        for (i = mouse.clicked.length - 1; i >= 0; i--) {
            if (mouse.clicked[i]) {
                mouse.clicked[i] = 0;
            }
        }
        for (i = mouse.released.length - 1; i >= 0; i--) {
            if (mouse.released[i]) {
                mouse.released[i] = 0;
            }
        }
    }
}
