// NEWS
$(document).ready(function(){
	var clone = 0;
	var trandClone = 1;
	$(".news .moreButton").click(function(){
		if (clone==0) {
			$(".news .newsWrap").clone().attr('class', 'newsWrap'+ clone++).appendTo(".newsWrap");
		}
	});

	$(".trand .moreButton").click(function(){
		$(".trand .trandSubWrap1").fadeIn();
		$(".trand .trandSubWrap2").fadeIn();
		// if(trandClone==1){
		// 	$(".trand .trandWrap").clone().attr('class', 'trandWrap'+ trandClone).appendTo(".trandWrap");
		// 	$('.trand .trandWrap1 .trandSubWrap1 .trandNum h1').text(function(i, oldText) {
  //       		return oldText === '1' ? '5' : oldText;
  //   		});
  //   		$('.trand .trandWrap1 .trandSubWrap2 .trandNum h1').text(function(i, oldText) {
  //       		return oldText === '2' ? '6' : oldText;
  //   		});
  //   		$('.trand .trandWrap1 .trandSubWrap1 .trandNum h1').text(function(i, oldText) {
  //       		return oldText === '3' ? '7' : oldText;
  //   		});
  //   		$('.trand .trandWrap1 .trandSubWrap2 .trandNum h1').text(function(i, oldText) {
  //       		return oldText === '4' ? '8' : oldText;
  //   		});
  //   		trandClone++;
		// }
	});

	$(".s2-1").click(function(){
		if ($(".s2-1 span").is(":visible")){
			$(".s2-1 span").fadeOut();
			$(".s2-1 .toggleIcon").fadeIn();
			$(".s2-1 .toggleIcon2").hide();
		} else if ($(".s2-1 span").is(":hidden")){
			$(".s2-1 span").fadeIn();
			$(".s2-1 .toggleIcon2").fadeIn();
			$(".s2-1 .toggleIcon").hide();
		}
	});
	$(".s2-2").click(function(){
		if ($(".s2-2 span").is(":visible")){
			$(".s2-2 span").fadeOut();
			$(".s2-2 .toggleIcon").fadeIn();
			$(".s2-2 .toggleIcon2").hide();
		} else if ($(".s2-2 span").is(":hidden")){
			$(".s2-2 span").fadeIn();
			$(".s2-2 .toggleIcon2").fadeIn();
			$(".s2-2 .toggleIcon").hide();
		}
	});
	$(".s2-3").click(function(){
		if ($(".s2-3 span").is(":visible")){
			$(".s2-3 span").fadeOut();
			$(".s2-3 .toggleIcon").fadeIn();
			$(".s2-3 .toggleIcon2").hide();
		} else if ($(".s2-3 span").is(":hidden")){
			$(".s2-3 span").fadeIn();
			$(".s2-3 .toggleIcon2").fadeIn();
			$(".s2-3 .toggleIcon").hide();
		}
	});

	$(".contactSubMenu li").click(function(){
		var a = $(this).val();
	    $(".contactSubMenu li").css({
	        "background": "#ede6e6",
	        "color": "#2b2b2d"
	    });
	    $(this).css({
	        "background": "#2b2b2d",
	        "color": "#fff"
	    });
	    if (a == 1) {
	    	$(".sect1").fadeIn();
	    	$(".sect2").hide();
	    	$(".sect3").hide();
	    } else if (a == 2) {
	    	$(".sect1").hide();
	    	$(".sect2").fadeIn();
	    	$(".sect3").hide();
	    } else {
	    	$(".sect1").hide();
	    	$(".sect2").hide();
	    	$(".sect3").fadeIn();
	    }
	});


	$(".challengeWrap ul li span").click(function(){
	    $("html, body").delay(100).animate({
	        scrollTop: $('.rule').offset().top 
	    }, 1000);
	});


	$(".cate1").click(function(){
		$(".productCateWrap li").css({"padding-bottom": "1vw",
					 				  "border-bottom": "none"});
		$(this).css({"padding-bottom": "0",
					 "border-bottom": "4px solid red"});
		$(".pImg1").attr('src','images/index-product-1-1.jpg');
		$(".pImg2").attr('src','images/index-product-1-2.jpg');
		$(".pImg3").attr('src','images/index-product-1-3.jpg');
		$(".pImg4").attr('src','images/index-product-1-4.jpg');
		$(".pImg5").attr('src','images/index-product-1-5.jpg');
		$(".pImg6").attr('src','images/index-product-1-6.jpg');
		$(".pImg7").attr('src','images/index-product-1-7.jpg');
		$(".pImg8").attr('src','images/index-product-1-8.jpg');
	});
	$(".cate2").click(function(){
		$(".productCateWrap li").css({"padding-bottom": "1vw",
					 				  "border-bottom": "none"});
		$(this).css({"padding-bottom": "0",
					 "border-bottom": "4px solid red"});
		$(".pImg1").attr('src','images/index-product-2-1.jpg');
		$(".pImg2").attr('src','images/index-product-2-2.jpg');
		$(".pImg3").attr('src','images/index-product-2-3.jpg');
		$(".pImg4").attr('src','images/index-product-2-4.jpg');
		$(".pImg5").attr('src','images/index-product-2-5.jpg');
		$(".pImg6").attr('src','images/index-product-2-6.jpg');
		$(".pImg7").attr('src','images/index-product-2-7.jpg');
		$(".pImg8").attr('src','images/index-product-2-8.jpg');
	});
	$(".cate3").click(function(){
		$(".productCateWrap li").css({"padding-bottom": "1vw",
					 				  "border-bottom": "none"});
		$(this).css({"padding-bottom": "0",
					 "border-bottom": "4px solid red"});
		$(".pImg1").attr('src','images/index-product-3-1.jpg');
		$(".pImg2").attr('src','images/index-product-3-2.jpg');
		$(".pImg3").attr('src','images/index-product-3-3.jpg');
		$(".pImg4").attr('src','images/index-product-3-4.jpg');
		$(".pImg5").attr('src','images/index-product-3-5.jpg');
		$(".pImg6").attr('src','images/index-product-3-6.jpg');
		$(".pImg7").attr('src','images/index-product-3-7.jpg');
		$(".pImg8").attr('src','images/index-product-3-8.jpg');
	});
	$(".cate4").click(function(){
		$(".productCateWrap li").css({"padding-bottom": "1vw",
					 				  "border-bottom": "none"});
		$(this).css({"padding-bottom": "0",
					 "border-bottom": "4px solid red"});
		$(".pImg1").attr('src','images/index-product-4-1.jpg');
		$(".pImg2").attr('src','images/index-product-4-2.jpg');
		$(".pImg3").attr('src','images/index-product-4-3.jpg');
		$(".pImg4").attr('src','images/index-product-4-4.jpg');
		$(".pImg5").attr('src','images/index-product-4-5.jpg');
		$(".pImg6").attr('src','images/index-product-4-6.jpg');
		$(".pImg7").attr('src','images/index-product-4-7.jpg');
		$(".pImg8").attr('src','images/index-product-4-8.jpg');
	});
	$(".cate5").click(function(){
		$(".productCateWrap li").css({"padding-bottom": "1vw",
					 				  "border-bottom": "none"});
		$(this).css({"padding-bottom": "0",
					 "border-bottom": "4px solid red"});
		$(".pImg1").attr('src','images/index-product-5-1.jpg');
		$(".pImg2").attr('src','images/index-product-5-2.jpg');
		$(".pImg3").attr('src','images/index-product-5-3.jpg');
		$(".pImg4").attr('src','images/index-product-5-4.jpg');
		$(".pImg5").attr('src','images/index-product-5-5.jpg');
		$(".pImg6").attr('src','images/index-product-5-6.jpg');
		$(".pImg7").attr('src','images/index-product-5-7.jpg');
		$(".pImg8").attr('src','images/index-product-5-8.jpg');
	});
	$(".cate6").click(function(){
		$(".productCateWrap li").css({"padding-bottom": "1vw",
					 				  "border-bottom": "none"});
		$(this).css({"padding-bottom": "0",
					 "border-bottom": "4px solid red"});
		$(".pImg1").attr('src','images/index-product-6-1.jpg');
		$(".pImg2").attr('src','images/index-product-6-2.jpg');
		$(".pImg3").attr('src','images/index-product-6-3.jpg');
		$(".pImg4").attr('src','images/index-product-6-4.jpg');
		$(".pImg5").attr('src','images/index-product-6-5.jpg');
		$(".pImg6").attr('src','images/index-product-6-6.jpg');
		$(".pImg7").attr('src','images/index-product-6-7.jpg');
		$(".pImg8").attr('src','images/index-product-6-8.jpg');
	});
});