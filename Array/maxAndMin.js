// Question - Find max and min element in an array

function max(arr){
    var maxElem = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]>maxElem){
            maxElem = arr[i]
        }
    }
    return maxElem;
}

function min(arr){
    var minElem = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]<minElem){
            minElem = arr[i]
        }
    }
    return minElem
}

var arr = [10,20,100,40,50]

var result = max(arr)
var answer = min(arr)
console.log(result)
console.log(answer)