const car = {
    on: false,
    speed: 0,
    turnOn: function () {
        if (this.on) {
            console.log('This car are on.');
        } else {
            this.on = true;
            console.log(`Car ${this.on ? 'on' : 'off'} | Speed: ${this.speed}`);
        }
    },
    turnOff: function () {
        if (this.on) {
            this.on = false;
            this.speed = 0;
            console.log(`Car ${this.on ? 'on' : 'off'} | Speed: ${this.speed}`);
        } else {
            console.log('This car are off.');
        }
    },
    speedUp: function () {
        if (this.on) {
            this.speed += 10; 
            console.log(`Car ${this.on ? 'on' : 'off'} | Speed: ${this.speed}`);
        } else  {
            console.log('Its not impossible to accelerate a car when its turned off.')
        }
    },
    slowDown: function () {
        if (this.on) {
            this.speed -= 10;
            console.log(`Car ${this.on ? 'on' : 'off'} | Speed: ${this.speed}`);
        } else {
            console.log('Its not impossible accelerate a car turned off.')
        }
    }
}

car.turnOff();
car.turnOn();
car.turnOn();
car.speedUp();
car.speedUp();
car.slowDown();
car.turnOff();
car.speedUp();
car.slowDown();