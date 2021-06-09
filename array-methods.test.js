import { map, filter, findIndex } from './array-methods.js';

describe('map(arr, callback)', () => {

  test('returns the "mapped" new array with same length value as original array', () => {

    const arr = [
      'yuzu',
      'persimmon',
      'pomelo',
      '',
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

    const arr = [0, '0', 1, 2, 3, false, 'false'];

    const newArr = filter(arr, (item) => {
      if(!item) return;
      else return item;
    });
    
    expect(newArr).toEqual(['0', 1, 2, 3, 'false']);

  });
});

describe('findIndex(arr, callback)', () => {

  test.only('returns the index of the found item, -1 if no item is found', () => {

    const arr = [0, 1, 2, 3, 4, 5];

    const index = findIndex(arr, (item) => item === 2);
    
    expect(index).toEqual(2);

  });
});
