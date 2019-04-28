const Util = require('./utils.js')
const Game = require('./game.js')

function MovingObject(options){
    this.game = options.game;
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.isWrappable = true;

MovingObject.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if(this.isWrappable){
        this.pos = this.game.wrap(this.pos);
    }
    if(!this.isWrappable && this.isOutOfBounds()){
        this.remove();
    }
}

MovingObject.prototype.isOutOfBounds = function(){
    return this.pos[0] < 0 || this.pos[1] < 0 || this.pos[0] > Game.Dim_X || this.pos[1] > Game.DIM_Y;
}


MovingObject.prototype.isCollidedWith = function(object){
    return Util.distance(this.pos, object.pos) < (this.radius + object.radius);
}

MovingObject.prototype.collideWith = function(object){
}

MovingObject.prototype.remove = function(){
    this.game.remove(this);
}

module.exports = MovingObject;