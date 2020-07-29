var promise1 = new Promise(function(resolve, reject){
    setTimeout(resolve('Hoan thanh'),3000);
})


var promise2 = new Promise(function(resolve, reject){
    setTimeout(resolve('Hoan thanh'),2000);
})

var promise3 = new Promise(function(resolve, reject){
    setTimeout(reject('Error'),2000);
})

Promise.all([promise1,promise2,promise3])
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })