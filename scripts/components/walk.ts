module components {
    export interface Walk {
        acceleration: number;
        keys: {
            up: number;
            down: number;
            left: number;
            right: number;
        };
    }
}
