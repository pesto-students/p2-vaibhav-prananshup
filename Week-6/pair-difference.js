// Pair With Given Difference
let arr = [5, 10, 3, 80, 2, 0, 10, 20], num = 10;

console.log(findPair());

function findPair() {
    for (let index = 0; index < arr.length - 1; index++) {
    
        if (arr[index] < num) {
            if (arr.includes(arr[index] + num)) {
                return 1;
            }
        } else {
            if (arr.includes(arr[index] - num)) {
                return 1;
            }
        }
    }
    
    return 0;
}
