// Max Sum Contiguous Subarray

const nums = [1, -1, 4, -1, 2];
let max = nums[0];

for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (max < sum) {
        max = sum;
    }
    for (let j = i + 1; j < nums.length; j++) {
        sum = sum + nums[j];
        if (sum < 0) break;
        if (max < sum) {
            max = sum;
        }
    }

}
console.log(max)