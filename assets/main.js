$('.accordion-content').hide();




$(document).ready(function() {

    $('.modal').css({'display':'flex'});
    
    $('.accordion-header').click(function() {
       $(this).siblings().toggle();
    });

    $('#show_menu').click(function(){
      var cl = $('#nav').attr('class');

       if(cl=='navbar') {
        $('#nav').addClass('responsive');
       }
       else {
        $('#nav').removeClass('responsive');
       }

    });

    $('.close').click(function() {
        $('.modal').css({'display':'none'});
    });
});
