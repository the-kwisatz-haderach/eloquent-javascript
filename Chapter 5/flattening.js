const arr = [[1,2,3],[4,5,6],[7,8,9,10]];

const flattened = arr.reduce((acc, curr) => {
    curr.forEach(val => acc.push(val));
    return acc;
}, []);