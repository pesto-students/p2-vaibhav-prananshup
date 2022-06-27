//Sort array of 0's,1's and 2's

let nums = [1,2,2,2,2,0,0,0,1,1];
let temp = low = 0, high = nums.length - 1, t;
    
while (low <= high) {
    
    if (nums[low] == 0) {
        if (low != high) {
            t = nums[temp];
            nums[temp] = nums[low];
            nums[low] = t;
        }
        temp++;
        low++;
    } else if (nums[low] == 2) {
        t = nums[low];
        nums[low] = nums[high];
        nums[high] = t;
        high--;
    } else {
        low++;
    }
        
}

console.log(...nums);




