var arr = [1,5,7,8,9,15,8];


console.log("-----IN RA SO CHAN-----")
for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}

console.log("-----IN RA SO LE-----")
for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 !== 0){
        console.log(arr[i]);
    }
}

console.log("-----IN RA SO LON HON HOAC BANG 5-----")
for(var i = 0 ; i < arr.length ; i++){
    if(arr[i]  >= 5){
        console.log(arr[i]);
    }
}

console.log("------CONG TONG SO CHIA HET CHO 5------")
var sum = 0;
for(var i = 0 ; i < arr.length ; i++){
    if(arr[i]  % 5 === 0){
        sum += arr[i];
    }
}
console.log(sum);

console.log("------CONG TONG SO CHIA HET CHO 5------")
var sum = 0;
for(var i = 0 ; i < arr.length ; i++){
    if(arr[i]  % 5 === 0){
        sum += arr[i];
    }
}
console.log(sum);

console.log("------Tìm ra tích 3 số đầu của mảng array------")
var mul = 1;
for(var i = 0 ; i < 3 ; i++){
        mul *= arr[i];
}
console.log(mul);

console.log("------Tính tổng 3 phần tử cuối của mảng------")
var sum = 0;
for(var i = arr.length ; i < arr.length - 2 ; i--){
        sum += arr[i];
}
console.log(sum);

console.log("------Tìm xem trong array có phần tử nào là số 5 không?------")

var check = 0;

for(var i = 0 ; i < arr.length  ; i++){
        if(arr[i] === 5){
            check  = 1;
        }
}

if(check === 0){
    console.log("Không tồn tại số  5")
}
else{
    console.log("Tồn tại số  5")
}

console.log("------Đếm số phần tử = 8 trong mảng------")

var count = 0;

for(var i = 0 ; i < arr.length  ; i++){
        if(arr[i] === 8){
            count += 1;
        }
}

console.log("Số phần tử bằng 8 là: " + count);