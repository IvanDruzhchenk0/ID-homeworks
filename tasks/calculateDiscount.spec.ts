// 1. Напишіть функцію яка б вираховувала знижку на товар. Функція повина мати два параметри ціна до знижки і відсоток знижки
// Повертати функція повинна ціну після знижки + юніт тести

import { test, expect } from "@playwright/test";

function calculateDiscount(price, discount) {
  if (
    Number.isInteger(price) &&
    Number.isInteger(discount) &&
    price > 0 &&
    discount >= 0
  ) {
    return (price * ((100 - discount) / 100)).toFixed(2);
  } else if (price == 0) {
    return "Please, enter current price to calculate discount!";
  } else if (price < 0 || discount < 0) {
    return "Please, pass only positive values!";
  } else {
    throw new Error("You should pass integers as input!");
  }
}

test.describe("Unit tests", () => {
  test("Positive value", async ({}) => {
    const result = calculateDiscount(200, 10);
    expect(result).toEqual("180.00");
  });

  test("Discount is zero", async ({}) => {
    const result = calculateDiscount(200, 0);
    expect(result).toEqual("200.00");
  });

  test("Price is zero", async ({}) => {
    const result = calculateDiscount(0, 10);
    expect(result).toEqual(
      "Please, enter current price to calculate discount!"
    );
  });

  test("Price is minus value", async ({}) => {
    const result = calculateDiscount(-200, 0);
    expect(result).toEqual("Please, pass only positive values!");
  });

  test("Discount is minus value", async ({}) => {
    const result = calculateDiscount(200, -10);
    expect(result).toEqual("Please, pass only positive values!");
  });
});
