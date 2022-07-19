/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let max = nums[0], min = nums[0], res = nums[0], p = 1;
    
    for (let i = 1; i < nums.length; i++) {
        
        if (nums[i] < 0) {
            let t = max;
            max = min;
            min = t;
        }
        
        max = Math.max(max*nums[i], nums[i]);
        min = Math.min(min*nums[i], nums[i]);       
        
        res = Math.max(max, res);
    }
    
    return res;
};