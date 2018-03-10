import { Rates } from "./rates";

export class Stats {
    stats: Stat[];
    constructor() {
        this.stats = new Array<Stat>(0);
    }

    getStat(name: string): Stat {
        const result = this.stats.filter(stat => {
            if (stat.getName().valueOf() === name) {
                return stat;
            }
        })
        if (result.length == 0) {
            throw ("No stat exists with name:" + name);
        }
        return result[0];
    }

    addStat(stat: Stat) {
        try { this.getStat(stat.getName()) }
        catch (e) {
            this.stats.push(stat);
        }
    }
}

export class Stat {
    private name: string;
    private cost: number;
    private value: number;
    private rates: number[];
    private costMultiplier: number;

    constructor(name: string, rates: number[], costMultiplier?: number) {
        this.name = name;
        this.rates = rates;
        this.costMultiplier = costMultiplier || 4;
        this.cost = 1;
        this.value = 0;
    }

    increase() {
        this.value++;
        this.increaseCost();
    }

    decrease() {
        this.value--;
        this.decreaseCost();
    }

    getCost() { return this.cost; }

    getValue() { return this.value; }

    getName() { return this.name; }

    getRateEffect(rate: Rates) {
        if (this.rates[rate]) {
            return this.rates[rate];
        }
        return 1;
    }
    
    increaseCost() {
        this.cost = Math.ceil(this.cost * this.costMultiplier);
    }

    decreaseCost() {
        this.cost = Math.ceil(this.cost / this.costMultiplier);
    }
}

export function getDefaultStats() {
    const stats = new Stats();
    const browsingRates = [];
    browsingRates[Rates.Gather] = 1.15;
    browsingRates[Rates.Dying] = 1.0001;
    stats.addStat(new Stat("Browsing", browsingRates));
    return stats;
}
