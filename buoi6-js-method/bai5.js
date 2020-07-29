var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';


console.log("-----Đếm xem có tất cả bao ký tự-----");
console.log(greeting.length);

console.log("-----indexOf tìm xem nodemy nằm ở vị trí nào-----");
console.log(greeting.indexOf('nodemy'));

console.log("-----indexOf tìm xem Nodemy nằm ở vị trí nào-----");
console.log(greeting.indexOf('Nodemy'));

console.log("-----Dùng .startWith kiểm tra xem có bắt đầu với Welcome không-----");
console.log(greeting.startsWith('Welcome'));

console.log("-----Dùng .substring để lấy chữ Academy-----");
console.log(greeting.substring(greeting.length - 7, greeting.length));

console.log("-----Dùng .split để tách các từ-----")
console.log(greeting.split(" "));

var greeting2 = '   Welcome to Nodemy, Nodemy is stand for Nodejs Academy';
console.log("-----Dùng dùng .trim() để xóa các dấu cách ngoài rìa-----");
console.log(greeting2.trim());

console.log("-----Dùng include để kiểm tra xem Nodemy có trong câu trên không-----");
console.log(greeting.includes('Nodemy'));


console.log("-----Dùng .replace để thay thế Nodemy thành NODEMY-----");
console.log(greeting.replace('Nodemy','NODEMY'));

console.log("-----Dùng .toUppercase để in hoa chữ cái-----");
console.log(greeting.toUpperCase());

console.log("-----dùng .charAt để lấy 1 ký tự ở vị trí số 4-----");
console.log(greeting.charAt(4));