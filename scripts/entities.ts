/// <reference path='components/position.ts'/>
/// <reference path='components/velocity.ts'/>
/// <reference path='components/sprite.ts'/>

interface Entity {
    position?: components.Position;
    velocity?: components.Velocity;
    sprite?: components.Sprite;
}

var entities: Entity[] = [];
