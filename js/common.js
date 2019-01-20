$(document).ready(function() {

	$(document).ready(function(){
		$('.btn-up').mPageScroll2id();
	});
	$(".order-za-harakterisikou").click(function(){
		$(".modal-window-zam-har").css("display","block");
	});

	$(".zakrutu-modalku").click(function(){
		$(".modal-window-zam-har").css("display","none");
	});

	$(".show-rozmiru-one").click(function(){
		$(".rozmiru-one").slideToggle();	
	});

	$(".show-rozmiru-two").click(function(){
		$(".rozmiru-two").slideToggle();	
	});

	$(".show-rozmiru-three").click(function(){
		$(".rozmiru-three").slideToggle();	
	});

	$(".show-rozmiru-four").click(function(){
		$(".rozmiru-four").slideToggle();	
	});

	$(".show-rozmiru-five").click(function(){
		$(".rozmiru-five").slideToggle();	
	});

	$(".show-rozmiru-six").click(function(){
		$(".rozmiru-six").slideToggle();	
	});

});
