// section1
document.querySelectorAll('.first').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('rotate');
    });
});


// section3
$(document).ready(function() {
    $('.second').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).css('z-index', '');
        } else {
            $('.second').removeClass('active').css('z-index', '');
            $(this).addClass('active');
            $(this).css('z-index', '10');
        }
    });

    $('.second').on('mouseleave', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).css('z-index', '');
        }
    });
});


// section4
document.querySelectorAll('.fourth').forEach(function(moving) {
    var fourthcardwidth = moving.offsetWidth;
    var fourthcardheight = moving.offsetHeight;

    moving.addEventListener('mousemove', function(f) {
        var fourx = f.offsetX;
        var foury = f.offsetY;
        var rotateFY = -40 / fourthcardwidth * fourx + 20;
        var roateFX = -40/fourthcardheight * foury - ((fourthcardheight/2)/(-fourthcardheight/40));
        moving.style.transform = `perspective(1000px) rotateY(${rotateFY}deg) rotateX(${roateFX}deg)`;
    });

    moving.addEventListener('mouseleave', function() {
        moving.style.transform = 'rotateY(0deg)'; 
    });
});
$(document).ready(function() {
    $('.fourth').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).css('z-index', '');
        } else {
            $('.second').removeClass('active').css('z-index', '');
            $(this).addClass('active');
            $(this).css('z-index', '10');
        }
    });

    $('.fourth').on('mouseleave', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).css('z-index', '');
        }
    });
});






//클릭시 이벤트
// let activeCard = null;

// document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('click', function() {
//         if (activeCard && activeCard !== this) {
//             activeCard.classList.remove('is-flipped');
//             activeCard.removeEventListener('animationend', handleAnimationEnd);
//         }

//         if (!this.classList.contains('is-flipped')) {
//             this.classList.add('is-flipped');
//             activeCard = this;
//         } else {
//             this.classList.remove('is-flipped');
//             this.addEventListener('animationend', handleAnimationEnd, { once: true });
//         }
//     });
// });
// function handleAnimationEnd(event) {
//     event.target.classList.remove('is-flipped');
// }


// 마우스 위치에따른 3d효과
// var cards = document.querySelectorAll('.card');
// var cardoverlays = document.querySelectorAll('.cardoverlay')
// cards.forEach(function(cardmotion, index) {
//     cardmotion.addEventListener('mousemove', function(e) {
//         var x = e.offsetX;
//         var y = e.offsetY;
//         console.log(x, y);
//         var rotateY = (-8/53) * x + 20;
//         var rotateX = -1/10 * y + 30;
        
//         cardoverlays[index].style.backgroundPosition = `${x/5 + y/5}%`;
//         cardmotion.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     });

//     cardmotion.addEventListener('mouseout',function(){
//         cardoverlays.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
//     })

// });

let activeCard = null;
const cards = document.querySelectorAll('.card');
const cardoverlays = document.querySelectorAll('.cardoverlay');

cards.forEach((card, index) => {
    // 클릭 이벤트
    card.addEventListener('click', function() {
        // 현재 클릭한 카드가 activeCard와 다를 때
        if (activeCard && activeCard !== this) {
            activeCard.classList.remove('is-flipped');
            activeCard.classList.remove('show-back'); 
            activeCard.removeEventListener('animationend', handleAnimationEnd);
        }

        // 클릭한 카드에 is-flipped 클래스가 없으면 추가하고, 있으면 제거
        if (!this.classList.contains('is-flipped')) {
            this.classList.add('is-flipped');
            this.classList.add('show-back'); 
            activeCard = this;
        } else {
            this.classList.remove('is-flipped');
            this.classList.remove('show-back'); 
            this.addEventListener('animationend', handleAnimationEnd, { once: true });
        }
    });

   
    // 마우스 위치에 따른 3D 효과
    card.addEventListener('mousemove', function(e) {
        const x = e.offsetX;
        const y = e.offsetY;
        const rotateY = (-8 / 53) * x + 20;
        const rotateX = (-1 / 10) * y + 30;
        
        cardoverlays[index].style.backgroundPosition = `${x / 5 + y / 5}%`;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // 마우스가 카드에서 벗어날 때 원래 상태로 복원
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        cardoverlays[index].style.backgroundPosition = 'center';
    });
});

function handleAnimationEnd(event) {
    event.target.classList.remove('is-flipped');
    event.target.classList.remove('show-back'); 
}
