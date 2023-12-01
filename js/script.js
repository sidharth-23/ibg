$(document).ready(function()
{
    $(".header .toggle").on('click',function(){
        $(".header .nav").toggleClass('active');
        $(this).toggleClass('active');
    });
});