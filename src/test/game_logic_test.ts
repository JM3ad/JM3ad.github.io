import * as game from './../main/gameLogic';
import {expect} from 'chai';
import 'mocha';

describe('getDefaultSpecies function', () => {
    it('should return a species', () => {
        const species = game.getDefaultSpecies();
        expect(species).to.be.instanceOf(game.Species);
    })
})

describe('game', () => {

    it('should have species with equal set up at start', () => {
        let twoPlayer = new game.Game(2);
        expect(twoPlayer.species[0].populationSize).to.equal(twoPlayer.species[1].populationSize);
        expect(twoPlayer.species[0].stats).to.deep.equal(twoPlayer.species[1].stats);
        expect(twoPlayer.species[0].features).to.deep.equal(twoPlayer.species[1].features);
    })

    it('should see same updated populations as population directly', () => {
        const twoPlayer = new game.Game(2);
        const food = 100;
        twoPlayer.species[0].updatePopulation(food / 2);
        const populationFirst = twoPlayer.species[0].populationSize;
        //Assumes food equally split
        twoPlayer.updatePopulations(food);
        expect(populationFirst).to.equal(twoPlayer.species[0].populationSize);
    })
})

describe('gather rate', () => {
    it('should depend on speed', () => {
        const species = game.getDefaultSpecies();
        const initialGatherRate = species.getGatherRatePerPop();
        species.stats.speed *= 10;
        const latterGatherRate = species.getGatherRatePerPop();
        expect(initialGatherRate).to.not.equal(latterGatherRate);
    })
})

describe('population size', () => {
    it('should depend on food per pop', () => {
        const firstSpecies = game.getDefaultSpecies();
        const secondSpecies = game.getDefaultSpecies();
        secondSpecies.stats.foodPerPop *= 2;
        firstSpecies.updatePopulation(10);
        secondSpecies.updatePopulation(10);
        expect(firstSpecies.populationSize).to.equal(secondSpecies.populationSize * 2);
    })

    it('should depend on gather rate', ()=>{
        const twoPlayer = new game.Game(2);
        const food = 100;
        const speciesA = twoPlayer.species[0];
        const speciesB = twoPlayer.species[1];
        speciesA.stats.speed *= 10;
        twoPlayer.updatePopulations(food);
        expect(speciesA.populationSize / speciesA.getGatherRatePerPop()).to.equal(speciesB.populationSize / speciesB.getGatherRatePerPop());
    })
})

describe('dna', () => {
    it('should increase when population eats', () => {
        const speciesA = game.getDefaultSpecies();
        const initialDna = speciesA.dna;
        speciesA.updatePopulation(10);
        expect(speciesA.dna).to.be.greaterThan(initialDna);
    })
})