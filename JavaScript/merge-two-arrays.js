function mergeArray(arr1, arr2) {
    var new_array = [];
    var i = 0,
        j = 0,
        index = 0;
   
    while (new_array.length != (arr1.length + arr2.length) - 1) {
        if (arr1[i] < arr2[j]) {
            new_array.push(arr1[i]);
            i++;
        } else {
            new_array.push(arr2[j]);
            j++;
        }
    }
    return new_array;
}

let a = mergeArray([1,3,4,7], [2,6,9,0]);

console.log(a.join());