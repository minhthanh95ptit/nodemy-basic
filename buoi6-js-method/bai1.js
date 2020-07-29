var arr = [1,5,7,8,9,15];

for(var i = 0 ; i < arr.length ; i++){
  arr[i] *= 2;
}

console.log("-----In ra các số chẵn trong mảng-----");
console.log(arr.filter(function(item){
  return item % 2 === 0;  
}))

console.log("-----In ra các số lẻ trong mảng-----");
console.log(arr.filter(function(item){
  return item % 2 !== 0;  
}))

console.log("-----In ra các số lớn hơn hoặc bằng 5 trong mảng-----");
console.log(arr.filter(function(item){
  return item >= 5;  
}))

for(var i = 0 ; i < arr.length ; i++){
  arr[i] /= 2;
}

console.log("-----Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị-----");
console.log(arr.map(function(item){
  if(item > 5){
    return item + 1;
  }
  return item;
}))

console.log("-----Dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng-----");

var arr1 = arr.slice(3);
console.log(arr1);

console.log("-----Dùng splice để xóa 1 phần tử trong mảng-----");
arr.splice(0,1);
console.log(arr);

console.log("----- Dùng push thêm 1 phần tử vào cuối mảng -----");
arr.push(1);
console.log(arr);