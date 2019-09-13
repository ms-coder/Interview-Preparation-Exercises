// TASK DESCRIPTION:
// Find pair with given sum in the array

// SOLUTION

// naive method, time - O(n²), space - O(1)
function findPairNaive(array, sum) {
    for (let i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (sum === array[i] + array[j])
                return i + ' - ' + array[i] + ', ' + j + ' - ' + array[j];
        }
    }

    return "not found";
}

// method with sorting O(N*logN)
function findPairWithSort(array, sum) {
    let sortedArray = mergeSort(array);
    //let sortedArray = array.sort((a, b) => a - b);
    let i = 0;
    let j = sortedArray.length - 1

    while (i < j) {

        let low = sortedArray[i];
        let high = sortedArray[j];

        if (low + high === sum)
            return i + ' - ' + low + ', ' + j + ' - ' + high;

        if (low + high > sum)
            j--;
        else
            i++;

    }

    return "not found";
}

function mergeSort(array) {

    if (array.length <= 1)
        return array;

    const middle = Math.floor(array.length / 2);

    let leftPart = array.slice(0, middle)
    let rightPart = array.slice(middle)

    return merge(mergeSort(leftPart), mergeSort(rightPart));
}

function merge(leftArray, rightArray) {

    let mergedArray = [];

    while (leftArray.length || rightArray.length) {

        let minimumElement = null;

        if (!leftArray.length || (leftArray[0] >= rightArray[0]))
            minimumElement = rightArray.shift();
        else if (!rightArray.length || (leftArray[0] <= rightArray[0]))
            minimumElement = leftArray.shift();
    
        mergedArray.push(minimumElement);
    }

    return mergedArray;
}

// TODO: hashmap based method

// TESTS

const { PerformanceObserver, performance } = require('perf_hooks');

let array = Array.from({ length: 400 }, () => Math.floor(Math.random() * 1000));

console.time('time');
console.log(findPairNaive(array, 7));
console.timeEnd('time');

console.time('time');
console.log(findPairWithSort(array, 7));
console.timeEnd('time');


