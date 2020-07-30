var click1 = 0;
var click2 = 0;
var click3 = 0;
var click4 = 0;
var click5 = 0;
var click6 = 0;
var click7 = 0;


function go1(){
    click1++;
    if(click1 === 1){
        $('#block1').css("background-color","red");
    }
    else if(click1 === 2){
        $('#block1').css("background-color","");
        click1 = 0 ;
    }

}
function go2(){
    click2++;
    if(click2 === 1){
        $('#block2').css("background-color","blue");
    }
    else if(click2 === 2){
        $('#block2').css("background-color","");
        click2 = 0 ;
    }
}
function go3(){
    click3++;
    if(click3 === 1){
        $('#block3').css("background-color","green");
    }
    else if(click3 === 2){
        $('#block3').css("background-color","");
        click3 = 0 ;
    }
}
function go4(){
    click4++;
    if(click4 === 1){
        $('#block4').css("background-color","black");
        $('#block4').css("color","white");
    }
    else if(click4 === 2){
        $('#block4').css("background-color","");
        $('#block4').css("color","");
        click4 = 0 ;
    }
}
function go5(){
    click5++;
    if(click5 === 1){
        $('#block5').css("background-color","brown");
    }
    else if(click5 === 2){
        $('#block5').css("background-color","");
        click5 = 0 ;
    }
}
function go6(){
    click6++;
    if(click6 === 1){
        $('#block6').css("background-color","pink");
    }
    else if(click6 === 2){
        $('#block6').css("background-color","");
        click6 = 0 ;
    }
}
function go7(){
    $('#block7').css("background-color","orange");
    click7++;
    if(click7 === 1){
        $('#block7').css("background-color","orange");
    }
    else if(click7 === 2){
        $('#block7').css("background-color","");
        click7 = 0 ;
    }
}
