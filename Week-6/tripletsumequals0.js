//Find all unique triplets with zero sum

let nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
let x = 0;

var threeSum = function(nums) {
    const len = nums.length, result = [];
    nums.sort((a, b) => a - b); // -3 -1 0 1 

    for (let i = 0; i < len - 2 && nums[i] <= 0; i++) {
        if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
    
            let l = i + 1, r = len - 1;
            while (l < r) {
                const i_val = nums[i], l_val = nums[l], r_val = nums[r];
                const sum = i_val + l_val + r_val;
                if (sum == 0) {
                    result.push([i_val, l_val, r_val]);

                    while (l < r && nums[l] == nums[l + 1]) l++;
                    while (l < r && nums[r] == nums[r - 1]) r--;

                    l++;
                    r--;

                } else if (sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }
    }
    return result;
};

console.log(threeSum(nums))
