var value = "";
var typing;
function myFunction(event){
   value += String.fromCharCode(event.keyCode)
 
   clearTimeout(typing);
	typing = setTimeout(function(){
        console.log(value);
		alert('Bạn đã gõ: ' + value);
	} , 1000);
}
