// Question - reverse the array 
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

function reversedArray(arr){
    var temp = []
    for(var i=arr.length-1; i>=0; i--){
        temp.push(arr[i])
    }
    return temp;
}


function printArray(arr,size)
{
   for (var i = 0; i < size; i++){
   console.log(arr[i]);
   }
}
   
/* Driver function to test above functions */
    var arr= [1, 2, 3, 4, 5, 6];
    var n = 6;
    // To print original array
    printArray(arr, n);
       
    // Function calling
    arr = reversedArray(arr)
       
    console.log("Reversed array is"); 
       
    // To print the Reversed array
    printArray(arr, n);