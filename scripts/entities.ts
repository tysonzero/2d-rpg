/// <reference path='components/position.ts'/>
/// <reference path='components/velocity.ts'/>
/// <reference path='components/sprite.ts'/>

class Entity {
    position: components.Position;
    velocity: components.Velocity;
    constructor(options?: {position?: components.Position; velocity?: components.Velocity}) {
        options = options || {};
        this.position = options.position;
        this.velocity = options.velocity;
    }
    sprite?: components.Sprite;
}

var entities: Entity[] = [];
