const Game = require('./game.js');
const Ship = require('./ship.js');

function GameView(ctx){
    this.game = new Game();
    this.ctx = ctx;
    this.ship = this.game.addShip();
}

GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0]
}

GameView.prototype.bindKeyHandlers = function(){
    const ship = this.ship;
    const game = this.game;
    Object.keys(GameView.MOVES).forEach(function(k){
        const move = GameView.MOVES[k];
        key(k, function(){ship.power(move)});
    });

    key("space", function () { ship.fireBullet(); });
};

GameView.prototype.start = function(){
    this.bindKeyHandlers();
    const game = this.game;
    setInterval(function(){
        game.step();
        game.draw(this.ctx);
    }, 20)
}



module.exports = GameView;