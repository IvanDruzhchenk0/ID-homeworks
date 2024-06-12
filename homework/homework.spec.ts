import { test, expect } from '@playwright/test';

function checkForEvenNumber(number) {
  if (typeof number === 'number') {
    if (number % 2 == 0) {
      console.log('You passed even number :)');
      return true;
    } else {
      console.log('You passed odd number :)');
      return false;
    }
  } else {
    throw new Error('You passed wrong type of input :(');
  }
}

test.describe('Unit tests for first function', () => {
  test('is even - max positive value', async () => {
    const result = checkForEvenNumber(Number.MAX_SAFE_INTEGER - 1);
    expect(result).toBeTruthy();
  });

  test('is even - default positive value', async () => {
    const result = checkForEvenNumber(2);
    expect(result).toBeTruthy();
  });

  test('is even - default negative value', async () => {
    const result = checkForEvenNumber(-2);
    expect(result).toBeTruthy();
  });

  test('is even - max negative value', async () => {
    const result = checkForEvenNumber(Number.MIN_SAFE_INTEGER + 1);
    expect(result).toBeTruthy();
  });

  test('is odd - max positive value', async () => {
    const result = checkForEvenNumber(Number.MAX_SAFE_INTEGER);
    expect(result).toBeFalsy();
  });

  test('is odd - default positive value', async () => {
    const result = checkForEvenNumber(1);
    expect(result).toBeFalsy();
  });

  test('is odd - default negative value ', async () => {
    const result = checkForEvenNumber(-1);
    expect(result).toBeFalsy();
  });

  test('is odd - max negative value', async () => {
    const result = checkForEvenNumber(Number.MIN_SAFE_INTEGER);
    expect(result).toBeFalsy();
  });

  test('zero value should be even', async () => {
    const result = checkForEvenNumber(0);
    expect(result).toBeTruthy();
  });
});

function compareNumbers(firstNumber, secondNumber) {
  if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
    if (firstNumber > secondNumber) {
      console.log('First number is bigger than second number!');
      return true;
    } else if (firstNumber < secondNumber) {
      console.log('Second number is bigger than first number!');
      return true;
    } else {
      console.log('The numbers you passed are equal!');
      return false;
    }
  } else {
    throw new Error('You passed wrong type of input!');
  }
}

test.describe('Unit tests for second function', () => {
  let fromOneToNine = Math.floor(Math.random() * 10);
  let fromTenToHundred = Math.floor(Math.random() * 100) + 11;

  test('First number is bigger than second', async () => {
    const result = compareNumbers(fromTenToHundred, fromOneToNine);
    expect(result).toBeTruthy();
  });

  test('Second number is bigger than first', async () => {
    const result = compareNumbers(fromOneToNine, fromTenToHundred);
    expect(result).toBeTruthy();
  });

  test('Numbers are equal', async () => {
    const result = compareNumbers(75, 75);
    expect(result).toBeFalsy();
  });
});
