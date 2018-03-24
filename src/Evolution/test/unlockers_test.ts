import { Unlocker, Unlockable} from './../logic/unlocker';
import { expect } from 'chai';
import 'mocha';

class UnlockableString extends Unlockable<string>{ }
const getDefaultMockUnlockables = () => {
    return [
        new UnlockableString("hello", 1),
        new UnlockableString("world", 100)
        ];
}
function getMockUnlocker() { return new Unlocker<string>(getDefaultMockUnlockables); }

describe("Unlocker", () => {
    const unlocker = getMockUnlocker();
    it("should not return anything at dna below it's minimum trigger", () => {
        const unlocked = unlocker.getUnlockedItems(0);
        expect(unlocked.length).to.equal(0);
    })

    it("should return only one item between the two triggers", () => {
        const unlocked = unlocker.getUnlockedItems(10);
        expect(unlocked.length).to.equal(1);
        expect(unlocked[0]).to.equal("hello");
    })

    it("should not return the same item a second time", () => {
        const unlocked = unlocker.getUnlockedItems(10);
        expect(unlocked.length).to.equal(0);
    })

    it("should return only the final item only after it's reached the necessary amount", () => {
        const unlocked = unlocker.getUnlockedItems(100);
        expect(unlocked.length).to.equal(1);
        expect(unlocked[0]).to.equal("world");
    })
})
