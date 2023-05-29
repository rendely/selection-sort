function selectionSort(arr) {
  // if length is one, return the single value
  if (arr.length === 1) return arr

  let sortedArr = [];
  let remainingArr = arr;

  while (remainingArr.length > 0) {
    // loop through to find minumum
    let min = arr[0];
    for (el of arr) {
      if (el < min) min = el;
    }

    // Remove that value from array 
    const minIndex = remainingArr.indexOf(min);
    sortedArr.push(min);
    remainingArr.splice(minIndex, 1);

  }

  return sortedArr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();
  

  for (let i = 0; i < 1000; i++){
    selectionSort([3, -1, 5, 2]);
    selectionSort(longInput);
  }

  const endTime = Date.now();

  const avgTime = (endTime - startTime) / 2000;

  console.log(endTime - startTime);
  console.log("Average time:", avgTime);

}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
