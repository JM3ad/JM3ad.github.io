import * as game from './../main/gameLogic';
import {expect} from 'chai';
import 'mocha';

describe('createNewSpecies function', () => {
    it('should return a species', ()=>{
        const species = game.createNewSpecies();
        expect(species).to.be.instanceOf(game.Species);
    })

    it('should have default stats', () => {
        const species = game.createNewSpecies();
        expect(species.stats).to.deep.equal(game.getDefaultStats());
    })
})

describe('game', () => {
    it('should have species with equal set up at start', () => {
        let twoPlayer = new game.Game(2);
        expect(twoPlayer.species[0].populationSize).to.equal(twoPlayer.species[1].populationSize);
        expect(twoPlayer.species[0].stats).to.deep.equal(twoPlayer.species[1].stats);
        expect(twoPlayer.species[0].features).to.deep.equal(twoPlayer.species[1].features);
    })

    it('should share food in correct proportion', () => {
        let twoPlayer = new game.Game(2);
        //Assumption: Gather rate is determined entirely by stats.
        twoPlayer.species[0].stats.foodPerPop = 10;
        twoPlayer.species[1].stats.foodPerPop = 1;
        twoPlayer.updatePopulations(110);
        expect(twoPlayer.species[0].populationSize).to.equal(twoPlayer.species[1].populationSize / 10);
    })
})