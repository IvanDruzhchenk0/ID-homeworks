// 2. Напишіть функцію яка б перетворювала градуси Цельсія у Фаренгейта.
// Функція повина мати один параметр (string)
// якщо були передані градуси у фаренгейтах, повертається градуси в цельсіях
// якщо були передані градуси у цельсіяї, повертаються градуси у фаренгейтах  + юніт тести

import { test, expect } from "@playwright/test";

function convertDegrees(string) {
  if (typeof string === "string" && string.match(/C/g)) {
    string = parseInt(string, 10);
    let convertedTemperature = (string * 1.8 + 32.0).toFixed(2);
    return `${convertedTemperature} F`;
  } else if (typeof string === "string" && string.match(/F/g)) {
    string = parseInt(string, 10);
    let convertedTemperature = ((string - 32.0) / 1.8).toFixed(2);
    return `${convertedTemperature} C`;
  } else {
    throw new Error(
      "Please, provide input data in following format: '50 C' or '50 F'"
    );
  }
}

test.describe("Unit tests", () => {
  test("From Celsius positive", async ({}) => {
    const result = convertDegrees("32 C");
    expect(result).toEqual("89.60 F");
  });

  test("From Celsius negative", async ({}) => {
    const result = convertDegrees("-32 C");
    expect(result).toEqual("-25.60 F");
  });

  test("From Fahrenheit positive", async ({}) => {
    const result = convertDegrees("100 F");
    expect(result).toEqual("37.78 C");
  });

  test("From Fahrenheit negative", async ({}) => {
    const result = convertDegrees("-100 F");
    expect(result).toEqual("-73.33 C");
  });
});
