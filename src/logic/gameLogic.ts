import { ScreenUpdater } from "./screenUpdater";
import { Species } from "./species";
import { Stats } from "./stats";
import { Feature } from "./features";


export class Game {
    species: Species[];
    log: string[];

    constructor(numberOfSpecies: number) {
        this.species = new Array<Species>(numberOfSpecies);
        this.log = new Array<string>(0);
        for (let i = 0; i < numberOfSpecies; i++) {
            this.species[i] = getDefaultSpecies();
        }
    };

    public startGame = () => {
        setInterval(this.tick, 1000);
    }

    public tick = ()=> {
        const food = this.getTotalFood();
        this.updatePopulations(food);
        if (false) {
            //Deal with dead species
        }
    }

    updatePopulations(totalFood: number) {
        let totalGatherRate = this.getTotalGatherRate();
        this.species.forEach((species) => { species.updatePopulation(Math.floor(totalFood * species.getGatherRatePerPop() / totalGatherRate))});
    }

    getTotalFood() {
        return Math.ceil(Math.random() * 10 * this.species.length);
    }

    getTotalGatherRate() {
        let total = 0;
        this.species.forEach((species) => { total += species.getGatherRatePerPop() });
        return total;
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

export function getDefaultSpecies() {
    return new Species(getDefaultStats(), 2, []);
}

function getDefaultStats() {
    return new Stats(1, 1, 1);
}

