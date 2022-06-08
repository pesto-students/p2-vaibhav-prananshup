let arr = ["aa", "ab", "ac", "ac"];

const hasDuplicate = (arr) => arr.length !== new Set(arr).size;

console.log(
    `Array has ${hasDuplicate(arr) ? `duplicates` : `no duplicates`}`
)