$(document).ready(function(){

$(".UserList-tabItem").not(":first").hide();
$(".UserList-tabWrap .UserList-tab").click(function() {
	$(".UserList-tabWrap .UserList-tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".UserList-tabItem").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.UserGate-Slick').slick({
	dots: true,
	autoplay: false,
	arrows: false,
	pauseOnHover: true,
});

$('.UserList-userSlider').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	infinite: true,
});

});