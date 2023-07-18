//  Question - best time to buy and sell stocks

var maxProfit = function(arr) {
    let profit = 0;
    let min = arr[0]
    let max = 0;
    for( let price of arr){
        min = Math.min(min, price)
        profit = price - min
        max = Math.max(max, profit)
    }
    return max;
};

var arr = [7,1,5,3,6,4]
var output = maxProfit(arr)
console.log(output)