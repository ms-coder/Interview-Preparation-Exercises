// TASK DESCRIPTION:
// Sort binary array in linear time

// SOLUTION

// naive method, time - O(n), space - O(1)
function sort(array) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {

        if (array[i] == 1) {
            if (array[j] == 0) {
                array[j] = 1;
                array[i] = 0;
                i++;
            }
            j--;
        } else {
            i++
        }
    }

    return array;
}


// TESTS

const { PerformanceObserver, performance } = require('perf_hooks');

let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 2));
console.log(array);

console.time('time');
console.log(sort(array));
console.timeEnd('time');


