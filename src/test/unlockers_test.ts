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
    it("should not return anything at dba below it's minimum trigger", () => {

    })

    it("should return only one item between the two triggers", () => {

    })

    it("should not return the same item a second time", () => {

    })

    it("should return the final item only after it's reached", () => {

    })
})
