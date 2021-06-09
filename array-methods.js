export const map = (arr, callback) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
  }
  return newArr;
};

export const filter = (arr, callback) => {
  let newArr = []; 
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) newArr = [...newArr, arr[i]];
  }
  return newArr;
};
