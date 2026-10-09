$(document).ready(function(){
    const date = new Date();
    const hour = date.getHours();
    let message ="";
    if(message <=12 ){
        message ="Good morning"
    }
    if(message >12 ){
        message ="Good Afternoon"
    }
    if(message >17){
        message ="Good Evening"
    }
    $('#change').empty().append( ""message"" + " Rin Minea");
})