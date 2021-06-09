import { map, filter } from './array-methods.js';

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

  test.only('returns the new Array of "filtered" items with true or "truthy" values', () => {

    const arr = [0, '0', 1, 2, 3, false, 'false'];

    const newArr = filter(arr, (item) => {
      if(!item) return;
      else return item;
    });
    
    expect(newArr).toEqual(['0', 1, 2, 3, 'false']);

  });
});
