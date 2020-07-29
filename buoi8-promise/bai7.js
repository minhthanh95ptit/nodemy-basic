// B7: áp dụng hợp lý, promise1 xử lý 2s retrun 3. promise2 xử lý 5s return 7
// 	Bài toán Cần data của 2 tác vụ trên, biết prmise1 vs promise2 không phụ thuộc nhau. 
// Viết chương trình sao cho kết quả trả về 3+7=10 trong thời gian ngắn nhất 

var promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve(3),2000)
})

var promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve(7),3000)
})


Promise.all([promise1, promise2]).then((datas) => {
    console.log(datas[0] + datas[1]);
});