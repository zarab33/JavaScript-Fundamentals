const Thermostat = require('./thermostat');

describe('Thermostat', () => {
    it('Thermostat initializes with temperature 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
    })

    it('should increase the temperature by 1 degrees', () => {
    const temperatureDouble = {up: () => 21};
    const thermostat = new Thermostat();
    thermostat.up(temperatureDouble)
    expect(thermostat.getTemperature()).toBe(21);
    })

    it('should increase the temperature by 2 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(22);
    })

    it('should decrease the temperature by 1 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(19);
    })

    it('should turn powersaving mode to true, max temperture is 25 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(19);
    })
});