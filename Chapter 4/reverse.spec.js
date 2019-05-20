const assert = require('assert');
const reverse = require('./reverse');

describe.only('The Reverse function', () => {
    it('should create a new array from an existing one but in reverse order', () => {
        let testArray = [1, 2, 3, 4, 5];
        let newArray = reverse.reverseArray(testArray);
        assert.deepEqual(reverse.reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });

    it('should reverse the order of an existing array', () => {
        let testArray = [1, 2, 3, 4, 5];
        reverse.reverseArrayInPlace(testArray);
        assert.deepEqual(reverse.reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        assert.strictEqual(reverse.reverseArrayInPlace(testArray), testArray);
    });
});