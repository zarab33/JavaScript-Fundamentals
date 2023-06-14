const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array; // If the array's length is already 5 or greater, return the array as is
  }

  return array.concat(number); // Add the number to the array using the .concat method
}

console.log(addToBatch([1], 3));
console.log(addToBatch([1, 2, 3], 4));
console.log(addToBatch([], 8));
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));