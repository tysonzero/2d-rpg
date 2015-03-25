/// <reference path='../time.ts'/>

module systems {
    export function updateTime() {
        time.delta = Math.min(performance.now() / 1000 - time.last, 0.05);
        time.last = performance.now() / 1000;
    }
}
