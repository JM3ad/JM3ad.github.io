import { Stats, Stat } from "./stats";

export function gatherRateCalculator(stats: Stats) {
    return RateCalculator(stats, (Stat) => Stat.getGatherMultiplier());
}

export function survivalRateCalculator(stats: Stats) {
    return RateCalculator(stats, (Stat) => Stat.getSurvivalMultiplier());

}

export function huntRateCalculator(stats: Stats) {
    return RateCalculator(stats, (Stat) => Stat.getHuntMultiplier());

}

export function consumptionRateCalculator(stats: Stats) {
    return RateCalculator(stats, (Stat) => Stat.getConsumptionMultiplier());
}

function RateCalculator(stats: Stats, func: (stat: Stat) => number) {
    let defaultRate = 1;
    stats.stats.forEach(stat => {
        defaultRate *= Math.pow(func(stat), stat.getValue());
    })
    return defaultRate;
}