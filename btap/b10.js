"use strict";
function removeFalsyProps(obj) {
    let result = {};
    for (let key in obj) {
        if (obj[key]) {
            result[key] = obj[key];
        }
    }
    return result;
}
let inputObject = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a'
};
const result = removeFalsyProps(inputObject);
console.log(result);
