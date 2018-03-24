import { Stats } from "./stats";

export class Event{
    private effect = (stats: Stats) => { };
    public constructor(public displayText: string, effect?: (stats: Stats)=>void) {
        if (effect) {
            this.effect = effect;
        }
    }

    public doEffect(stats: Stats) {
        this.effect(stats);
    }
}