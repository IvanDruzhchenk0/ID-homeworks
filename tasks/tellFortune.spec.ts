// 3. Напишіть функцію з назвою tellFortune, яка:
// приймає 4 аргументи: кількість дітей, ім'я партнера, географічне розташування, посада.
// виводить ваші статки на екран так: «Ти будеш X в Y, одружений на Z і матимеш N дітей» + юніт тести

import { test, expect } from "@playwright/test";

function tellFortune(
  numOfChildren: Number,
  partnerName: String,
  location: String,
  position: String
) {
  let array = [numOfChildren, partnerName, location, position];
  return `Ти будеш ${array[3]} в ${array[2]}, одружений на ${array[1]} і матимеш ${array[0]} дітей`;
}
tellFortune(11, "Anya", "Barca", "Chef");

test.describe("Unit tests", () => {
  test("Positive input", async ({}) => {
    const result = tellFortune(11, "Anya", "Barca", "Chef");
    expect(result).toEqual(
      "Ти будеш Chef в Barca, одружений на Anya і матимеш 11 дітей"
    );
  });
});
