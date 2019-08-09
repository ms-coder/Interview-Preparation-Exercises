// TASK DESCRIPTION:
// Find pair with given sum in the array
//
//

// SOLUTION

// language native method, O(?)
function reverseNative(string)
{
    var array = string.split('');
    array.reverse();
    return array.join('');
}

// method with cycle, O(n)
function reverse(string) {
    var newStringAsArray = [];
    var stringAsArray = string.split('');
    for (let i = stringAsArray.length-1 ; i >= 0 ; i--) {
        newStringAsArray.push(stringAsArray[i]);
    }

    return newStringAsArray.join('');
}

// TESTS
let a = reverseNative("abcdef");
let b = reverse("abcdef");
console.log(a);
console.log(b);