import * as $ from "jquery";
import { Game } from "./gameLogic";

$(document).ready(function () {
    const game = new Game(2);
    game.startGame();
})