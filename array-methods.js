export const map = (arr, callback) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
  }
  return newArr;
};

export const filter = (arr, callback) => {
  const newArr = []; 
  let j = 0;

  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
};

export const findIndex = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) return i;
  }
  return -1;
};

export const reduce = (arr, callback, initialValue) => {
  
  let accumulator = initialValue === undefined ? 0 : initialValue;
 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i])
      accumulator = callback(accumulator, arr[i], initialValue);
    // console.log(accumulator);
  }
  return accumulator;
};

export const every = (arr, callback) => {
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i])
      if(!callback(arr[i])) return false;
  }
  return true;
};

export const forEach = (arr, callback) => {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) callback(arr[i]);
  }
  return undefined;
};
