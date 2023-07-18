// Question - find duplicate in an array of n+1 integers- time complexity-o(n) and space complexity - o(1)

var dups = (arr)=>{
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        let elem = arr[i];
        if(map.has(elem)){
            map.set(elem, map.get(elem)+1)
        }else{
            map.set(elem, 1)
        }
    }
    const res = []
    for(const[elem, key] of map){
        if(key>1){
            res.push(elem)
        }
    }
    return res;
}
var arr = [1,3,3,4,2,2,1,3,4]
var output = dups(arr);
console.log(output)