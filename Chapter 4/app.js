function range(start, end) {
    if (arguments.length !== 2) {
        throw new Error('Expected two arguments.');
    }

    if (end < start) {
        throw new Error('End value has to be larger than start.');
    }

    const array = [];
    for (start; start <= end; start++) {
        array.push(start);
    }

    return array;
}

function sum(array) {
    if (arguments.length !== 1 || !(array instanceof Array)) {
        throw new Error('Expected only one argument of type \"array\".');
    }

    let sum = 0;
    for (let item of array) {
        if (typeof item === 'number' && item === item) {
            sum += item;
        }
    }
    return sum;
}

module.exports = { range, sum };