function range(start, end, step) {
    
    expectedArgumentsCheck(arguments, 2, 1);
    endStartChecker(arguments);

    const array = [];
    step = (!step) ? 1 : step;
    for (start; start <= end; start += step) {
        array.push(start);
    }
    return array;
}

function sum(array) {

    expectedArgumentsCheck(arguments, 1);

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

function endStartChecker(input) {

    if (input[1] < input[0] && input[2] > 0) {
        throw new Error('Can\'t compute.');
    } else if (input[1] > input[0] && input[2] < 0) {
        throw new Error('Can\'t compute.');
    }
}

function expectedArgumentsCheck(inputArguments, expectedArguments, optionalArguments = 0) {
    
    inputArguments = inputArguments.length;
    const upperLimit = expectedArguments + optionalArguments;
    if (inputArguments < expectedArguments || inputArguments > upperLimit) {
        throw new Error(`Expected between ${expectedArguments} and ${upperLimit} arguments.`);
    }
}

module.exports = { range, sum };
