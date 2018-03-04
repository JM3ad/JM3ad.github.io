import { Species, getDefaultSpecies } from "./species";
import { Stats } from "./stats";
import { Feature } from "./features";
import { Climate } from "./climate";

export class Game {
    species: Species;
    log: string[];
    logSize: number;
    climate: Climate;

    constructor() {
        this.species = getDefaultSpecies();
        this.log = new Array<string>(0);
        this.logSize = 20;
        this.climate = new Climate();
    };

    public startGame = () => {
        setInterval(this.tick, 1000);
    }

    public tick = ()=> {
        const food = this.getFoodAbundance();
        this.updateSpecies(food);
        this.generateRandomEvents();
    }

    updateSpecies(totalFood: number) {
        this.species.updatePopulation(totalFood);
        this.species.increaseDna(this.species.populationSize);
        this.species.updateUnlockedStats();
    }

    getFoodAbundance() {
        return 10 + Math.ceil(Math.random() * 100) * this.climate.getFoodAbundanceMultiplier();
    }

    increaseClimateTemperature() {
        if (this.climate.temperature.canBeIncreased()) {
            this.climate.temperature.increase();
            this.addLogMessage(this.climate.temperature.getDescription());
        }
    }

    decreaseClimateTemperature() {
        if (this.climate.temperature.canBeDecreased()) {
            this.climate.temperature.decrease();
            this.addLogMessage(this.climate.temperature.getDescription());
        }
    }

    addLogMessage(message) {
        this.log.unshift(message);
        if (this.log.length > this.logSize) {
            this.log.pop();
        }
    }

    getLogMessages() {
        return this.log;
    }

    generateRandomEvents() {
        const dice = Math.random();
        if (dice < 0.05) {
            this.increaseClimateTemperature();
        } else if (dice < 0.10) {
            this.decreaseClimateTemperature();
        }
    }
}

