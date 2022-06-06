// Solution: print fibonacci series using iterators
let fibo = (num) => {
    return {
        [Symbol.iterator]: () => {
            let i = 0, j = 1, k;
            let v = 0;
            return {
                next: () => {
                    if (v < num) {
                        v++;
                        k = i + j;
                        i = j;
                        j = k;
                        return { value: i, done: false };
                    } else {
                        return { done: true };
                    }
                }
            }
        }
    }
}

for (const o of fibo(12)) {
    console.log(o)
}


// Solution: How to make plain javascript object iterable
const obj = {
    key1: "value1",
    key2 : "value2"
}

obj[Symbol.iterator] = function () {
    let length = Object.keys(this).length, start = 0, objThis = this;
    return {
        next() {
            if (start < length) {
                return { value: Object.values(objThis)[start++], done: false }
            } else  
            return { done: true }
        }
    }
}

for (const o of obj) {
    // Uncaught TypeError: obj is not iterable. when there is no Symbol.iterator function in obj
    console.log(o) // value 1, value 2
}