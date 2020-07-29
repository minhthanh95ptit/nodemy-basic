var doan = {
    name: 'Doan',
    age: 22,
    salary: 1000
}
 

var trung = Object.assign({}, doan);
trung.name = 'Trung';
trung.clone = true;

console.log(doan);
console.log(trung);


