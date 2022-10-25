class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    isEmpty() {
        if (this.weight <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    decrease() {
        if (this.isEmpty()) {
            alert('Táo đã ăn hết');
        }
        else {
            this.weight--;
        }
    }
}
class Human {
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getName() {
        return this.name;
    }
    setName() {
        this.name = name;
    }
    getWeight() {
        return this.weight;
    }
    isMale() {
        if (this.gender === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    getGender() {
        if (this.isMale()) {
            return "Male";
        }
        else {
            return "Female";
        }
    }
    setWeight(weight) {
        this.weight = weight;
    }
    say(string) {
        console.log(string);
    }
    checkAplle(apple) {
        return apple.isEmpty();
    }
    eatApple(apple) {
        if (apple.getWeight() > 0) {
            apple.decrease();
            this.weight++;
        }
        else {
            alert("Táo đã ăn hết");
        }
    }
    getInfoHuman(human) {
        alert(`${human.name} ${human.weight} ${human.gender}`);
    }
}
 let apple1 = new Apple(10);
let adam = new Human("Adam", 1, 70);
let eva = new Human("Eva", 0, 57);

adam.say(`I am Adam </br>`);
eva.say(`I am Eva </br>`);
 while (apple1.isEmpty() !== true) {
     document.write(`Adam ăn táo </br>`);
     adam.eatApple(apple1);
     document.write(`Quả táo còn: `);
     document.write(`${apple1.getWeight()} đơn vị <br>`);
     document.write(`Cân nặng của Adam là: ${adam.getWeight()} đơn vị <br>`);
     document.write(`<br>`);

     document.write(`Eva ăn táo <br>`);
     eva.eatApple(apple1);
     document.write(`Quả táo còn: `);
     document.write(`${apple1.getWeight()} đơn vị <br>`);
     document.write(`Cân nặng của Eva là: ${eva.getWeight()} đơn vị <br>`);
     document.write(`<br>`);
 }
 adam.getInfoHuman(adam);
 eva.getInfoHuman(eva);