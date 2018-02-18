import { getClimate } from '../main/main';
import {expect} from 'chai';
import 'mocha';

describe('getClimate function', () => {
    it('should return a string', (){
        const climate = getClimate();
        expect(climate).to.equal('Hot');
    })
})