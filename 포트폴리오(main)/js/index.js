$(document).ready(function(){

    $('.menu1').click(function(){ 
        var offset = $('#section0').offset(); //선택한 태그의 위치를 반환
    
            //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 몇초 동안 부드럽게 해당 위치로 이동함 
            $('html').animate({scrollTop : offset.top}, 1000);         
    });
    $('.menu2').click(function(){        
        var offset = $('#section1').offset();
            $('html').animate({scrollTop : offset.top}, 1000);
    });
    $('.menu3').click(function(){       
        var offset = $('#section2').offset();  
            $('html').animate({scrollTop : offset.top}, 1000);
    });
    $('.menu4').click(function(){      
        var offset = $('#section3').offset(); 
           $('html').animate({scrollTop : offset.top}, 1000);
    });
    
    
    //스킬게이지
    $(window).scroll(function(){
        var skill = window.scrollY;
        if(skill>=700){
          $('.bar>div').addClass('active');
        }
        else{
          $('.bar>div').removeClass('active');  
        }
      })

      
    //링크이동
    $('#Instagram_link_bg').click(function(){
        window.location.href = './포트폴리오(main)/Instagram Cards★.html'
    });
    $('#STARBUCK_link_bg').click(function(){
        window.location.href = './포트폴리오(main)/popol1.html';
    });
    $('#LOSKARK_link_bg').click(function(){
        window.location.href = './포트폴리오(main)/popol2.html';
    });
    
    $('#Burgerking_link_bg').click(function(){
        window.location.href = './포트폴리오(main)/popol3.html';
    });
    
    $('#Momstouch_link_bg').click(function(){
        window.location.href = './포트폴리오(main)/popol4.html';
    });
    
    
    
    // section3(contact)
    $('.contact_bigbox').hide();
    $('.contact_imgbox').hover(function(){
        $('.contact_bigbox').stop().fadeIn(500);
        $('.contact_bigbox').css('color','white');
    },function(){
        $('.contact_bigbox').stop().slideUp();
    });
    



});
