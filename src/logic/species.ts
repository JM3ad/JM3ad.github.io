import { Stats, getDefaultStats, Stat } from "./stats";
import { Feature } from "./features";
import { NameGenerator } from "./nameGenerator";
import { getStatUnlocker } from "./statUnlocker";
import { getEventUnlocker } from "./eventsUnlocker";
import { Unlocker } from "./unlocker";
import { Rates } from "./rates";
import { Event } from "./event";
import { Log } from "./log";
import * as Calculator from "./calculator";

export class Species {
    dna: number;
    food: number;
    name: string;
    statUnlocker: Unlocker<Stat>;
    eventsUnlocker: Unlocker<Event>;
    log: Log;

    constructor(public stats: Stats, public populationSize: number, public features: Feature[], log: Log) {
        this.dna = 3000;
        this.food = 0;
        this.name = new NameGenerator().getName();
        this.statUnlocker = getStatUnlocker();
        this.eventsUnlocker = getEventUnlocker();
        this.log = log;
    }

    getRate(rate: Rates) {
        return Calculator.rateCalculator(this.stats, rate) * this.populationSize;
    }
    getClickRate() {
        return Calculator.rateCalculator(this.stats, Rates.Gather) + 1;
    }
    getFoodIncreaseRate() {
        return this.getRate(Rates.Gather) - this.getRate(Rates.Consumption);
    }
    getPopulationIncreaseRate() {
        return this.getRate(Rates.Breeding) - this.getRate(Rates.Dying) * this.populationSize;
    }

    public gatherFood = () => {
        this.food += this.getClickRate();
    }

    update() {
        this.updateFood();
        this.updatePopulation();
        this.increaseDna(this.populationSize);
        this.unlockFeatures();
    }

    updateFood() {
        this.food += this.getFoodIncreaseRate();
        if (this.food < 0) { this.food = 0; }
    }

    updatePopulation() {
        this.populationSize += this.getPopulationIncreaseRate();
        this.populationSize += Math.floor(this.food / 50);
        this.food %= 50;
    }

    increaseDna(amount: number) {
        this.dna += amount;
    }

    unlockFeatures() {
        this.statUnlocker.getUnlockedItems(this.dna)
            .forEach(stat => {
                this.stats.addStat(stat);
            })

        this.eventsUnlocker.getUnlockedItems(this.dna)
            .forEach(event => {
                event.doEffect(this.stats);
                this.log.addMessage(event.displayText);
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
        if (stat.getValue() > 0) {
            stat.decrease();
        }
    }
}

export function getDefaultSpecies(log: Log) {
    return new Species(getDefaultStats(), 2, [], log);
}