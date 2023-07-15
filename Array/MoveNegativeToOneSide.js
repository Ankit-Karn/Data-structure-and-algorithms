// Question - move all the negative elements to one side of the array

var res = (arr) =>{
    var temp = [];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            temp.push(arr[i])
        }
    }

    for(let i=0 ; i<arr.length; i++){
        if(arr[i]<0){
            temp.push(arr[i])
        }
    }

    for(let i=0; i<arr.length; i++){
        arr[i] = temp[i]
    }

    return arr;
}

var arr = [12, 10, 11, -1, -4, -41, 29 , -30]

var result = res(arr)
console.log(result)