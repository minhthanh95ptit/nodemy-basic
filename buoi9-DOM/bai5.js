
var value = "";
function myFunction(event){
   value += String.fromCharCode(event.keyCode)
   console.log(value);
   clearTimeout(typing);
	var typing = setTimeout(function(){
		alert('ban da go ' + value);
	} , 1000);
}
