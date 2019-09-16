// TASK DESCRIPTION:
// Find largest sub-array formed by consecutive integers

// SOLUTION

// method Nr.1, time - O(n)
function findSubarray() {
    let map = [];

    function addToResult(array) {
        map = array;
    }

    function isBiggest(array)
    {
        if (array.length > map.length)
            return true;
        
        false;
    }
    
    return function(array) {
        let elements = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = i; j < array.length; j++) {
                
                if(elements.indexOf(array[j]) < 0)
                {   
                    elements.push(array[j]);
    
                } else
                {
                    elements = [array[j]];
                }
    
                if (isBiggest(elements))
                    addToResult(Array.from(elements));
            }
        }

        return map;
    };
}


// TESTS

const { PerformanceObserver, performance } = require('perf_hooks');

//let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
array = [ 2, 0, 2, 1, 4, 3, 1, 0];

console.time('time');
console.log(findSubarray()(array));
console.timeEnd('time');

