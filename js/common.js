$(document).ready(function() {

	$(document).ready(function(){
		$('.btn-up').mPageScroll2id();
	});


	$(".ymovu-povernennya").click(function(){
		$(".fixed-ymovu-modal").css("display","block");
	});

	$(".zakrutu").click(function(){
		$(".fixed-ymovu-modal").css("display","none");
	});

	$(".btn-order-info").click(function(){
		$(".fixed-znujka-modal").css("display","block");
	});

	$(".zakrutu-modal-znujka").click(function(){
		$(".fixed-znujka-modal").css("display","none");
	});

		$(".zakrutu-modal-blakutna").click(function(){
		$(".fixed-blakutna-modal").css("display","none");
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
