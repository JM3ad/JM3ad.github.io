import { Species, getDefaultSpecies } from "./species";
import { Stats } from "./stats";
import { Feature } from "./features";
import { Log } from "./log";

export class Game {
    species: Species;
    log: Log;
    constructor() {
        this.log = new Log();
        this.species = getDefaultSpecies(this.log);
    };

    public startGame = () => {
        setInterval(this.tick, 1000);
    }

    public tick = ()=> {
        this.species.update();
        this.generateRandomEvents();
    }
    
    generateRandomEvents() {
        const dice = Math.random();
    }
}

