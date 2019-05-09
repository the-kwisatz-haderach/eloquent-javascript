const assert = require('assert');
const functions = require('./app');

describe('The Range function', () => {
    it('should return an array consisting of elements from \"start\" to (and incl.) \"end\"', () => {
        assert.deepEqual(functions.range(3, 7), [3, 4, 5, 6, 7]);
        assert.deepEqual(functions.range(0, 11), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        assert.deepEqual(functions.range(0, 1), [0, 1]);
    });

    it('should throw for less than two arguments and more than three arguments', () => {
        assert.throws(() => {functions.range(1)});
        assert.throws(() => {functions.range(1, 2, 3, 4)});
    });

    it('should accept negative ranges', () => {
        assert.deepEqual([-5, -4, -3, -2, -1], functions.range(-5, -1));
    });

    it(`should throw error if end is smaller than start and step is positive
    or end is larger than start and step is negative`, () => {
        assert.throws(() => {functions.range(5, 2, 2)});
        assert.throws(() => {functions.range(10, 0, 3)});
        assert.throws(() => {functions.range(1, 6, -1)});
    });

    it(`should take an optional third argument which determines steps
    where a step is the increment with which to move from start to end`, ()=> {
        assert.deepEqual([2, 4, 6, 8], functions.range(2, 8, 2));
        assert.deepEqual([1, 4, 7, 10], functions.range(1, 10, 3));
        assert.deepEqual([1, 4, 7, 10], functions.range(1, 11, 3));
        // assert.deepEqual([8, 6, 4, 2, 0], functions.range(8, 0, -2));
    });
});

describe('The Sum function', () => {
    it('should only accept array input and throw otherwise', () => {
        assert.throws(() => {functions.sum('string')});
        assert.throws(() => {functions.sum(2)});
        assert.throws(() => {functions.sum(Nan)});
        assert.throws(() => {functions.sum(undefined)});
        assert.throws(() => {functions.sum(null)});
        assert.throws(() => {functions.sum({name: 'test'})});
    });

    it('should take an array of integers and sum the integers together', () => {
        assert.strictEqual(25, functions.sum([5, 4, 6, 10]));
        assert.strictEqual(25, functions.sum([3, 6, 7, 9]));
        assert.strictEqual(25, functions.sum([20, 5]));
        assert.strictEqual(25, functions.sum([25]));
    });

    it('should ignore non-integer if added to array', () => {
        assert.strictEqual(25, functions.sum([5, 4, 6, '10', 10]));
        assert.strictEqual(25, functions.sum([5, 4, NaN, 6, 10]));
        assert.strictEqual(25, functions.sum([5, 4, null, 6, 10]));
    });
});

describe('Both the Range and the Sum function', () => {
    it('should be possible to combine', () => {
        assert.strictEqual(55, functions.sum(functions.range(1, 10)));
    });
});
