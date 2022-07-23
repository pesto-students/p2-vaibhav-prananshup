//Problem 6.4 : Best time to buy and sell stock
const prices = [7, 1, 5, 3, 6, 4];
let first = prices[0], maxProfit = 0;

for (let i = 1; i < prices.length; i++) {
    if (first > prices[i]) {
        first = prices[i];
    } else {
        let diff = prices[i] - first;
        if (diff > maxProfit) {
            maxProfit = diff;
        }
    }  
}
console.log(maxProfit)
