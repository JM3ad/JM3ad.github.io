"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stats = /** @class */ (function () {
    function Stats(speed, size) {
        this.speed = speed;
        this.size = size;
    }
    return Stats;
}());
var Feature = /** @class */ (function () {
    function Feature(gatheringMultiplier, survivalMultiplier, huntingMultiplier) {
        this.gatheringMultiplier = gatheringMultiplier;
        this.survivalMultiplier = survivalMultiplier;
        this.huntingMultiplier = huntingMultiplier;
    }
    return Feature;
}());
var Species = /** @class */ (function () {
    function Species(stats, populationSize, features) {
        this.stats = stats;
        this.populationSize = populationSize;
        this.features = features;
    }
    return Species;
}());
function createNewSpecies() {
    return new Species(getDefaultStats(), 2, []);
}
exports.createNewSpecies = createNewSpecies;
function getDefaultStats() {
    return new Stats(1, 1);
}
exports.getDefaultStats = getDefaultStats;
function getGatherRate(species) {
    return species.stats.speed;
}
exports.getGatherRate = getGatherRate;
function getHuntRate(species) {
    return species.stats.speed;
}
exports.getHuntRate = getHuntRate;
function getSurvivalRate(species) {
    return species.stats.speed;
}
exports.getSurvivalRate = getSurvivalRate;
