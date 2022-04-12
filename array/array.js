//Arrays
const numbers1 = [1, 2, 3, 4];//length = 4
const numbers2 = new Array(1, 2, 3, 4);
const numbers3 = '1, 2, 3, 4'.split(', ');

//array function
//join
const fruits = ['Apple', 'Banana'];
const fruitsString = fruits.join(', ');

const fruits1 = ['Apple', 'Banana'];
fruits[0]; // Apple

//indexof
const fruits2 = ['Apple', 'Banana'];
console.log(fruits2.indexOf('Banana'));//1

//include
const fruits3 = ['Apple', 'Banana'];
fruits.includes('Banana');

//push
const fruits4 = ['Apple', 'Banana'];
const newLength = fruits4.push('Orange');

//pop
const fruits5 = ['Apple', 'Banana', 'Orange'];
const removedItem = fruits5.pop();

//splice
const fruits6 = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
const start = -3;
const removedItems = fruits6.splice(start);

//shift
const fruits7 = ['Apple', 'Banana'];
const removedItem = fruits7.shift();

//unshift
const fruits8 = ['Banana', 'Mango'];
const newLength = fruits8.unshift('Strawberry');

//concat
const fruits9 = ['Banana', 'Apple'];
const fruits10 ['Orange', 'Mango'];
const fruits11 = fruits9.concat(fruits10);



