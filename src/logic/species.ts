import { Stats, getDefaultStats } from "./stats";
import { Feature } from "./features";
import { NameGenerator } from "./nameGenerator";
import * as Calculator from "./calculator";

export class Species {
    dna: number;
    name: string;
    constructor(public stats: Stats, public populationSize: number, public features: Feature[]) {
        this.dna = 0;
        this.name = new NameGenerator().getName();
    }

    getGatherRate() {
        return Calculator.gatherRateCalculator(this.stats);
    }
    getHuntRate() {
        return Calculator.huntRateCalculator(this.stats);
    }
    getSurvivalRate() {
        return Calculator.survivalRateCalculator(this.stats);
    }
    getConsumptionRate() {
        return Calculator.consumptionRateCalculator(this.stats);
    }

    updatePopulation(food: number) {
        this.populationSize = Math.floor(food / (this.getConsumptionRate() * this.populationSize));
        this.increaseDna(this.populationSize);
    }

    increaseDna(amount: number) {
        this.dna += amount;
    }

    increaseStat(statName: string) {
        const stat = this.stats.getStat(statName);
        const cost = stat.getCost();
        if (cost <= this.dna) {
            this.dna -= cost;
            stat.increase();
        }
    }
}

export function getDefaultSpecies() {
    return new Species(getDefaultStats(), 2, []);
}