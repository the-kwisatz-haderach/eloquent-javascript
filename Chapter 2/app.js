// Return minimum of two numbers.
function minimum(a = 0, b = 0) {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return 'Numbers are of same size!'
    }
}

// Recursive function to check if a number is even or odd.
function isEven(a) {
    a = Math.abs(a);
    let history = '';
    history += a;
    console.log(history);
    if (a === 0) {
        return true;
    } else if (a === 1) {
        return false;
    } else {
        return isEven(a - 2);
    }
}

// Function to count the number of uppercase B's in a string.
function countBs(string) {
    return countChar(string, 'B');
}

function countChar(string, character) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) {
            counter++;
        }
    }
    return counter;
}