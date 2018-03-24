import { Stats, Stat } from "./stats";
import { Rates } from "./rates";

export function rateCalculator(stats: Stats, rate : Rates) {
    let defaultRate = 1;
    stats.stats.forEach(stat => {
        defaultRate *= Math.pow(stat.getRateEffect(rate), stat.getValue());
    })
    return defaultRate-1;
}