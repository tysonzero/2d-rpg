/// <reference path='components/position.ts'/>
/// <reference path='components/velocity.ts'/>
/// <reference path='components/sprite.ts'/>

var entities: {
    position?: components.Position;
    velocity?: components.Velocity;
    sprite?: components.Sprite;
}[] = [
    {
        position: {x: 400, y: 300},
        velocity: {x: 50, y: 50},
        sprite: {width: 50, height: 50, color: '#FF0000', shape: 'ellipse'}
    }
];
