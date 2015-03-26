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
        hitbox: {radius: 25, mass: 100},
        sprite: {radius: 25, color: '#FF0000'},
        walk: {acceleration: 200, speed: 200, keys: {up: 87, down: 83, left: 65, right: 68}}
    },
    {
        position: {x: 600, y: 300},
        velocity: {x: 0, y: 0},
        hitbox: {radius: 25, mass: 100},
        sprite: {radius: 25, color: '#0000FF'},
        walk: {acceleration: 200, speed: 200, keys: {up: 73, down: 75, left: 74, right: 76}}
    }
];
