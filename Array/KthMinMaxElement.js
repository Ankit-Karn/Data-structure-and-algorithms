// Find the kth largest and smallest element in an array

function KthLargeNum(arr, k){
    arr.sort()
    return arr[arr.length - k];
}

var arr = [10,20,21,31,19,24,36,82,1]
var k = 4

var res = KthLargeNum(arr, k)
console.log(res)