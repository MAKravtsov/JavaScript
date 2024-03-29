import * as faker  from 'faker';
import {Mappable} from "./Mappable";

// можно использовать export по умолчанию (рекоммендуется не использовать!!!)
export default 'thing';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markerContent(): string {
        return `This name: ${this.name}`;
    }
}