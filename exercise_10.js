// Ex10
// 10. 	Write 3 methods myMap, myFilter, myReduce (suggest: user Array.prototype, "this" keyword, and for loop).
// 	3 these methods have similar in use and usage as map, filter, reduce of array in JS

// myMap
Array.prototype.myMap = function (callback, thisAgr) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    let newEle;
    if (thisAgr) {
      newEle = callback.call(thisAgr, this[i], i, this);
    }
    newEle = callback(this[i], i, this);
    result.push(newEle);
  }
  return result;
};

const arrMap = [1, 2, 3, 4];
const resultMap = arrMap.myMap((ele) => ele * 2);
console.log("Map result: ", resultMap);

// myFilter
Array.prototype.myFilter = function (callback, thisAgr) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (thisAgr) {
      if (!callback.call(thisAgr, this[i], i, this)) continue;
    }
    if (!callback(this[i], i, this)) continue;

    result.push(this[i]);
  }

  return result;
};

const arrFilter = [1, 2, 3, 4];
const resultFilter = arrFilter.myFilter((ele) => ele > 2);
console.log("Filter result: ", resultFilter);

// myReduce
Array.prototype.myReduce = function (callback, init) {
  let accumulator;
  if (init) {
    accumulator = init;
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
      continue;
    }
    return accumulator;
  }

  accumulator = this[0];
  for (let i = 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const arrReduce = [1, 2, 3, 4];
const resultReduce = arrReduce.myReduce((result, ele) => result + ele);
console.log("Reduce result: ", resultReduce);
