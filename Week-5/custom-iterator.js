let arr = [2, 5, 3, 7];

// using generator
let fn = a => {
    let index = 0;
    return {
        *[Symbol.iterator]() {
            for (const item of a) {
                yield item;
            }
        }
    }
}

for (const i of fn(arr)) {
    console.log(i); // 2 5 3 7
}

// using iterator

let fn1 = a => {
    let index = 0;
    return {
        [Symbol.iterator]() {
            let len = a.length, index = 0;
            return {
                next: () => {
                    return index < len ? { value: a[index++], done: false }
                            : {value: undefined, done: true}
                }
            }
        }
    }
}

for (const i of fn1(arr)) {
    console.log(i); // 2 5 3 7
}