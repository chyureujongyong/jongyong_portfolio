$('.sub').hide();
$('nav>ul>li').hover(function(){
    $('.sub').stop().fadeIn();
},function(){
    $('.sub').stop().fadeOut();
});


// 슬라이드
$('.slide2, .slide3').hide();
setInterval(function(){
    $('.slide a').first().fadeOut();
    $('.slide a').eq(1).fadeIn();
    $('.slide a').first().appendTo('.slide');
},2500);



//팝업
$('.popup').hide();
$('#popupopen').click(function(){
    $('.popup').show();
});
$('.popup a').click(function(){
    $('.popup').hide();
});