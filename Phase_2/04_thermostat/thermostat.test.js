const Thermostat = require('./thermostat');

describe('Thermostat', () => {
    it('Thermostat initializes with temperature 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(`20°`);
    })
});