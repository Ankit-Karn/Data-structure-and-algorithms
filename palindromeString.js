// Question - Check whether a String is palindrome or not ?

var palindromeCheck =(str)=>{
    let newString = "";
    for(let i=str.length-1; i>=0; i--){
        newString += str[i]
    }
    if(str == newString) return true;
    else return false;
}

var str = "aba";
var output = palindromeCheck(str);
console.log(output);