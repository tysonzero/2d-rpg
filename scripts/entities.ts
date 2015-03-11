/// <reference path='components/position.ts'/>
/// <reference path='components/velocity.ts'/>
/// <reference path='components/sprite.ts'/>
/// <reference path='components/input.ts'/>

var entities: {
    position?: components.Position;
    velocity?: components.Velocity;
    sprite?: components.Sprite;
    input?: components.Input;
}[] = [
    {
        position: {x: 400, y: 300},
        velocity: {x: -50, y: 50},
        sprite: {width: 50, height: 50, color: '#FF0000', shape: 'ellipse'},
        input: {acceleration: 200, upKey: 87, downKey: 83, leftKey: 65, rightKey: 68}
    },
    {
        position: {x: 400, y: 300},
        velocity: {x: 50, y: 50},
        sprite: {width: 50, height: 50, color: '#0000FF', shape: 'ellipse'},
        input: {acceleration: 200, upKey: 73, downKey: 75, leftKey: 74, rightKey: 76}
    }
];
