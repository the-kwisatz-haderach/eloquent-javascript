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
    let keys = [...arr.keys()];
    console.log(keys);
    
    if (list.rest === null) {
        arr.push(list.value);
        return arr;
    } else {
        arr.push(list.value);
        arr.push(listToArray(list.rest));
        return arr;
    }
}

console.log(listToArray(list));
// function listToArray(list) {
//     let arr = [];
//     for (let node = list; node; node = node.rest) {
//         arr.push(node.value);
//     }
//     return arr;
// }
