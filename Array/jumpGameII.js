//  Question - find minimum number of jumps to reach end of an array

var jump = (arr) =>{
    let pos = 0;
    let des = 0;
    let jump = 0;

    for(let i=0; i<arr.length-1; i++){
        des = Math.max(des, arr[i]+i);
        if(pos==i){
            pos = des;
            jump++
        }
    }
    return jump;
}

var array = [2,3,1,1,4]
var output = jump(array);
console.log(output)