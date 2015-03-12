/// <reference path='../time.ts'/>

module systems {
    export function updateTime() {
        time.delta = Math.min((performance.now() - time.last) / 1000, 0.05);
        time.last = performance.now();
    }
}
