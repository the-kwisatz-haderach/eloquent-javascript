function deepEqual(value1, value2) {
    if (value1 === null && value2 === null) return true;

    if (typeof value1 === 'object' && typeof value2 === 'object') {
        const props1 = Object.keys(value1), props2 = Object.keys(value2);
        if (props1.length !== props2.length) return false;
        for (let i = 0; i < props1.length; i++) {
            if (props1[i] !== props2[i]) return false;
            if (!deepEqual(value1[props1[i]], value2[props2[i]])) return false;
        }
        return true;
    }
    
    if (value1 !== value2) return false;
    
    return true;
}

const obj1 = { id: 1, name: 'Batman' };
const obj2 = { id: 1, name: 'Batman' };

// Equal
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(1, 1));
console.log(deepEqual('1', '1'));
console.log(deepEqual(null, null));

const obj3 = { id: 1, name: 'Superman' };
const obj4 = { id: 1, name: 'Batman' };

// Not equal
console.log(deepEqual(obj3, obj4));