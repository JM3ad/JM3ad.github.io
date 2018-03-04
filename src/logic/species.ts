import { Stats, getDefaultStats } from "./stats";
import { Feature } from "./features";
import { NameGenerator } from "./nameGenerator";
import { StatUnlocker } from "./statUnlocker";
import * as Calculator from "./calculator";

export class Species {
    dna: number;
    name: string;
    statUnlocker: StatUnlocker;

    constructor(public stats: Stats, public populationSize: number, public features: Feature[]) {
        this.dna = 0;
        this.name = new NameGenerator().getName();
        this.statUnlocker = new StatUnlocker();
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

    updatePopulation(foodAbundance: number) {
        const totalFood = foodAbundance * this.getGatherRate();
        this.populationSize = Math.ceil(totalFood / this.getConsumptionRate());
    }

    increaseDna(amount: number) {
        this.dna += amount;
    }

    updateUnlockedStats() {
        this.statUnlocker.getUnlockedStats(this.dna)
            .forEach(stat => {
                this.stats.addStat(stat);
            })
    }

    increaseStat(statName: string) {
        const stat = this.stats.getStat(statName);
        const cost = stat.getCost();
        if (cost <= this.dna) {
            this.dna -= cost;
            stat.increase();
        }
    }

    decreaseStat(statName: string) {
        const stat = this.stats.getStat(statName);
        if (stat.getValue() > 1) {
            stat.decrease();
        }
    }
}

export function getDefaultSpecies() {
    return new Species(getDefaultStats(), 2, []);
}