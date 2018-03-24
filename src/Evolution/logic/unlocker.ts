export class Unlocker<T> {
    unlockables: Unlockable<T>[];
    constructor(getDefaults: () => Unlockable<T>[]) { this.unlockables = getDefaults(); }

    getUnlockedItems(dna: number) : T[] {
        let itemsToReturn = [];
        let itemsToKeep = [];
        this.unlockables.forEach(unlockable => {
            if (unlockable.dnaToUnlock<=dna) {
                itemsToReturn.push(unlockable.item);
                return;
            }
            itemsToKeep.push(unlockable);
        })
        this.unlockables = itemsToKeep;
        return itemsToReturn;
    }
}

export abstract class Unlockable<T> {
    public constructor(public item: T, public dnaToUnlock: number) { }
}