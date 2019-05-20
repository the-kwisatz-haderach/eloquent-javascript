function reverseArray(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.unshift(arr[i]);
    }
    return newArray;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        let curr = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = curr;
    }
    return arr;
}

module.exports = { reverseArray, reverseArrayInPlace }