/// <reference path='components/position.ts'/>
/// <reference path='components/velocity.ts'/>

class Entity {
    position: components.Position;
    velocity: components.Velocity;
    constructor(options?: {position?: components.Position; velocity?: components.Velocity}) {
        options = options || {};
        this.position = options.position;
        this.velocity = options.velocity;
    }
}

var entities: Entity[] = [];
