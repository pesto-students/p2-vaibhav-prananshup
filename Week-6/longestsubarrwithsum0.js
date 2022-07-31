//  Find the length of largest subarray with 0 sum


function maxLen(arr, n) {
    let sum = 0, map = new Map(), max = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum == 0) {
            max = i + 1;
        } else {
            let v = map.get(sum);
            if (v !== undefined) {
                max = Math.max(max, i - v)
            } else {
                map.set(sum, i);
            }
        }

    }
    return max;

}

console.log(maxLen([15, -2, 2, -8, 1, 7, 10, 23], 8));

