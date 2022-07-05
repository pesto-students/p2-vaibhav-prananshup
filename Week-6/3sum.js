//3Sum Closest - return sum of triplet closest to target
const nums = [1,1,-1,-1,3], target = -1;
let sum, diff = Infinity, result;

console.log("result -- ", threesum()); // -1

function threesum() {
    let len = nums.length
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {

        let low = i + 1, high = len - 1;

        while (low < high) {
            sum = nums[i] + nums[low] + nums[high];

            if (sum == target) return sum;

            const a = Math.abs(target - sum)
            if (diff > a) {
                diff = a;
                result = sum;
            }

            if (sum > target) {
                high--;
            } else {
                low++;
            }
        }

    }
    return result;
}

