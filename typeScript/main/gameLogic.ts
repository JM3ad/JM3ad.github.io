class Stats {
    constructor(public speed: number, public size: number, public foodPerPop: number) { }
}

class Feature {
    constructor(public gatheringMultiplier: number, public survivalMultiplier: number, public huntingMultiplier: number) { }
}

export class Species {
    constructor(public stats: Stats, public populationSize: number, public features: Feature[]) { }

    getGatherRate() {
        return this.stats.speed;
    }
    getHuntRate() {
        return this.stats.speed;
    }
    getSurvivalRate() {
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

    startGame() {
        setInterval(this.tick, 1000);
    }

    tick() {
        let food = this.getTotalFood();
        this.updatePopulations(food);
        if (false) {
            //Deal with dead species
        }
    }

    updatePopulations(food: number) {
        let totalGatherRate = this.getTotalGatherRate();
        this.species.forEach((species) => { species.updatePopulation(species.getGatherRate() / totalGatherRate) });
    }

    getTotalFood() {
        return Math.floor(Math.random() * 10 + 1);
    }

    getTotalGatherRate() {
        let total = 0;
        this.species.forEach((species) => { total += species.getGatherRate() });
        return total;
    }
}

export function createNewSpecies() {
    return new Species(getDefaultStats(), 2, []);
}

export function getDefaultStats() {
    return new Stats(1, 1, 1);
}

