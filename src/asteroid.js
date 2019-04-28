const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');

const DEFAULTS = {
    COLOR: '#ccc',
    RADIUS: 20,
    SPEED: 1
};

function Asteroid(options){
    options.game = options.game;
    options.pos = options.pos;
    options.vel = Util.randomVec(DEFAULTS.SPEED);
    options.color = DEFAULTS.COLOR;
    options.radius = DEFAULTS.RADIUS;
    MovingObject.call(this, options);
}
Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(object){
    if(object instanceof Ship){
        object.relocate();
    } else if(object instanceof Bullet){
        this.game.remove(object);
        this.game.remove(this);
    }
}

module.exports = Asteroid;