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

   it('Increases the temperature to the maximum of 25 when Power Saving Mode is on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('Resets the temperature back to 20 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.up(); // Increase temperature to 21
    thermostat.reset(); // Reset temperature
    expect(thermostat.getTemperature()).toBe(20);
  });
});