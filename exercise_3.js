// Ex3
// 3. Find pairs of elements whose sum is equal to a given number
// Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]

function findTwoWithSum(arr, sum) {
  const pairs = [];
  const matchedNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let matchElement = sum - arr[i];
    matchElement = arr.find((ele, idx) => ele === matchElement && idx !== i);
    if (
      matchElement &&
      matchedNumbers.indexOf(matchElement) === -1 &&
      matchedNumbers.indexOf(arr[i]) === -1
    ) {
      matchedNumbers.push(matchElement);
      pairs.push([arr[i], matchElement]);
    }
  }

  return pairs;
}

console.log(findTwoWithSum([1, 7, 9, 2, 5, 3, 8], 12));
console.log(findTwoWithSum([1, 7, 9, 2, 5, 3, 8], 10));
console.log(findTwoWithSum([1, 7, 9, 2, 5, 5, 3, 8], 10));
