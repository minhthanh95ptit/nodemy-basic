// Cho các số 1,2,3,4 hãy thực hiện các các câu lệnh in theo thứ tự
// console.log(“1”)
// console.log(“2”)
// console.log(“3”)
// console.log(“4”)
// Yêu cầu 
// In ra các số theo thứ tự: 1,3,4,2 ( setTimeOut ). Số 2 được delay 2s sau mới đươc hiện ra, số 4 được delay sau 1s mới được hiện ra.


// Kết quả in ra màn hình là gì? 1,3,4,2


console.log(1);
setTimeout(function(){
    console.log(2);
},2000)
console.log(3);
setTimeout(function(){
    console.log(4);
},1000)