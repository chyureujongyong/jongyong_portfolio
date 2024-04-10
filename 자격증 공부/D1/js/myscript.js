//위로 올라가는슬라이드
setInterval(function(){
    $('.slidewrap').animate({marginTop:'-400px'},function(){
        $('.slidewrap').css('margin-top','0px');
        $('.slidewrap a').eq(0).appendTo('.slidewrap');
    });
},3000);

//아래로 내려오는 슬라이드
// setInterval(function(){
//     $('.slidewrap a').last().prependTo('.slidewrap');
//     $('.slidewrap').css('margin-top','-400px');
//     $('.slidewrap').animate({marginTop:'0px'});
// },3000)




//메뉴 슬라이드
$('.submenu').hide();
$('.gnb>li').hover(function(){
    $(this).find('.submenu').stop().slideDown();
},function(){
    $(this).find('.submenu').stop().slideUp();
});

//탭메뉴
$('.notice').click(function(){
    $('.noticebox').show();
    $('.gallerybox').hide();
});
$('.gallery').click(function(){
    $('.noticebox').hide();
    $('.gallerybox').show();
});


$('#popupopen').click(function(){
    $('.popup').show();
});
$('.popup a').click(function(){
    $('.popup').hide();
});