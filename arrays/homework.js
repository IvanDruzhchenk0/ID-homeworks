// Завдання 1
// Дано масив міст, використовуючи метод map(), поверніть/створіть масив, який включатиме всі міста,
// у яких лише перша літера кожної назви міста написана з великої літери.

const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

const citiesCapitalized = cities.map((city) => {
  return city[0].toUpperCase() + city.slice(1);
});
console.log(citiesCapitalized);

const citiesCapitalized_var2 = cities.map((city) => {
  let firstLetterUpperCase = city.slice(0, 1).toUpperCase();
  return firstLetterUpperCase + city.slice(1);
});
console.log(citiesCapitalized_var2);

//Завдання 2
//Використовуючи цикл forEach(), console.log записує назви всіх елементів у масиві citiesCapitalized,
//включаючи число, яке представляє позицію елемента, починаючи з 1 для першого (індексного) елемента.

let result = [];
cities.forEach((city, index) => {
  let capitalizedCityName = city[0].toUpperCase() + city.slice(1);
  result.push(`${index + 1}. ${capitalizedCityName}`);
});
console.log(result);
