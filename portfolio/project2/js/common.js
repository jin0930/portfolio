$(document).ready(function(){
    
    // 맨위로가기 버튼
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });
    
    
    
    $(".dp2,.dp2-bg").hide();
        
        $("#gnb>li").mouseover(function(){
           $(".dp2,.dp2-bg").stop().slideDown(); 
        });
        
        $("#gnb>li").mouseout(function(){
           $(".dp2,.dp2-bg").stop().slideUp(); 
        });
    
    
    
        var slider = $('.main_visual').bxSlider({
			auto: true, 
		});
        
        
    
    // 클릭시 멈춤 현상 해결 //
		$(document).on('click','.bx-next, .bx-prev',function() {
		slider.stopAuto();
		slider.startAuto();
		slider_01.stopAuto();
		slider_01.startAuto();
		});
		$(document).on('mouseover','.bx-pager, #bx-pager1',function() {
		slider.stopAuto();
		slider.startAuto();
		slider_01.stopAuto();
		slider_01.startAuto();
		slider_02.stopAuto();
		slider_02.startAuto();
		});	
    
    
        
        $('.int_img').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
        });
        
        $('.ba').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3
        });
    
    
});
