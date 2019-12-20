$(document).ready(function(){


	if($(window).width() < 768){
		$(".menuIcon").click(function(){
			if($(".menu").is(':visible')){
				$(".menu").slideUp('slow');
				$(".block").fadeOut();
			} else if($(".menu").is(':hidden')){
				$("#userMenu").hide();
				$(".menu").slideDown('slow');
				$(".block").fadeIn();
			}
		});
	}

	$(".block").click(function(){
		if($(window).width() < 768){
			if($(".menu").is(":visible")){
				$(".menu").slideUp("slow");
				$(".block").fadeOut();
			} else if($("#userMenu").is(":visible")){
				$("#userMenu").slideUp("slow");
				$(".block").fadeOut();
			}
		} else if($(window).width() >= 768){
			$("#userMenu").slideUp("slow");
			$(".block").fadeOut();
		}
	});
	$(".userIcon").click(function(){
		if($(window).width() < 768){
			if($("#userMenu").is(":hidden")){
				$(".menu").hide();
				$("#userMenu").slideDown("slow");
				$(".block").fadeIn();
			} else if($("#userMenu").is(":visible")) {
				$("#userMenu").slideUp("slow");
				$(".block").fadeOut();
			}
		} else if($(window).width() >= 768) {
			if($("#userMenu").is(":hidden")){
				$("#userMenu").slideDown("slow");
				$(".block").fadeIn();
			} else if($("#userMenu").is(":visible")) {
				$("#userMenu").slideUp("slow");
				$(".block").fadeOut();
			}
		}
	});


	$(".searchIcon").click(function(){
		if($(window).width() < 768){
			if($(".search input").is(':hidden')){
				$(".searchIcon").css({'top':'3px', 'right':'9px'}, 700);
				$(".search input").show( "slide", {direction: "left" }, 1000 );
				$(".menuIcon").fadeOut();
				$("header .logoIcon").fadeOut();
			} else if($(".search input").is(':visible')){
				$(".searchIcon").css({'top':'5px', 'right':'0'});
				$(".search input").hide("slide", {direction: "right" }, 1000 );
				$(".menuIcon").fadeIn();
				$("header .logoIcon").fadeIn();
			}
		}
	});

	$("div a img").last().css("display", "none");
	$(".news div a img").last().css("display", "inline");
});