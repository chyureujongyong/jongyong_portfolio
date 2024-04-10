//서브메뉴 다보일떄!!
// $('.menu').mouseenter(function(){
//     $('.sub').stop().slideDown();
// });
// $('.menu').mouseleave(function(){
//     $('.sub').stop().slideUp();
// })

//위에꺼랑 똑같음
$('.menu').hover(function(){
    $('.sub').stop().slideDown();
},function(){
    $('.sub').stop().slideUp();
});



//서브메뉴 하나씩만 보일떄!! == $('.menu li')
// $('.menu li').mouseenter(function(){
//     $(this).find('.sub').slideDown();
// })



// ---slidebox---
setInterval(function(){
    $('.slidewrap').animate({marginTop:'-300px'},function(){
        $('.slidewrap').css('margin-top','0px');
        $('.slidewrap li').first().appendTo('.slidewrap');
    });
},3000);












// 탭메뉴
$('.title1').click(function(){
    $('.noticebox').show();
    $('.gallbox').hide()
});
$('.title2').click(function(){
    $('.noticebox').hide();
    $('.gallbox').show();
});

$('#first_notice').click(function(){
    $('.popupbg').show();
    $('.popup').show();
});
$('.close').click(function(){
    $('.popupbg').hide();
    $('.popup').hide();
});