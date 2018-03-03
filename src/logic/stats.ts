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

    constructor(name: string, survivalMultiplier?: number, gatherMultiplier?: number, huntMultiplier?: number, consumptionMultiplier?: number) {
        this.name = name;
        this.survivalMultiplier = survivalMultiplier || 0;
        this.gatherMultiplier = gatherMultiplier || 0;
        this.huntMultiplier = huntMultiplier || 0;
        this.consumptionMultiplier = consumptionMultiplier || 0;
        this.cost = 1;
        this.value = 1;
    }

    increase() {
        this.value++;
        this.updateCost();
    }

    decrease() { this.value--; }

    getCost() { return this.cost; }

    getValue() { return this.value; }

    getName() { return this.name; }

    getSurvivalMultiplier() { return this.survivalMultiplier; }

    getHuntMultiplier() { return this.huntMultiplier; }

    getGatherMultiplier() { return this.gatherMultiplier; }

    getConsumptionMultiplier() { return this.consumptionMultiplier; }

    //Decide how cost should increase
    updateCost() { Math.ceil(this.cost * 1.2); }
}

export function getDefaultStats() {
    const stats = new Stats();
    stats.addStat(new Stat("Speed", 1, 1, 1, 0.2));
    stats.addStat(new Stat("Size", -1, 0.5, 0.5, 1));
    return stats;
}
