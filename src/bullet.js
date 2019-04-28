const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

Bullet.COLOR = 'red';
Bullet.RADIUS = 1;
Bullet.SPEED = 5;

function Bullet(options){
    options.color = Bullet.COLOR;
    options.radius = Bullet.RADIUS;
    MovingObject.call(this, options);
}
Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;

module.exports = Bullet;