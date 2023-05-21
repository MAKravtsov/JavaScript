const colors = ['red', 'blue', 'black'];

const dates = [new Date(), new Date()];

const fruitByColor = [
    ['tomato'],
    ['potato'],
    ['apple']
]

// Help with inference when extracting values
const color1 = colors[0];
const color2 = colors.pop();

// prevent incopatible values
/*
    colors.push(true); // Error
*/

// Help with 'map'
colors.map((color) => {
    return color.toUpperCase();
})

// flexible types
const importantDate = [new Date(), '00202'];
const importantDate1: (Date | string)[] = [new Date()];