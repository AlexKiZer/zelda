

$(document).ready(function(){
	$(window , document).scroll(function(value){
    var scroll = $(window).scrollTop();
    if(scroll>100){
        $('.navigation').addClass('navi');
    }
    else if(scroll<=100){
        $('.navigation').removeClass('navi');
    }
    if(scroll>600){
   		$('#pointer').addClass('pointer').fadeIn(1000);
    }
    if(scroll<600){
    	$('#pointer').fadeOut(1000);
    }
});
	$('#pointer').on('click',function(){
		$('body,html').animate({scrollTop:0},1000);
	})
});