import { getDefaultSpecies, Species } from './../logic/species';
import { Log } from "./../logic/log";
import { expect } from 'chai';
import 'mocha';

describe('getDefaultSpecies function', () => {
    const species = getDefaultSpecies(new Log());

    it('should return a species', () => {
        expect(species).to.be.instanceOf(Species);
    })

    it('should return a species with population 2', () => {
        expect(species.populationSize).to.equal(2);
    })
})

describe('population', () => {

    it('should increase when food reaches 50', () => {
        const species = getDefaultSpecies(new Log());
        const initialPop = species.populationSize;
        species.food = 20;
        species.updatePopulation();
        expect(species.populationSize).to.equal(initialPop);

        species.food = 50;
        species.updatePopulation();
        expect(species.populationSize).to.be.greaterThan(initialPop);
    })
})