// Ex4
// 4. Get a new array from the given array so that the elements appear only once (using Set)
// Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]

function findOneAppearElements(arr) {
  const result = new Set();
  for (let ele of arr) {
    if (result.has(ele)) continue;
    result.add(ele);
  }
  return Array.from(result);
}

console.log(findOneAppearElements([1, 2, 3, 1, 2, 3, 4, 5, 6, 4]));
