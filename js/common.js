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
	$(".show-rozmiru").click(function(){
		$(".rozmiru").slideToggle();
	});

});
