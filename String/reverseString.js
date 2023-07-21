//  Question - reverse a string

// Example - input - "geek", output - "keeg"

var reverseString = (str) =>{
    let reversedString = "";
    for(let i=str.length-1; i>=0; i--){
        reversedString += str[i]
    }
    return reversedString;
}

var str = "geek";
var output = reverseString(str)
console.log(output);