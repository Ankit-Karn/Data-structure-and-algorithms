// Question - Intersection of two sorted array

var result = (arr1,arr2) =>{
    let intersection = [];
    let left = 0;
    let right = 0;

    while(left < arr1.length || right < arr2.length){

        //skip duplicate
        while(left>0 && left<arr1.length && arr1[left] == arr1[left-1]){
            left++;
        }
        while(right>0 && right<arr2.length && arr2[right] == arr2[right-1]){
            right++;
        }
        //If one array ends
        if(left >= arr1.length || right >= arr2.length){
            break;
        }
        // comparison
        if(arr1[left]<arr2[right]){
            left++
        }else if(arr2[right]<arr1[left]){
            right++
        }else{
            intersection.push(arr1[left]);
            left++;
            right++;
        }
    }
    return intersection;
}

var arr1 = [1,2,3,4,5,6]
var arr2 = [3,4,5]

var solution = result(arr1, arr2);
console.log(solution)