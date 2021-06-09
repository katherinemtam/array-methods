import { map, filter, findIndex, reduce, every, forEach } from './array-methods.js';
import { jest } from '@jest/globals';

describe('map(arr, callback)', () => {

  test('returns the "mapped" new array with same length value as original array', () => {

    const arr = [
      'yuzu',
      'persimmon',
      'pomelo',
      ,
      'starfruit'
    ];

    const newArr = map(arr, (item) => {
      if(!item) return 'empty';
      else return item.toUpperCase();
    });
    
    expect(newArr).toEqual(['YUZU', 'PERSIMMON', 'POMELO', 'empty', 'STARFRUIT']);
    expect(arr.length).toEqual(newArr.length);

  });
});

describe('filter(arr, callback)', () => {

  test('returns the new Array of "filtered" items with true or "truthy" values', () => {

    const arr = [0, '0', 1, 2, 3, , false, 'false'];

    const newArr = filter(arr, (item) => {
      if(!item) return;
      else return item;
    });
    
    expect(newArr).toEqual(['0', 1, 2, 3, 'false']);

  });
});

describe('findIndex(arr, callback)', () => {

  test('returns the index of the found item, -1 if no item is found', () => {

    const arr = [0, 1, 2, 3, , 4, 5];

    const index = findIndex(arr, (item) => item === 2);
    
    expect(index).toEqual(2);

  });
});

describe('reduce(arr, callback [, initialValue]', () => {

  test('returns the final accumulator value WITHOUT an initial value', () => {

    const arr = [1, 2, 3, , 4, 5];

    const accumulator = reduce(arr, (accumulator, item) => accumulator + item, 0);

    expect(accumulator).toEqual(15);

  });

  test('returns the final accumulator value WITH an initial value', () => {

    const arr = [1, 2, 3, 4, 5];
    const initialValue = 5;

    const accumulator = reduce(arr, (accumulator, item) => accumulator + item, initialValue);

    expect(accumulator).toEqual(20);

  });
});

describe('every(arr, callback)', () => {

  test('returns the true if every item in the Array has returned true, otherwise false', () => {

    const arr = [
      'panda',
      'leopard',
      ,
      'capybara',
      'chinchilla'
    ];

    const includesO = every(arr, (item) => item.includes('o'));
    const includesA = every(arr, (item) => item.includes('a'));

    expect(includesO).toEqual(false);
    expect(includesA).toEqual(true);

  });
});

describe('forEach(arr, callback)', () => {

  test.only('returns undefined', () => {

    const arr = [
      'margarita',
      'cosmopolitan',
      'moscow mule',
      'martini',
      'mojito'
    ];

    const mockCallback = jest.fn((item) => item);

    const output = forEach(arr, mockCallback);
    
    expect(mockCallback).toHaveBeenCalledTimes(5);

    // only works for one call at a time
    expect(mockCallback).toHaveBeenCalledWith('margarita');
    expect(mockCallback).toHaveBeenCalledWith('cosmopolitan');
  
    // mockCallBack.mock.calls returns each index as an array; array of arrays
    // first index targets index within array of drinks
    // second index targets index of each drink --> only one string hence [0]
    expect(mockCallback.mock.calls[0][0]).toBe('margarita');
    expect(mockCallback.mock.calls[2][0]).toBe('moscow mule');

    expect(output).toBe(undefined);
  });
});
