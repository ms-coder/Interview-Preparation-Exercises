// TASK DESCRIPTION:
// find duplicate element

// SOLUTION

// naive method, time - O(n), space - O(1)
function find(array) {
  for (let i = 0; i < array.length; i++) {
      let index = array.indexOf(i)
      array[index] = 0;
      index = array.indexOf(i);
      if (index >= 0)
        return array[index];
  }
    return "nothing found";
}


// TESTS

const { PerformanceObserver, performance } = require('perf_hooks');


array = [ 7, 10, 19, 6, 4, 16, 5, 18, 8, 13, 12, 15, 9, 17, 14, 1, 2, 11, 3, 7 ];


console.log(array);

console.time('time');
console.log(find(array));
console.timeEnd('time');


