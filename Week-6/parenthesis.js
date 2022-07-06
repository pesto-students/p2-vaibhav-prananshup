//https://leetcode.com/problems/valid-parentheses/
//  Valid Parentheses

let arr = [];
let s = "{";
let map = new Map([
    ['{', '}'],
    ['(', ')'],
    ['[', ']'],
])

var isValid = function(s) {
    
    const slen = s.length;
    if (slen == 0 || slen % 2 != 0) {
        return false;
    }
    
    arr.push(map.get(s[0]));
    for (let i = 1; i < slen; i++) {
        
        const mapVal = map.get(s[i]);
        if (mapVal === undefined) {
            if (s[i] !== arr.pop()) {
                return false;
            }
        } else {
            arr.push(mapVal);
        }
    
    }
    
    return arr.length == 0;
    
};

console.log(isValid(s))