function sortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) 
      let temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
}

const numbers = [5, 2, 9, 1, 5, 6,3,7,4];
sortDescending(numbers);
console.log(numbers); 
