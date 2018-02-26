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
        const species = this.game.species[i];
        $("#speed-" + i).text("Speed: " + species.stats.speed);
        $("#size-" + i).text("Size: " + species.stats.size);
        $("#population-" + i).text("Population: " + species.populationSize);
        $("#dna-" + i).text("DNA: " + species.dna);
    }

    createSpeciesBox(i: number) {
        const species = this.game.species[i];
        $("#species-container").append("<div class='species-box' id='species-" + i + "'></div>");
        const speciesBox = $("#species-" + i);
        speciesBox.append("<div id='species-name-" + i + "'>Species: " + this.game.species[i].name + "</div>")
        speciesBox.append("<div class='stats-box' id='stats-" + i + "'> " + this.getStatsBox(i) + " </div>");
        speciesBox.append("<div class='population-box' id='population-" + i + "'>Population: " + species.populationSize + "</div>")
        if (i == 0) {
            $("#speed-0").append("<button id='speed-up'>+1</button>");
            $("#speed-up").click(this.game.species[0].increaseSpeed);
        }
    }

    getStatsBox(i: number) {
        const species = this.game.species[i];
        return "<div class='stat' id='speed-" + i + "'>Speed: " + species.stats.speed + "</div>"
            + "<div class='stat' id='size-" + i + "'>Size: " + species.stats.size + "</div>"
            + "<div class='dna' id='dna-" + i + "'>DNA: " + species.dna+"</div>";
    }
}
