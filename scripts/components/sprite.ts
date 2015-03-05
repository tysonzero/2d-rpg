module components {
    export class Sprite {
        width: number;
        height: number;
        constructor(options?: {width?: number; height?: number}) {
            options = options || {};
            this.width = options.width;
            this.height = options.height;
        }
    }
}
