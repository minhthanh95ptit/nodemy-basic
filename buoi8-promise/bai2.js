function capitalName(){
    this.name = this.name.toUpperCase();
    console.log(this.name);
}
var person1 = {
    name: 'nam', birthDay: '1996-11-26'
  }
var person2 = {
    name: 'hiep', birthDay: '1999-01-26'
  }
capitalName.bind(person1);


// Nhìn chung, hàm call và apply là gần giống nhau. Chúng đều gọi hàm trực tiếp. Chỉ khác ở cách truyền tham số vào (với call thì đối số phân cách bởi dấu phẩy comma và với apply thì đối số cho bởi mảng array)
// Hàm bind thì hơi khác hơn một chút. Hàm này không gọi hàm trực tiếp mà nó sẽ trả về một hàm mới. Và bạn có thể sử dụng hàm số mới này sau. Về cách truyền tham số vào thì nó giống với hàm call.
//Ham call Gọi hàm và cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy

function formatBirthDay(object){
  var doiso = this.birthDay.split("-");
  console.log(doiso[2] + '-' + doiso[1] + '-' + doiso[0]);
}

formatBirthDay.call(person1);
formatBirthDay.call(person2);
