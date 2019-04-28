const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js')
const Bullet = require('./bullet.js')
const Util = require('./utils')

Game.DIM_X = 800;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 5;
Game.BG_COLOR = 'black';

function Game(){
    this.asteroids = [];
    this.ship = [];
    this.bullets = [];
    this.addAsteroids();
};

Game.prototype.randomPosition = function(){
    let ranx = Math.random() * Game.DIM_X;
    let rany = Math.random() * Game.DIM_Y;
    return [ranx, rany];
};

Game.prototype.addAsteroids = function(){
    for(let i=0; i< Game.NUM_ASTEROIDS; i++){
        this.asteroids.push(new Asteroid({game: this, pos: this.randomPosition()}));
    }
};

Game.prototype.addShip = function(){
    newShip = new Ship({game: this, pos: this.randomPosition()})
    this.ship.push(newShip);
    return newShip;
}


Game.prototype.addBullet = function(bullet){
    this.bullets.push(bullet);
}

Game.prototype.allObjects = function(){
    return [].concat(this.asteroids, this.ship, this.bullets);
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0,0,Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(function(object){
        object.draw(ctx);
    });
};

Game.prototype.moveObjects = function(){
    this.allObjects().forEach(function(object){
        object.move();
    });
};

Game.prototype.checkCollisions = function(){
    allObjects = this.allObjects();
    allObjects.slice(0,-1).forEach( function(object1, index) {
        allObjects.slice(index+1).forEach( function(object2) {
            if(object1.isCollidedWith(object2)){
                object1.collideWith(object2);
            };
        });
    });
};

Game.prototype.remove = function(object){
    if(object instanceof Asteroid){
        this.asteroids.splice(this.asteroids.indexOf(object), 1)
    } else if(object instanceof Ship){
        this.ship.splice(this.ship.indexOf(object), 1)
    } else if(object instanceof Bullet){
        this.bullets.splice(this.bullets.indexOf(object), 1)
    };
};

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.wrap = function(pos){
    if (pos[0] < -15 || pos[0] > Game.DIM_X + 15){
        pos[0] = Game.DIM_X - pos[0];
    }
    if (pos[1] < -15 || pos[1] > Game.DIM_Y + 15){
        pos[1] = Game.DIM_Y - pos[1];
    }
    return pos;
};

module.exports = Game;