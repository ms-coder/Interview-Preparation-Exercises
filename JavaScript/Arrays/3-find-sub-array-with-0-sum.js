// TASK DESCRIPTION:
// Find sub array with 0 sum

// SOLUTION

// naive method, time - O(n²)
function findZeroSumNaive(array) {
    let result = [];

    for (i = 0; i < array.length; i++) {

        let elements = [array[i]];
        let sum = array[i];

        if (0 === sum) {
            result.push(Array.from(elements));
        }

        for (j = i + 1; j < array.length; j++) {
            elements.push(array[j])
            sum += array[j];
            if (0 === sum) {
                result.push(Array.from(elements));
            }
        }
    }
    return result;
}

// method with cache array O(n)
function findZeroSumUsingCache() {
    let map = [];

    function addToCache(sum, startIndex) {
        if(!map[sum])
            map[sum]= [startIndex];
        else
            map[sum].push(startIndex);
    }

    function getFromCache(sum) {
        if (map[sum]) {
            return map[sum];
        }
        else 
            return [];
    }

    return function (array) {

        let result = [];
        let sum = 0;

        for (i = 0; i < array.length; i++) {
            sum += array[i];

            if (0 === sum) {
                result.push(array.slice(0,i+1));
            }

            var cached = getFromCache(sum);

            if(cached.length > 0) {
                for (let jj = 0; jj < cached.length; jj++) {
                        result.push(array.slice(cached[jj]+1,i+1));
                }
            }

            addToCache(sum, i);
        }

        return result;
    }
}


// TESTS

const { PerformanceObserver, performance } = require('perf_hooks');

let array = Array.from({ length: 30 }, () => (Math.random() < 0.5 ? 1 : -1) * Math.floor(Math.random() * 30));
//let array = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
//console.log(array);

console.time('time');
console.log(findZeroSumNaive(array));
console.timeEnd('time');

console.time('time');
console.log(findZeroSumUsingCache()(array));
console.timeEnd('time');