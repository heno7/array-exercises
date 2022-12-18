// 5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
// Example: 	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
// 			const arr2 = [3, 5, 9, 10, 88];
// 			=> [3,5,9]

// function findOneAppearInTwoArray(arr1, arr2) {
//   const result = [];
//   const loopedArr = arr1.length < arr2.length ? arr1 : arr2;
//   const compareArr = loopedArr === arr1 ? arr2 : arr1;
//   for (let ele of loopedArr) {
//     if (compareArr.indexOf(ele) !== -1 && !result.includes(ele))
//       result.push(ele);
//   }
//   return result;
// }

function findOneAppearInTwoArray(arr1, arr2) {
  const newArr1 = Array.from(new Set(arr1));
  const newArr2 = Array.from(new Set(arr2));

  return newArr1.filter((ele) => newArr2.includes(ele));
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88, 9];

console.log(findOneAppearInTwoArray(arr1, arr2));
