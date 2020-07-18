var obj = {
    hangXe: 'BMW',
    gia: '250000 USD',
    xuatXu: 'Đức',
    color: 'Đen',

}

console.log(obj);
console.log(obj['hangXe'] + " " +  obj['color'].toLowerCase() + " xuất xứ ở "  + obj['xuatXu'] + " có giá " + obj['gia']);
console.log(`${obj['hangXe']} ${obj['color'].toLowerCase()} xuất xứ ở ${obj['xuatXu']} có giá ${obj['gia']}`)