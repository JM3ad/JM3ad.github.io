import * as $ from "jquery";
import { Game } from "./gameLogic";
import { ScreenUpdater } from "./screenUpdater";

$(document).ready(function () {
    const numberPlayers = 4;
    const game = new Game(numberPlayers);
    game.startGame();
    const screenUpdater = new ScreenUpdater(game);
    screenUpdater.start();
})