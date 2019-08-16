$(document).ready(function(){
    $('#sidebar ul li.transform').click(function(){
        $('#sidebar ul li.transform').removeClass("active");
        $(this).addClass("active");
    })
    
    $('.carousel').carousel();

})