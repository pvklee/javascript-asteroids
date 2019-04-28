const GameView = require('./game_view');
const Game = require('./game.js')
window.GameView = GameView;
window.Game = Game;

window.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext('2d');
    canvas.height = Game.DIM_Y;
    canvas.width = Game.DIM_X;

    gameView = new GameView(ctx);
    gameView.start();
});