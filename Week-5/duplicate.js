let arr = [1, 2, 3, 4];

console.log(
    `Array has ${arr.length !== new Set(arr).size ? `duplicates` : `no duplicates`}`
)