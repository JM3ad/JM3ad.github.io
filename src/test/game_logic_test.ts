import { Game } from './../logic/game';
import { Species, getDefaultSpecies } from './../logic/species';
import { expect } from 'chai';
import 'mocha';

describe('getDefaultSpecies function', () => {
    it('should return a species', () => {
        const species = getDefaultSpecies();
        expect(species).to.be.instanceOf(Species);
    })
})

describe('game logs',()=>{
    it('should add messages to the front of the logs', () => {
        const game = new Game();

        game.addLogMessage("aMessage");
        game.addLogMessage("another");

        const finalMessage = "The latest message";
        game.addLogMessage(finalMessage);

        expect(game.getLogMessages()[0]).to.equal(finalMessage);
    })

    it('should keep the number of elements to a maximum of the logsize', () => {
        const game = new Game();
        const logSize = game.logSize;
        for (let i = 0; i < 2 * logSize + 1; i++) {
            game.addLogMessage("a message");
        }
        expect(game.getLogMessages().length).to.equal(logSize);
    })
});