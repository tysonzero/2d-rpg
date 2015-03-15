module components {
    export interface Walk {
        acceleration: number;
        speed: number;
        keys: {
            up: number;
            down: number;
            left: number;
            right: number;
        };
    }
}
