// Question - Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example - 
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

var result = (arr) => {
    for(var i=0; i<arr.length; i++){ // this loop will run 6 times in this case 
        for(var j=0; j<arr.length-1-i; j++){ // this will run for 5 times everytime the outer loop runs.
            if(arr[j]>arr[j+1]){ // if the 1st element is greater than 2nd and so on..
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr 
}

var array = [2,0,2,1,1,0]
var sortedArray = result(array);
console.log(sortedArray);
