import * as $ from "jquery";
import { Game } from "./gameLogic";

export class ScreenUpdater {


    constructor(public game: Game) {
        for (let i = 0; i < game.species.length; i++) {
            this.createSpeciesBox(i);
        }
    };

    public start = () => {
        setInterval(this.update, 1000);
    }

    public update = () => {
        for (let i = 0; i < this.game.species.length; i++) {
            this.updateSpeciesBox(i);
        }
    }

    updateSpeciesBox(i: number) {
        const id = "#p" + i;
        const species = this.game.species[i];
        $(id).text(species.populationSize);
    }

    createSpeciesBox(id: number) {
        $("#container").append("<div class='species-box' id='p" + id + "'></div>");
    }
}
