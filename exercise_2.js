// Ex2
// 2. Find 2 elements with the greatest sum in an array
// Example: [1,7,9,2,5,3,8] => [9.8]

function findTwoWithMaxSum(arr) {
  const newArr = [...arr];
  newArr.sort((a, b) => b - a);
  return [newArr[0], newArr[1]];
}

console.log(findTwoWithMaxSum([1, 7, 9, 2, 5, 3, 8]));
