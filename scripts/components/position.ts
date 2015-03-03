module components {
    export class Position {
        x: number;
        y: number;
        constructor(options?: {x?: number; y?: number}) {
            options = options || {};
            this.x = options.x || 0;
            this.y = options.y || 0;
        }
    }
}
