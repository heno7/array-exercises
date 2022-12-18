// Ex6
// 6. Given an array arr1. Write a function that returns a new array of the elements that appear more than once in arr1. The elements in new array can only appear once in this array.
// Example: 	const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
// 		const myFunc = (inputArr) => {
// 			// write your code here
// 		}
// 		const arr2 = myFunc(arr1); // [2,3,1,5]

function findElementsApprearMoreOnce(arr) {
  const result = [];
  const listAppearanceOfElement = {};
  for (let ele of arr) {
    if (ele in listAppearanceOfElement) {
      listAppearanceOfElement[ele] += 1;
      continue;
    }
    listAppearanceOfElement[ele] = 1;
  }

  for (let key in listAppearanceOfElement) {
    if (listAppearanceOfElement[key] > 1) {
      result.push(parseInt(key));
    }
  }

  return result;
}

// function findElementsApprearMoreOnce(arr) {
//   return Array.from(
//     new Set(arr.filter((ele, idx) => arr.indexOf(ele, idx + 1) !== -1))
//   );
// }

const arr1 = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];
console.log(findElementsApprearMoreOnce(arr1));
