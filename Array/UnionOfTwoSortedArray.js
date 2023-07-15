// Question - Find the union of two sorted arrays

// Finding union 
var Union = (arr1, arr2) => {
    var union = [];
    var left = 0 ;
    var right = 0;

    while(left<arr1.length || right<arr2.length){

        // skip duplicate
        while(left>0 && left<arr1.length && arr1[left] == arr1[left-1]){
            left++;
        }
        while(right>0 && right<arr2.length && arr2[right] == arr2[right-1]){
            right++;
        }

        // If one array has finished the work
        if(left>=arr1.length){
            union.push(arr2[right]);
            right++
            continue;
        }
        if(right>=arr2.length){
            union.push(arr1[left]);
            left++
            continue;
        }

        // comparison

        if(arr1[left] < arr2[right]){
            union.push(arr1[left])
            left++;
        }else if(arr2[right] < arr1[left]){
            union.push(arr2[right]);
            right++;
        }else{
            union.push(arr1[left])
            left++;
            right++;
        }
    }
    return union
} 

var arr1 = [1,1,1,2,3,3,3]
var arr2 = [3,3,3,4]

var result = Union(arr1, arr2)
console.log(result)