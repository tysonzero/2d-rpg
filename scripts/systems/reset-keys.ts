/// <reference path='../keys.ts'/>

module systems {
    export function resetKeys() {
        var i: number;
        for (i = keys.clicked.length - 1; i >= 0; i--) {
            if (keys.clicked[i]) {
                keys.clicked[i] = 0;
            }
        }
        for (i = keys.released.length - 1; i >= 0; i--) {
            if (keys.released[i]) {
                keys.released[i] = 0;
            }
        }
    }
}
