$(document).ready(function(){

    //로그인
    $('.login_btn').click(function(){
        $('.login_box').css('display','block');
    });
    $('.log_btn').click(function(){
      $('.login_box').css('display','none');
    });
    $('.login_close').click(function(){
      $('.login_box').css('display','none');
    });


    //메뉴 슬라이드
    $('.menu_box>div').hover(function() {

        $(this).find('.menu_sub_menu').stop().slideDown();

        }, function(){

          $(this).find('.menu_sub_menu').stop().slideUp();
        
    });


    // 모바일화면 메뉴바체크시
    // 1
    $('.menu_bar_2').click(function(){
        $('.check').show();
      });

    // 2
    // 클릭한 요소를 추적 변수
    var lastClicked = null;
    $('.check > div').click(function() {
        // 클릭한 요소의 하위에 있는 '.check_sub'를 찾아 슬라이드 다운
        var currentClicked = $(this);
  
        // 마지막에 클릭한 요소와 현재 클릭한 요소가 같으면 숨기고, 다르면 현재 클릭한 요소를 보여줌
        if(lastClicked && lastClicked.is(currentClicked)){
            currentClicked.find('.check_sub').stop().slideUp();
            lastClicked = null;
        }else{
            $('.check_sub').stop().slideUp();
            currentClicked.find('.check_sub').stop().slideDown();
            lastClicked = currentClicked;
        }
    });
    // 다른 곳을 클릭하면 '.check_sub'를 슬라이드 업하고 lastClicked를 null로 초기화
    $(document).click(function(event){
        if(!$(event.target).closest('.check').length){
        $('.check_sub').stop().slideUp();
        lastClicked = null;
        }
    });
    // 닫기 버튼 클릭 시 '.check'를 숨김
    $('.close_btn').click(function() {
        $('.check').hide();
        lastClicked = null;
    });







});