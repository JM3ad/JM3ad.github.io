import { Stats } from "./stats";
import { Feature } from "./features";

export class Species {
    dna: number;
    name: string;
    constructor(public stats: Stats, public populationSize: number, public features: Feature[]) {
        this.dna = 0;
        this.name = "temp name";
    }
    
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
        this.updateDna(food);
    }
    updateDna(food: number) {
        this.dna += food;
    }
    public increaseSpeed = ()=> {
        let cost = 10;
        if (this.dna < cost) {
            return
        }
        this.dna -= cost;
        this.stats.speed++;
    }

}