function every(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        let val = fn(arr[i]);
        if (!val) return false;
    }
    return true;
}


function everySome(arr, fn) {
    let flag = false;
    arr.some((val, i, arr) => {
        flag = fn(val);
    })
    return flag;
}

let arr = [2, 4, 6, 8, 10];
console.log(everySome(arr, val => val % 2 !== 0));