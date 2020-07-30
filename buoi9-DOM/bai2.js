// Bài 2:
// Kiêm tra thông tin của form đăng nhập: 
// đối với username thì không cho người dùng để trống, nếu để trống thì in ra dòng thông báo không được để trống
// đối với password:
// + người dùng thì không cho người dùng để trống nếu để trống thì in ra dòng thông báo khong được để trống
// + password của người dùng thì có ít nhất 8 kí tự
// -> Nếu người dùng không có gặp lỗi nào về password và username các lỗi trên thì in ra thông báo cho người dùng là in thông tin thành công

function checkForm(){
   var user = document.forms["myForm"]["fuser"];
   var password = document.forms["myForm"]["fpassword"];

    console.log(user);
    console.log(password);

    if(user === "" || password === ""){
       document.getElementById('demo').innerHTML = "Không được để trống";
       return;
    }
    else if(password.length < 8){
        document.getElementById('demo').innerHTML = "password phải có ít nhất 8 kí tự";
        return;
    }
    document.getElementById('demo').innerHTML = "Thông Tin Thành Công ";

}