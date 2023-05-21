class Vehicle {
    color: string = "green";
    private hasAbs: boolean;

    // можно сократить запись путем добавления модификатора доступа
    // нет возможности нескольких конструкторов
    constructor(hasAbs: boolean, 
        protected age: number) {
        this.hasAbs = hasAbs;
    }

    // по умолчанию public
    drive(): void {
        console.log(`I'm driving`);
    }

    stop(): void {
        if(this.hasAbs) {
            console.log(`I'm stopped`);
        } else {
            console.log(`I'm still driving`);
        }
    }

    protected beep(): void {
        console.log(`BEEEEP`);
    }
}

// наследование
class Car extends Vehicle {
    constructor(protected wheel: number, 
        hasAbs: boolean,
        age: number) {
        // вызов контруктора класса родителя обязательно!!!
        super(hasAbs, age)
    }

    // переопределение метода
    drive(): void {
        console.log(`I'm driveing from car`)
    }

    private go(): void {
        console.log(`I'm here`);
    }

    startDrivingProcess(): void {
        this.beep();
        this.go();
    }
}

const vehicle = new Vehicle(true, 20);
console.log(vehicle.color);
vehicle.drive();
vehicle.stop();

const car = new Car(4, false, 30);
car.drive();
car.startDrivingProcess();
car.stop();