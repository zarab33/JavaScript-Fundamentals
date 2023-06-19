class Thermostat {
    constructor () {
        this.temperature = 20;
        this.powerSavingMode = false;

    }
getTemperature() {
    return this.temperature
}
up() {
    return this.temperature += 1;
}
down() {
    return this.temperature -= 1;
}
setPowersavingMode() {

}
reset() {

}
}

module.exports = Thermostat;