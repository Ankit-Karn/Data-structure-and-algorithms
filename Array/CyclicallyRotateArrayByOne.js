//cyclically rotate array by one 

var result = (arr) =>{
    lastElement = arr[arr.length-1]
    for(let i = arr.length-1; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = lastElement;
    return arr
}

var arr = [1,2,3,4,5]
var output = result(arr)
console.log(output)