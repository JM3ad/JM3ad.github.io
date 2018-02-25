import { ScreenUpdater } from "./screenUpdater";

class Stats {
    constructor(public speed: number, public size: number, public foodPerPop: number) { }
}

class Feature {
    constructor(public gatheringMultiplier: number, public survivalMultiplier: number, public huntingMultiplier: number) { }
}

export class Species {
    constructor(public stats: Stats, public populationSize: number, public features: Feature[]) { }
    
    getGatherRatePerPop() {
        return this.stats.speed;
    }
    getHuntRatePerPop() {
        return this.stats.speed;
    }
    getSurvivalRatePerPop() {
        return this.stats.speed;
    }
    updatePopulation(food: number) {
        this.populationSize = Math.floor(food / this.stats.foodPerPop);
    }
}

export class Game {
    species: Species[];

    constructor(numberOfSpecies: number) {
        this.species = new Array<Species>(numberOfSpecies);
        for (let i = 0; i < numberOfSpecies; i++) {
            this.species[i] = createNewSpecies();
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
        this.species.forEach((species) => { species.updatePopulation(totalFood * species.getGatherRatePerPop() / totalGatherRate) });
    }

    getTotalFood() {
        return Math.floor(Math.random() * 10 + 1);
    }

    getTotalGatherRate() {
        let total = 0;
        this.species.forEach((species) => { total += species.getGatherRatePerPop() });
        return total;
    }
}

export function createNewSpecies() {
    return new Species(getDefaultStats(), 2, []);
}

export function getDefaultStats() {
    return new Stats(1, 1, 1);
}

