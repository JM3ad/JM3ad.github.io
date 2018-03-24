enum TemperatureOptions {
    Cold,
    Mild,
    Hot
}

export class Climate {
    public temperature: Temperature;
    constructor() { this.temperature = new Temperature(); }

    getFoodAbundanceMultiplier() {
        return this.temperature.getFoodAbundanceMultiplier();
    }
}

class Temperature {
    private level: number;
    constructor() {
        this.level = 0;
    }

    canBeIncreased() {
        return this.level < TemperatureOptions.Hot;
    }

    canBeDecreased() {
        return this.level > TemperatureOptions.Cold;
    }

    increase() {
        this.level++;
    }

    decrease() {
        this.level--;
    }

    getDescription() {
        return this.level.toString();
    }

    getFoodAbundanceMultiplier() {
        return 1 - (Math.abs(this.level) / 10);
    }
}
