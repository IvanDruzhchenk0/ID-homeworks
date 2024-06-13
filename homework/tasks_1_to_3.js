// Task 1. Виведіть в консоль числа від 1 до 345 (while)
let i = 0;

while (i < 345) {
    i++;
    console.log(i);
}

// Task 2. Знайти суму чисел від 1 до 100 (тобто  1 + 2 + 3 + 4 + 5 + 6....)
let sum = 0;

for (let i = 1; i <=100; i++) {
    sum = sum + i;
}
console.log(sum);

// Task 3. Виведіть в консоль числа від 241  до 1 (do while)
let j = 242;

do {
    j--;
    console.log(j)
} while (j > 1);