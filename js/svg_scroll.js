$(document).ready(function(){
    //초기 필요한 변수값 설정
    var pos2 = $("#info ul li").offset().top;
    var base = -600;

    //브라우저 스크롤시
    $(window).on("scroll", function(){
        var scroll = $(this).scrollTop();

        if( scroll >= pos2+base ){
            scroll = (scroll-(pos2+base)) *10;

            var result = 1780 - scroll;

            if(result < 0 ) result = 0;  

            var bg = scroll/5000;            

            $("#info path").css({ 
                strokeDashoffset :  result,
                fill : "rgb(226, 171, 21,"+bg+")"
            });
        }
    })
});