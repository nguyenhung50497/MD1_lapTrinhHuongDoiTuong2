class ElectricLamp {
    constructor(status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    turnOn() {
        return true;
    }
    turnOff() {
        return false;
    }
}

class SwitchButton {
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    getLamp() {
        return this.lamp;
    }
    setLamp(lamp) {
        this.lamp = lamp;
    }
    connetToLamp(ElectricLamp) {
        return this.lamp = ElectricLamp;
    }
    switchOn() {
        this.lamp.status = true;
        return this.status = true;
    }
    switchOff() {
        this.lamp.status = false;
        return this.status = false;
    }
}

let electricLamp1 = new ElectricLamp(false);
let switchButton1 = new SwitchButton(false, electricLamp1);

for (let i=0; i<10; i++) {
    console.log(switchButton1.switchOn());
    console.log(electricLamp1.getStatus() + ' Đèn đang bật');
    console.log(switchButton1.switchOff());
    console.log(electricLamp1.getStatus() + ' Đèn đang tắt');
}