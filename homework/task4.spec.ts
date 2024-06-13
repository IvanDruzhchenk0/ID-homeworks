// Напишіть програму  яка відображає найбільше ціле число з двох цілих чисел. (if.. + покрийте тестами)
import { test, expect } from '@playwright/test';

function findBiggerNumber(firstNumber, secondNumber) {
    if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
      if (firstNumber > secondNumber) {
        return firstNumber;
      } else if (firstNumber < secondNumber) {
        return secondNumber;
      } else {
        return 'The numbers you passed are equal! Please, pass different numbers.';
      }
    } else {
      throw new Error('You passed wrong type of input! You should pass integers!');
    }
  }

  test.describe('Unit tests for findBiggerNumber function', () => {
    let fromOneToHundred = Math.floor(Math.random() * 100);
    let fromHundredToThousand = Math.floor(Math.random() * 1000) + 101;
    let equalNumber = 75;
  
    test('First number is bigger than second', async () => {
      const result = findBiggerNumber(fromHundredToThousand, fromOneToHundred);
      expect(result).toEqual(fromHundredToThousand);
    });
  
    test('Second number is bigger than first', async () => {
        const result = findBiggerNumber(fromOneToHundred, fromHundredToThousand);
        expect(result).not.toEqual(fromOneToHundred);
    });
  
    test('Numbers are equal', async () => {
        const result = findBiggerNumber(equalNumber, equalNumber);
        expect(result).toMatch('The numbers you passed are equal! Please, pass different numbers.')
    });
  });