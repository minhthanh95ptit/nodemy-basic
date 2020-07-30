function go(){
    var number1 = Number($('#number1').val());
    var number2 = Number($('#number2').val());

    if(number1 > number2){
        $("#result").html('Số thứ nhất lớn hơn');
    }
    else if(number1 < number2){
        $("#result").html('Số thứ hai lớn hơn');
    }
    else{
        $("#result").html('Hai số bằng nhau');
    }
}