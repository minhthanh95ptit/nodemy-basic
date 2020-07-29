// B6: promise1 xử lý tác vụ 3s  cho ra kết quả là 2
// 	promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
// 	promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
// 	in ra màn hình true hoặc false.

var promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve(2),3000);
})


var promise2 = new Promise((resolve, reject) => {
    var kq = promise1
        .then(data => {
            return data * 3;
        })
        .catch(err => {
            return err;
        })

    setTimeout(function(){
        resolve(kq)
    },2000);
})

debugger;
var promise3 = new Promise((resolve, reject) => {
    var data = promise2.then(data => {
        return data;
    })
    resolve(data);
})

promise3.then(data => {
    if(data > 10){
        console.log(true)
    }
    else{
        console.log(false)
    }
})

