function arrayToList(arr) {
    let list = {};
    list.value = arr.shift();  
    
    if (arr.length === 0) {
        list.rest = null;
        return list;
    } else {   
        list.rest = arrayToList(arr);
        return list;
    }
}

const list = arrayToList([1, 2, 3]);

function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

console.log(listToArray(list));
