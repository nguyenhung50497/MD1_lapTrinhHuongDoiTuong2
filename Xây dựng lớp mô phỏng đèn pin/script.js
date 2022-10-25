class Battery {
    energy;
    constructor(energy) {
        this.energy = energy;
    }
    setEnergy(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
    }
    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}
class FlashLamp {
    status;
    battery;
    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }
    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    light() {
        if (this.status) {
            alert('Lighting');
        }
        else {
            alert('Not lighting');
        }
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}

let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write(`Battery info: ${flashLamp.getBatteryInfo()} </br>`);
flashLamp.light();

document.write('Turn on </br>');
flashLamp.turnOn();
flashLamp.light();