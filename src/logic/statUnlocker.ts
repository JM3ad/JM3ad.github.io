import {Stat} from "./stats";

export class StatUnlocker {
    unlockableStats: UnlockableStat[];
    constructor() { this.unlockableStats = getUnlockableStatsList(); }

    getUnlockedStats(dna: number) {
        let statsToReturn = [];
        let statsToKeep = [];
        this.unlockableStats.forEach(unlockable => {
            if (unlockable.dnaToUnlock < dna) {
                statsToReturn.push(unlockable.stat);
                return;
            }
            statsToKeep.push(unlockable);
        })
        this.unlockableStats = statsToKeep;
        return statsToReturn;
    }

}

class UnlockableStat {
    constructor(public stat: Stat, public dnaToUnlock: number) { }
}

function getUnlockableStatsList() {
    const camouflage = new Stat("Camouflage", 1.5, 1, 1.1, 1.02);
    const swimming = new Stat("Swimming", 1.3, 1.1, 1.1, 1.05);
    let unlockableStats = [
        new UnlockableStat(camouflage, 2500),
        new UnlockableStat(swimming, 10000)
    ];
    return unlockableStats;
}