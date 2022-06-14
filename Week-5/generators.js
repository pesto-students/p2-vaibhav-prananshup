// generators functions

function* generator() {
    console.log('before 1');
    yield 1;
    console.log('after 1');
    console.log('before 2');
    yield 2;
    console.log('after 2');
    console.log('before 3');
    let v = yield 3;
    console.log(v); //  some value 
}

let gen = generator()
// console.log(gen.next()) // before 1 {value: 1, done: false}
// console.log(gen.next()) // after 1 before 2 {value: 2, done: false}
// console.log(gen.next()); // after 2 before 3 {value: 3, done: false}
// console.log(gen.next('some value')) // some value {value: undefined, done: true}

// another approach

for (const g of gen) {
    console.log(g)
    //before 1
    //1
    // after 1
    // before 2
    // 2
    // after 2
    // before 3
    // 3
    // undefined
}