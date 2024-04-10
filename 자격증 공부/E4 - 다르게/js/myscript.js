$('.menu>li').hover(function(){
    $(this).find('.submenu').stop().slideDown();
    },function(){
    $(this).find('.submenu').stop().slideUp();
});



$('#notice1').click(function(){
    $('.popupbg').show();
    $('.popup').show();
});
$('#closebtn').click(function(){
    $('.popupbg').hide();
    $('.popup').hide();
})



var slidewidth = $('.swindow').css('width');
console.log(slidewidth);

setInterval(function(){
    $('.swrap').animate({marginLeft:'-'+slidewidth},function(){
        $('.swrap>li').eq(0).appendTo('.swrap');
        $('.swrap').css('margin-left','0px');    
    });
},3000);
