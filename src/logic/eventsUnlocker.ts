import { Event } from "./event";
import { Stats } from "./stats";
import { Rates } from "./rates";
import { Unlocker, Unlockable } from "./unlocker";

export function getEventUnlocker() {
    return new Unlocker<Event>(getUnlockableEvents);
}

class UnlockableEvent extends Unlockable<Event> { }

function getUnlockableEvents() {
    const event = new Event("Oops, you just got worse at eating",
        (stats: Stats) => {
            const browsing = stats.getStat("Browsing")
            if (browsing && browsing.getValue() > 0) {
                browsing.decrease()
            }
        }
    )
    let unlockableStats = [
        new UnlockableEvent(event, 500)
    ];
    return unlockableStats;
}