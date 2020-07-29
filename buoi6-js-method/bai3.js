var obj = [{
        name: 'Trung',
        class: 'Nodemy01',
        dateJoin: '05-02-2020',
        age: 20
    }, {
        name: 'Phong',
        class: 'Nodemy01',
        dateJoin: '06-01-2020',
        age: 19
    }, {
        name: 'Nam',
        class: 'Nodemy02',
        dateJoin: '25-01-2020',
        age: 20
}];

console.log("Sắp xếp mảng object có tuổi tăng dần");
console.log(obj.sort(function(a, b){
    return a.age - b.age;
}))


console.log("Sắp xếp mảng object theo ngày tham gia của học viên");

console.log(obj.sort(function(a, b){
    var temp1 = a.dateJoin.split("-");
    var temp2 = b.dateJoin.split("-");

    var time1 = parseInt(temp1[2]) * 365 + parseInt(temp1[1]) * 30 + parseInt(temp1[0]);
    var time2 = parseInt(temp2[2]) * 365 + parseInt(temp2[1]) * 30 + parseInt(temp2[0]);

    if(time1 < time2){
        return -1;
    }
    return 1;

}))

console.log("Tìm ra những học viện tham gia trước tháng 2");
console.log(obj.filter(function(item){
    var temp1 = item.dateJoin.split("-");

    return temp1[1] < '02';
}))

console.log("Viết hoa toàn bộ Tên học viện");
console.log(obj.map(function(item){
    item.name = item.name.toUpperCase();
    return item;
}))