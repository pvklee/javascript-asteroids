const Util = require('./utils');
const MovingObject = require('./moving_object');
const Bullet = require('./bullet.js');

const DEFAULTS = {
    RADIUS: 10,
    COLOR: 'blue'
}

function Ship(options){
    options.game = options.game
    options.pos = options.pos;
    options.vel = [0,0];
    options.color = DEFAULTS.COLOR;
    options.radius = DEFAULTS.RADIUS;
    MovingObject.call(this, options);
}
Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function(){
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
}

Ship.prototype.power = function(impulse){
    this.vel[0] += impulse[0] * .2;
    this.vel[1] += impulse[1] * .2;
}

Ship.prototype.fireBullet = function(){
    let norm = Util.norm(this.vel);

    if (norm === 0) {
      // Can't fire unless moving.
      return;
    }

    let relVel = Util.scale(
        Util.directional(this.vel),
        Bullet.SPEED
    );

    const bulletVel = [
        relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];
    
    let position = [this.pos[0], this.pos[1]];
    let bullet = new Bullet({
        pos: position,
        vel: bulletVel,
        game: this.game
    });

    this.game.addBullet(bullet);
}


module.exports = Ship;
