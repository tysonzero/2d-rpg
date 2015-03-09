/// <reference path='components/position.ts'/>
/// <reference path='components/velocity.ts'/>
/// <reference path='components/sprite.ts'/>

interface Entity {
    position?: components.Position;
    velocity?: components.Velocity;
    sprite?: components.Sprite;
}

var entities: Entity[] = [
    {
        position: {x: 50, y: 25},
        velocity: {x: 10, y: 10},
        sprite: {width: 100, height: 50, color: '#FF0000', shape: 'rect'}
    }
];
