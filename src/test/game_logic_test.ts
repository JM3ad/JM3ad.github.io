import * as game from './../logic/game';
import { Species, getDefaultSpecies } from './../logic/species';
import {expect} from 'chai';
import 'mocha';

describe('getDefaultSpecies function', () => {
    it('should return a species', () => {
        const species = getDefaultSpecies();
        expect(species).to.be.instanceOf(Species);
    })
})