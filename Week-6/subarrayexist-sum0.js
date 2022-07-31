// Find if there is a subarray with 0 sum

function subArrayExists(arr) {
    let sum = 0, set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) return true;
        sum += arr[i];
        if (sum == 0 || set.has(sum)) return true;
        else set.add(sum);
    }
    return false;
}

console.log(subArrayExists([4, 2, -3, 1, 6])) //true
