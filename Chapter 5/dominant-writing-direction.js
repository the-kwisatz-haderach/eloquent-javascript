const SCRIPTS = require('./scripts');

// Compute dominant wrting direction in a string of text.
let string = 'ሓሓaייי';
string = string.replace(/\s/g,'');
const stringArr = [...string];

const charcodesObj = stringArr
    .map(c => c.charCodeAt())
    .map(cc => {
        for (script of SCRIPTS) {
            let withinRange = script.ranges
                .some(range => cc >= range[0] && cc <= range[1]);
            if (withinRange) console.log(script.name);
            if (withinRange) return script.direction;
        }
    })
    .reduce((acc, curr) => {
        if (curr === 'ltr') acc.ltr += 1;
        if (curr === 'rtl') acc.rtl += 1;
        if (curr === 'ttb') acc.ttb += 1;
        return acc;
    }, {ltr: 0, rtl: 0, ttb: 0});

const dominantDir = Object.keys(charcodesObj)
    .reduce((acc, curr) => {
        if (charcodesObj[curr] > charcodesObj[acc]) acc = curr;
        return acc;
    });

console.log(dominantDir);