import { Log } from "./../logic/log";
import { expect } from 'chai';
import 'mocha';

describe('logs', () => {
    it('should add messages to the front of the logs', () => {
        const log = new Log();

        log.addMessage("aMessage");
        log.addMessage("another");

        const finalMessage = "The latest message";
        log.addMessage(finalMessage);

        expect(log.messages[0]).to.equal(finalMessage);
    })

    it('should keep the number of elements to a maximum of the logsize', () => {
        const log = new Log();
        const logSize = log.logSize;
        for (let i = 0; i < 2 * logSize + 1; i++) {
            log.addMessage("a message");
        }
        expect(log.messages.length).to.equal(logSize);
    })
});