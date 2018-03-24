import { getDefaultSpecies, Species } from './../logic/species';
import { Log } from "./../logic/log";
import { Config } from "./../logic/config";
import * as stats from "./../logic/stats";
import { expect } from 'chai';
import 'mocha';

describe('getDefaultSpecies function', () => {
    const species = getDefaultSpecies(new Log());

    it('should return a species', () => {
        expect(species).to.be.instanceOf(Species);
    })

    it('should return a species with standard population', () => {
        expect(species.populationSize).to.equal(Config.StartingPop);
    })
})

describe('population', () => {

    it('should not increase if food < foodPerBirth',()=>{
        const species = getDefaultSpecies(new Log());
        const initialPop = species.populationSize;
        species.food = Config.FoodPerBirth -1;
        species.updatePopulation();
        expect(species.populationSize).to.equal(initialPop);
    })

    it('should increase only if food >= foodPerBirth', () => {
        const species = getDefaultSpecies(new Log());
        const initialPop = species.populationSize;
        

        species.food = Config.FoodPerBirth;
        species.updatePopulation();
        const updatedPopSize = species.populationSize;
        expect(updatedPopSize).to.be.greaterThan(initialPop);
        
        species.food = Config.FoodPerBirth+10;
        species.updatePopulation();
        expect(species.populationSize).to.be.greaterThan(updatedPopSize);
    })
})

describe('species food', () => {
    it('should decrease by FoodPerBirth on birth', () => {
        const species = getDefaultSpecies(new Log());
        const leftOver = Config.FoodPerBirth - 1;
        species.food = Config.FoodPerBirth + leftOver;
        species.updatePopulation();
        expect(species.food).to.equal(leftOver);
    })

    it('should decrease by FoodPerBirth per birth', () => {
        const species = getDefaultSpecies(new Log());
        const leftOver = Config.FoodPerBirth - 1;
        species.food = Config.FoodPerBirth * 7 + leftOver;
        species.updatePopulation();
        expect(species.food).to.equal(leftOver);
    })
})

describe('species stats', () => {
    const stat = new stats.Stats();
    const statName = "b";
    const rates = []
    stat.addStat(new stats.Stat(statName, rates));

    it('should not increase if insufficient dna available', () => {
        const species = new Species(stat, 2, [], new Log());
        const startingValue = species.stats.getStat(statName).getValue();
        species.dna = species.stats.getStat(statName).getCost()-1;
        species.increaseStat(statName)
        expect(species.stats.getStat(statName).getValue()).to.equal(startingValue);
    })

    it('should subtract the dna cost if increased', () => {
        const species = new Species(stat, 2, [], new Log());
        const startingValue = species.stats.getStat(statName).getValue();
        species.dna = species.stats.getStat(statName).getCost();
        species.increaseStat(statName)
        expect(species.dna).to.equal(0);
    })

    it('should not be able to decrease if 0', () => {
        const species = new Species(stat, 2, [], new Log());
        var statValue = species.stats.getStat(statName).getValue();
        while (statValue > 0) {
            species.decreaseStat(statName);
            statValue = species.stats.getStat(statName).getValue();
        }
        species.decreaseStat(statName);
        expect(species.stats.getStat(statName).getValue()).to.equal(0);
    })
})