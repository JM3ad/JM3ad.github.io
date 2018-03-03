import { Species, getDefaultSpecies } from "./species";
import { Stats } from "./stats";
import { Feature } from "./features";

export class Game {
    species: Species;
    log: string[];

    constructor() {
        this.species = getDefaultSpecies();
        this.log = new Array<string>(0);
    };

    public startGame = () => {
        setInterval(this.tick, 1000);
    }

    public tick = ()=> {
        const food = this.getTotalFood();
        this.updatePopulation(food);
    }

    updatePopulation(totalFood: number) {
        this.species.updatePopulation(totalFood);
    }

    getTotalFood() {
        return Math.ceil(Math.random() * 100);
    }

    addLogMessage(message) {
        this.log.push(message);
    }

    getLogMessages() {
        const tempLog = this.log;
        this.log = new Array<string>(0);
        return tempLog;
    }
}

