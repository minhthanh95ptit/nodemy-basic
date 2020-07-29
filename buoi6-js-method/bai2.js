var arr = [1,8,5,2,7,6,9,2,6];

console.log("---Tăng dần---");
console.log(arr.sort(function(a,b){
    return a - b;
}))

console.log("---Giảm dần---");
console.log(arr.sort(function(a,b){
    return b - a;
}))