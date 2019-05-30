function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

let value = 5;
function test(value) {
    return value >= 0;
}
function update(value) {
    return value - 1;
}
function body(value) {
    console.log(value, 'lol');
}

loop(value, test, update, body);