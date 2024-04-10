$(document).ready(function(){

    //서브메뉴
    $('.sub_list').hide();
            
    if($(window).width() >= 768) {
        $('#header').hover(function(){
             $('.sub_list').stop().slideDown();
            },function(){
             $('.sub_list').stop().slideUp();
            });
        }
    else{
        $('.sub_list').hide();
    };

    $('.header_menubars').click(function(){
        $('.check').show();           
    });
    $('.fa-xmark').click(function(){
        $('.check').hide(); 
    });

    // $('.sub_list>ul li').hover(
    //     function () {
    //         $(this).css('background-color', '#4d4b4a'); // 호버 시 배경색 변경
    //     },
    //     function () {
    //         $(this).css('background-color', ''); // 마우스가 벗어날 때 원래 배경색으로 복원
    //     }
    // );

    //공지사항
    setInterval(newsPlay,3000);
        function newsPlay(){
            $('.news_box').animate({marginTop:'-20px'},function(){
                $('.news_box li').first().appendTo('.news_box');
                $('.news_box').css('margin-top','0px');
            });
        };

});