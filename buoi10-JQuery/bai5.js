function go(){
    var user = $('#user').val();
    var pass = $('#password').val();

    if(user === '' || pass === ''){
        alert('Không được để trống email hoặc password');
        return;
    }
    if(pass.length < 8){
        alert('Nhập nhiều hơn 8 kí tự');
        return;
    }
    alert('Đăng nhập thành công');
}