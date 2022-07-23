//Kadane’s Algorithm : Maximum Subarray Sum in an Array

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let max = nums[0], sum = 0;

for (let i = 0; i < nums.length; i++) {

    sum += nums[i];
    if (sum > max) {
        max = sum;
    }
    if (sum < 0) {
        sum = 0;
    }
}
return max;