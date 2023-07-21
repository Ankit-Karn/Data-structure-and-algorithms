// Question - Find all the duplicate characters present in the String

var duplicateCharacter =(str)=>{
    const map = new Map()
    for(let i=0; i<str.length; i++){
        let curr = str[i];
        if(map.has(curr)){
            map.set(curr, map.get(curr)+1)
        }else{
            map.set(curr, 1)
        }
    }
    let res = []
    for(const[curr, key] of map){
        if(key>1){
            res.push(curr)
        }
    }
    return res;
}

var str = "geek";
var output = duplicateCharacter(str);
console.log(output);