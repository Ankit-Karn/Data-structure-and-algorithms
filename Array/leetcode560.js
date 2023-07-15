// Question - Find if there is any subarray having the sum equal to k - leetcode 560

// Brute force approach -> time complexity - o(n^2) & space complexity - o(1)
// var res = (arr, k)=>{
//     let count = 0 
//     for(let i=0; i<arr.length; i++){
//         let sum = 0 
//         for(let j=i; j<arr.length; j++){
//             sum+=arr[j]
//             if(sum == k){
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// var array = [1,1,1];
// var k = 2;
// var output = res(array, k)
// console.log(output);

//optimized solution -> time complexity - o(n) & space complexity - o(1) -> Algorithm - prefix sum and hash map

var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1)
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        if(map.has(sum-k)){
            count += map.get(sum-k)
        }
        if(map.has(sum)){
            map.set(sum, map.get(sum)+1)
        }else{
            map.set(sum, 1)
        }
    }
    return count;
};
var array = [1,1,1];
var k = 2;
var output = subarraySum(array, k)
console.log(output);