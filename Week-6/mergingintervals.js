//let intervals = [[1,"ccc"], [8,"CC"], [2,"bccc"], [15,"accc"]];

//intervals.sort((a, b) => a[0] - b[0]); // sorts by asc 1 2 8 15

// intervals.sort((a, b) => {
//     if (a[1] === b[1]) return 0;

//     return a[1] > b[1] ? 1 : -1;
// }) // CC acc bccc ccc

// console.log(intervals)

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    
    if (intervals.length <= 1) return intervals;
    
    let result = [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let current = intervals[0];
    
    for(let i = 1; i < intervals.length; i++) {
    
        if(current[1] >= intervals[i][0]) {
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            result.push(current)
            current = intervals[i];
        } 
    }
    result.push(current)
    return result
    
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))