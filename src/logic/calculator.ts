import { Stats, Stat } from "./stats";

export function gatherRateCalculator(stats: Stats) {
    let gatherRate = 0;
    stats.stats.forEach(stat => {
        gatherRate += stat.getValue() * stat.getGatherMultiplier();
    })
    return gatherRate;
}

export function survivalRateCalculator(stats: Stats) {
    let survivalRate = 0;
    stats.stats.forEach(stat => {
        survivalRate += stat.getValue() * stat.getSurvivalMultiplier();
    })
    return survivalRate;
}

export function huntRateCalculator(stats: Stats) {
    let huntRate = 0;
    stats.stats.forEach(stat => {
        huntRate += stat.getValue() * stat.getHuntMultiplier();
    })
    return huntRate;
}

export function consumptionRateCalculator(stats: Stats) {
    let consumptionRate = 1;
    stats.stats.forEach(stat => {
        consumptionRate += stat.getValue() * stat.getHuntMultiplier();
    })
    return consumptionRate;
}