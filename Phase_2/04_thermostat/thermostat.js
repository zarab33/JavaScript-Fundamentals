class Thermostat {
    constructor () {
        this.temperature = 20;
        this.powerSavingMode = false;

    }
    getTemperature() {
                return this.temperature;
    }

     up() {
        if (this.powerSavingMode && this.temperature >= 25) {
            return this.temperature;
        }
            return this.temperature += 1;
    }


    down() {
        return this.temperature -= 1;
    };

    setPowerSavingMode(mode) {
            this.powerSavingMode = mode;
            if (this.powerSavingMode && this.temperature > 25) {
            this.temperature = 25;
            }
    };

    reset() {
        this.temperature = 20;
}
}

module.exports = Thermostat;