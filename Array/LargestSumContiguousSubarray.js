// Question - Find the largest sum contiguous subarray

// brute force method - o(n^3) time complexity
// const res = (arr) =>{
//     let max = Number.MIN_SAFE_INTEGER
//     for(let i=0; i<arr.length; i++){
//         for(let j=i; j<arr.length; j++){
//             let sum = 0
//             for(let k=i; k<=j; k++){
//                 sum += arr[k]
//             }
//             max = Math.max(sum, max)
//         }
//     }
//     return max
// }

// var array = [-2,1,-3,4,-1,2,1,-5,4]
// var output = res(array);
// console.log(output)

// kadane's algorithm 
const result = (arr) =>{
    let sum = 0
    let max = 0

    for(let i=0; i<arr.length; i++){
        sum += arr[i]; // everytime we get a new element we add it into sum
        max = Math.max(sum, max);// we check between sum and max whichever is greater is pushed to max;
        if(sum<0){ //if sum is less then update sum with zero
            sum = 0;
        }
    }
    return max;
}
var array = [-2,-3,4,-1,-2,1,5,-3]
var output = result(array);
console.log(output)
