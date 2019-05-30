// Loops over array and checks that every value evaluates to true based on a given function.
function every(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        let val = fn(arr[i]);
        if (!val) return false;
    }
    return true;
}

let arr = [2, 4, 6, 8, 14];

console.log(every(arr, val => val % 2 === 0));