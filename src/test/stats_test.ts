import * as stats from './../logic/stats';
import { expect } from 'chai';
import 'mocha';

describe('getDefaultStats function', () => {
    const defaultStats = stats.getDefaultStats();

    it('should have a speed stat', () => {
        const speed = defaultStats.getStat("Speed");
        expect(speed).to.be.instanceOf(stats.Stat);
    })
})

describe('stats increase method', () => {

    it('should have value increase by one', () => {
        const speedStat = stats.getDefaultStats().getStat("Speed");
        const initialValue = speedStat.getValue();
        speedStat.increase();
        const updatedValue = speedStat.getValue();
        expect(initialValue).to.equal(updatedValue - 1);
    })

    it('should increase the cost of the next increase', () => {
        const speedStat = stats.getDefaultStats().getStat("Speed");
        const initialCost = speedStat.getCost();
        speedStat.increase();
        const updatedCost = speedStat.getCost();
        expect(initialCost).to.be.lessThan(updatedCost);
    })
})