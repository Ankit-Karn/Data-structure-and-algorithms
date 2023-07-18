// Question - merge two sorted array without using extra space.

var res = (arr1, arr2, n, m)=>{
    let left = arr1.length-1;
    let rigth = 0;

    while(left >=0 && rigth < m){
        if(arr1[left]>arr2[rigth]){
            [arr1[left], arr2[rigth]] = [arr2[rigth], arr1[left]];
            left--;
            rigth++;
        }else{
            break;
        }
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
}

var arr1 = [1,3,5,7];
var arr2 = [10,2,6,8,9];
var n = arr1.length;
var m = arr2.length
var output = res(arr1, arr2, n, m)
console.log(output);