const nums = [2, 7, 11, 15], target = 9;
let m = new Map();
for (let i = 0; i < nums.length; i++) {
    
    let item = m.get(target - nums[i]);
    if(item !== undefined) {
        console.log([item, i]);
    } 
        
    m.set(nums[i], i);
}