import { getDefaultSpecies, Species } from './../logic/species';
import { expect } from 'chai';
import 'mocha';

describe('getDefaultSpecies function', () => {
    const species = getDefaultSpecies();

    it('should return a species', () => {
        expect(species).to.be.instanceOf(Species);
    })

    it('should return a species with population 2', () => {
        expect(species.populationSize).to.equal(2);
    })
})

describe('gather rate', () => {
    const species = getDefaultSpecies();

    it('should depend on speed', () => {
        const initialGatherRate = species.getGatherRate();
        species.stats.getStat("Speed").increase();
        const latterGatherRate = species.getGatherRate();
        expect(initialGatherRate).to.be.lessThan(latterGatherRate);
    })
})

describe('population', () => {

    it('should increase when food reaches 50', () => {
        const species = getDefaultSpecies();
        const initialPop = species.populationSize;
        species.food = 20;
        species.updatePopulation();
        expect(species.populationSize).to.equal(initialPop);

        species.food = 50;
        species.updatePopulation();
        expect(species.populationSize).to.be.greaterThan(initialPop);
    })
})

describe('consumption rate', () => {

    it('should depend on size', () => {
        const species = getDefaultSpecies();
        const initialConsumptionRate = species.getConsumptionRate();
        species.stats.getStat("Size").increase();
        const updatedConsumptionRate = species.getConsumptionRate();
        expect(initialConsumptionRate).to.be.lessThan(updatedConsumptionRate);
    })
})