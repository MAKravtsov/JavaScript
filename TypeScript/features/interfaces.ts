interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summery(): string;
}

// объект должен совпадать по именам свойств с интерфейсом, если не указываем явно тип
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summery(): string {
        return `Name: ${this.name}`;
    }
}

const printVehicle = (vehicle: Vehicle): void => {
    /*
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken?: ${vehicle.broken}`);
    */
   console.log(vehicle.summery());
}

printVehicle(oldCivic);