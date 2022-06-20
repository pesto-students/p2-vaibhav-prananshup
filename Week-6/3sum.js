const arr = [-1, 2, 1, -3, 5, 6], target = -1;
let sum, diff, result;

console.log("result -- ", threesum());

function threesum() {

    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1;
        while (j < arr.length - 1) {
            let k = j + 1;
            while (k < arr.length) {
                
                sum = arr[i] + arr[j] + arr[k];
    
                if (sum == target) {
                    console.log(...[arr[i], arr[j]], arr[k], ' sum -', arr[i] + arr[j] + arr[k], ' target-', target);
                    return 0;
                }
                
                diff = sum > target ? sum - target : target - sum;
                console.log(...[arr[i], arr[j]], arr[k], ' sum -', arr[i] + arr[j] + arr[k], ' target-', target, ' diff-', diff);
                if (!result) {
                    result = diff;
                } else if (diff < result){
                    result = diff
                }
    
                k++;
            }
            j++;
        }
    
    }
    return result;
}

