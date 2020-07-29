var stops = [25, 55, 85, 100];
$.each(stops, function(index, value){
    setTimeout(function(){
        $( ".progress-bar" ).css( "width", value + "%" ).attr( "aria-valuenow", value ); 
    }, index * 1500);
});