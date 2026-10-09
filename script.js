$(document).ready(function(){
    const date = new Date();
    const hour = date.getHours();
    let message ="";
    if(message <=24){
        message ="Good Evening";
    }else if(message <=17 ){
        message = "Good Afternoon";
    }else if (message <=12) {
        message = "Good Morning";
    }
    
    $('#change').empty().append( message + " Rin Minea");
})