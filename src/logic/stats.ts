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
    private survivalMultiplier: number;
    private gatherMultiplier: number;
    private huntMultiplier: number;
    private consumptionMultiplier: number;
    private costMultiplier: number;

    constructor(name: string, survivalMultiplier?: number, gatherMultiplier?: number, huntMultiplier?: number, consumptionMultiplier?: number, costMultiplier?: number) {
        this.name = name;
        this.survivalMultiplier = survivalMultiplier || 1;
        this.gatherMultiplier = gatherMultiplier || 1;
        this.huntMultiplier = huntMultiplier || 1;
        this.consumptionMultiplier = consumptionMultiplier || 1;
        this.costMultiplier = costMultiplier || 1.5;
        this.cost = 1;
        this.value = 1;
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

    getSurvivalMultiplier() { return this.survivalMultiplier; }

    getHuntMultiplier() { return this.huntMultiplier; }

    getGatherMultiplier() { return this.gatherMultiplier; }

    getConsumptionMultiplier() { return this.consumptionMultiplier; }
    
    increaseCost() {
        this.cost = Math.ceil(this.cost * this.costMultiplier);
    }

    decreaseCost() {
        this.cost = Math.ceil(this.cost / this.costMultiplier);
    }
}

export function getDefaultStats() {
    const stats = new Stats();
    stats.addStat(new Stat("Speed", 1.2, 1.2, 1.2, 1.02));
    stats.addStat(new Stat("Size", 0.8, 1.1, 1.4, 1.2));
    return stats;
}
