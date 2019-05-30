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

function listToArray(list, arr) {
    arr = arr || [];
    if (list.rest === null) {
        arr.push(list.value);
        return arr;
    } else {
        arr.push(list.value);
        listToArray(list.rest, arr);
        return arr;
    }
}

function prepend(element, list) {
    const newList = {};
    newList.value = element;
    newList.rest = list;
    return newList;
}

function nth(index, list) {
    if (index === 0) return list.value;
    if (list.rest === null) return undefined;
    else return nth(index - 1, list.rest);
}