let oranges: number = 4;
oranges = 5;

let speed: string = "123";

let nothing: null = null;
let nothing1: undefined = undefined;

// built-in objects
let now: Date = new Date();

// array
let color: string[] = ["red", "blue"]

// classes
class Car {

}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// functions
let logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// when to use type annotations
// 1) fync returns the any type
const json = '{"x": 10, "y": 20}';
const parsed: { x: number; y: number } = JSON.parse(json);
console.log(parsed);

// 2) variables whoes type can't be inferred
let a: boolean | number = false;
a = 10;