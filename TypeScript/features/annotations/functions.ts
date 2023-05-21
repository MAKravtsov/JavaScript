const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): void => {
    a - b;
}

function devide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (msg: string): void => {
    console.log(msg);
}

// тип never - конец функции будет недоступен никогда
const throwError = (msg: string): never => {
    throw new Error(msg);
}

const forecast = {
    date: new Date(),
    weather: "sunny"
}

// деструктуризация
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(weather);
}

logWeather(forecast);