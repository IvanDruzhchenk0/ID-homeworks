// ДЗ #array

// 1. Напишіть JavaScript функцію для перевірки, чи є аргумент масивом чи ні.
// Наприклад:

// console.log(is_array('w3resource')); //false
// console.log(is_array([1, 2, 4, 0])); // true

function is_array(arr) {
  if (arr instanceof Array) {
    return true;
  } else {
    return false;
  }
}
is_array([1, 2, 4, 0]);

// 2. Напишіть JavaScript функцію для клонування масиву.

// Наприклад:
// console.log(array_Clone([1, 2, 4, 0]) // [1, 2, 4, 0]
// console.log(array_Clone([1, 2, [4, 0]])); //[1, 2, [4, 0]]

function array_Clone(array) {
  let clonedArray = array.map((el) => el);
  return clonedArray;
}
array_Clone([1, 2, [4, 0]]);

// 3. Напишіть JavaScript функцію для отримання першого елемента масиву. Передача параметра 'n' поверне перші 'n' елементів масиву.

// Наприклад:
// console.log(first([7, 9, 0, -2])); //7
// console.log(first([],3)); //[]
// console.log(first([7, 9, 0, -2],-3)); //[7, 9, 0, -2]

function first(array, n = 1) {
  if (n == 1) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}
first([7, 9, 0, -2], 4);

// 4. Напишіть JavaScript функцію для отримання останнього елемента масиву. Передача параметра 'n' поверне останні 'n' елементів масиву.

// Наприклад:
function last(array, n = 1) {
  if (n == 1) {
    return array[array.length - 1];
  } else {
    return array.slice(array.length - n, array.length);
  }
}
last([7, 9, 0, -2], 6);
// console.log(last([7, 9, 0, -2])); //-2
// console.log(last([7, 9, 0, -2],3)); //[9, 0, -2]
// console.log(last([7, 9, 0, -2],6)); //[7, 9, 0, -2]

// 5. Напишіть просту JavaScript програму для об'єднання всіх елементів наступного масиву в рядок.

// Наприклад:
const myColor = ["Red", "Green", "White", "Black"];
function toString(array) {
  return array.toString();
}
toString(myColor);

// без вбудованого методу .toString()
function toString2(array) {
  let string = "";
  array.forEach((element) => {
    string = string + element + ",";
  });
  return string.slice(0, string.length - 1);
}
console.log(toString2(myColor));
// const myColor = ["Red", "Green", "White", "Black"]; => "Red,Green,White,Black"

// BONUS LVL:
// 6. Напишіть функцію яка б перетворювала Array на Object
// де index це key, а значення це value
let array = [
  ["JS", "JavaScript"],
  ["GFG", "GeeksforGeeks"],
];

function toObject(arr) {
  let object = {};

  for (let [key, value] of arr) {
    object[key] = value;
  }
  return object;
}
toObject(array);
// 7. Напишіть функцію яка б перетворювала Object на Array

// наприклад
// {
// test: 'Foo",
// bar: "Test"
// }
let obj = { test: "Foo", bar: "Test" };

function toArray(obj) {
  let arr = [];

  for (let key in obj) {
    arr.push([key, arr[key]]);
  }
  return arr;
}
toArray(obj);

// повинен виглядати як
// [['test', 'Foo'], ['bar', 'Test']]
