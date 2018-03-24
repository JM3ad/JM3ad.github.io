import { rateCalculator } from "./../logic/calculator";
import { Stats, Stat } from "./../logic/stats";
import { Rates } from "./../logic/rates";
import { expect } from 'chai';
import 'mocha';

describe('calculator', () => {
    it('should return 0 rate if no relevant stats', () => {
        expect(rateCalculator(new Stats(), Rates.Breeding)).to.equal(0);
    })

    it('should return negative for stats with rate under 1', () => {
        const stats = new Stats();
        const rates = [];
        rates[Rates.Breeding] = 0.5
        const statName = "badBreeding";
        stats.addStat(new Stat(statName, rates));
        stats.getStat(statName).increase();
        expect(rateCalculator(stats, Rates.Breeding)).to.be.lessThan(0);
    })

    it('should return positive for stats with rates >1', () => {
        const stats = new Stats();
        const rates = [];
        rates[Rates.Breeding] = 1.5
        const statName = "goodBreeding";
        stats.addStat(new Stat(statName, rates));
        stats.getStat(statName).increase();
        expect(rateCalculator(stats, Rates.Breeding)).to.be.greaterThan(0);
    })

    it('should ignore stats with irrelevant rates', () => {
        const stats = new Stats();
        const rates = [];
        rates[Rates.Breeding] = 1.5
        const statName = "goodBreeding";
        stats.addStat(new Stat(statName, rates));
        stats.getStat(statName).increase();
        expect(rateCalculator(stats, Rates.Gather)).to.equal(0);
    })
});