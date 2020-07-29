var phucBirthday = '27-10-1992';
var cuongBirthday= '27-11-1994';

var arr1 = phucBirthday.split("-");
var arr2 = cuongBirthday.split("-");

console.log("-----Đổi định dạng ngày thành ‘1992-11-26’-----");

var newPhucBirthDay = arr1[2] + "-" + arr1[1] + "-" + arr1[0];
var newCuongBirthDay = arr2[2] + "-" + arr2[1] + "-" + arr2[0];

console.log(newPhucBirthDay);
console.log(newCuongBirthDay);


console.log("-----Quy đổi về cả 2 về object date-----");

var newDateObject1 = new Date(newPhucBirthDay);
var newDateObject2 = new Date(newCuongBirthDay)


console.log(newDateObject1);
console.log(newDateObject2);


console.log("-----So sánh xem phuc hay cuong lớn tuổi hơn-----");

if(newDateObject1 > newDateObject2){
    console.log("Phuc lon tuoi hon Cuong");
}
else{
    console.log("Cuong lon tuoi hon Phuc");
}


console.log("-----Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?-----");

newDateObject1.setDate(newDateObject1.getDate() + 100);
console.log(newDateObject1);
console.log(newDateObject1.getDay());
debugger;
switch(newDateObject1.getDay()){
    case 0: 
        console.log("Chu Nhat");
        break;
    case 1: 
        console.log("Thu Hai");
        break;
    case 2: 
        console.log("Thu Ba");
        break;
    case 3: 
        console.log("Thu Tu");
        break;
    case 4: 
        console.log("Thu Nam");
        break;
    case 5: 
        console.log("Thu Sau");
        break;
    case 6: 
        console.log("Thu Bay");
        break;
    default:
        console.log("Error");
}