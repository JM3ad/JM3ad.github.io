export class Log {
    messages: string[];
    logSize: number;

    public constructor(){
        this.logSize = 20;
        this.messages = new Array<string>(0);
    }

    addMessage(message) {
        this.messages.unshift(message);
        if (this.messages.length > this.logSize) {
            this.messages.pop();
        }
    }
}