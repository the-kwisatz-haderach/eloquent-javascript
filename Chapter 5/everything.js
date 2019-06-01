function every(arr, fn) {
    for (let val of arr) {
        if (!fn(val)) return false;
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

let arr = [2, 4, 6, 8, 14];
console.log(every(arr, val => val % 2 === 0));
console.log(everySome(arr, val => val % 2 === 0));