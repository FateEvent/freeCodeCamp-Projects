function bubbleSort(array) {
  let tmp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
};

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);