$(document).ready(function(){
    
$(".popup_close").click(function(){
          $("#popup").hide();
          });

  //메인슬라이더배너//
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
    
     $('.store_img').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
        });
    
    

      
});