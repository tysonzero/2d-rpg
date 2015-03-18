/// <reference path='components/hitbox.ts'/>
/// <reference path='components/position.ts'/>
/// <reference path='components/sprite.ts'/>
/// <reference path='components/velocity.ts'/>
/// <reference path='components/walk.ts'/>

var entities: {
    position?: components.Position;
    velocity?: components.Velocity;
    hitbox?: components.Hitbox;
    sprite?: components.Sprite;
    walk?: components.Walk;
}[] = [
    {
        position: {x: 200, y: 300},
        velocity: {x: 0, y: 0},
        sprite: {width: 50, height: 50, color: '#FF0000', shape: 'ellipse'},
        walk: {acceleration: 200, speed: 200, keys: {up: 87, down: 83, left: 65, right: 68}}
    },
    {
        position: {x: 600, y: 300},
        velocity: {x: 0, y: 0},
        sprite: {width: 50, height: 50, color: '#0000FF', shape: 'ellipse'},
        walk: {acceleration: 200, speed: 200, keys: {up: 73, down: 75, left: 74, right: 76}}
    }
];
