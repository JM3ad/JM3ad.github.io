import { Stat } from "./stats";
import { Rates } from "./rates";
import { Unlocker, Unlockable } from "./unlocker";

export function getStatUnlocker(){
    return new Unlocker<Stat>(getUnlockableStatsList);
}

class UnlockableStat extends Unlockable<Stat> {}

function getUnlockableStatsList() {
    const breedingRates = [];
    breedingRates[Rates.Breeding] = 1.05;
    breedingRates[Rates.Dying] = 1.001;
    breedingRates[Rates.Consumption] = 1.005;
    const breeding = new Stat("Breeding", breedingRates);
    const camouflageRates = [];
    camouflageRates[Rates.Dying] = 0.999;
    camouflageRates[Rates.Consumption] = 1.01;
    const camouflage = new Stat("Camouflage", camouflageRates, 20);
    let unlockableStats = [
        new UnlockableStat(breeding, 500),
        new UnlockableStat(camouflage, 2500)
    ];
    return unlockableStats;
}