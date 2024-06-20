// 4. Напишіть функцію з назвою сalculateDogAge, яка:
// приймає 1 аргумент: вік вашого цуценя.
// обчислює вік вашої собаки на основі коефіцієнта перетворення 1 людського року в 7 собачих років.
// виводить результат на екран таким чином: "Вашому песику NN років у собачих роках!"
// Бонус: додайте додатковий аргумент до функції, яка обчислює коефіцієнт перетворення людських років у собачі.

import { test, expect } from "@playwright/test";

function сalculateDogAge(humanAge, coef) {
  if (typeof humanAge == "number" && typeof coef == "number" && humanAge > 0) {
    let dogAge = (humanAge * coef).toFixed(2);
    return `Вашому песику ${dogAge} років у собачих роках`;
  } else if (coef <= 0) {
    return "Coefficient can not equal or be less than zero!";
  } else {
    throw new Error("Please, provide a valid input!");
  }
}

test.describe("Unit tests", () => {
  test("Positive value", async ({}) => {
    const result = сalculateDogAge(10, 7);
    expect(result).toEqual(`Вашому песику 70 років у собачих роках`);
  });

  test("Coef is zero", async ({}) => {
    const result = сalculateDogAge(10, 0);
    expect(result).toEqual("Coefficient can not equal or be less than zero!");
  });
});
