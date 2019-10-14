$("#bj").animate({
	width: "100%",
	height: "100%"
}, 1800,function(){
	$("#p").animate({
		opacity: 1,
	}, 2000)
	
})
$("#p1").animate({
	opacity:1,
	left:"3.3rem"
},1000)
$("#p2").fadeIn(2500)
setTimeout(function(){
	/* 1 */
	$("#liuyong").animate({
		width: "30px",
		height: "30px",
	}, 200)
	$("#liuyong").animate({
		width: "1.2rem",
		height: "1.2rem",
		left: "2rem",
		top: "2rem",
	}, 1500)
	/* 2 */
	$("#shenxiaohui").animate({
		width: "30px",
		height: "30px",
	}, 200)
	$("#shenxiaohui").animate({
		width: "1.8rem",
		height: "1.8rem",
		left: "0.2rem",
		top: "3.5rem",
	}, 2200)
	/* 3 */
	$("#aluo").animate({
		width: "30px",
		height: "30px",
	}, 200)
	$("#aluo").animate({
		width: "1.5rem",
		height: "1.5rem",
		left: "1.1rem",
		bottom: "5rem",
	}, 1800)
	/* 4 */
	$("#wqg").animate({
		width: "30px",
		height: "30px",
	}, 200)
	$("#wqg").animate({
		width: "1.5rem",
		height: "1.5rem",
		left: "1.1rem",
		bottom: "3rem",
	}, 2300)
	/* 5 */
	$("#wxf").animate({
		width: "30px",
		height: "30px",
	}, 200)
	$("#wxf").animate({
		width: "1.2rem",
		height: "1.2rem",
		left: "2.8rem",
		bottom: "1.8rem",
	}, 2200)
	/* 6 */
	$("#madong").animate({
		width: "30px",
		height: "30px",
	}, 200)
	$("#madong").animate({
		width: "1.5rem",
		height: "1.5rem",
		right: "1rem",
		bottom: "3.5rem",
	}, 1200)
	/* 7 */
	$("#wangzhuang").animate({
		width: "30px",
		height: "30px",
	}, 200)
	$("#wangzhuang").animate({
		width: "1.2rem",
		height: "1.2rem",
		right: "0.7rem",
		bottom: "6rem",
	}, 1800)
	/* 8 */
	$("#gy").animate({
		width: "30px",
		height: "30px",
	}, 200)
	$("#gy").animate({
		width: "1.5rem",
		height: "1.5rem",
		right: "0.7rem",
		top: "2.8rem",
	}, 1200)
},300)


$(".teacher").click(function() {
	$("#p").hide()
	$("#dianji").hide()
	$("#xxx").fadeToggle(1000)
	$(".teacher").children().hide(500)
	$(".teacher").css("display", "none").animate({
		width: "0.8rem",
		height: "0.8rem"
	}, 500)
	
	var index = $(this).index()
	$(".swiper-container").show()
	$(".swiper-container").css("animation-name","name3")
	var mySwiper = new Swiper('.swiper-container', {
		loop: true, 
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		initialSlide:index - 4
	})
	
})

$("#xxx img").click(function(){
	$("#p").show()
	$("#dianji").show()
	$(".teacher").children().show(500)
	$(".teacher").css({
		"width": "1.5rem",
		"height": "1.5rem",
		"display":"block"
	}, 500)
	
	$(".swiper-container").css("animation-name","name4")
	$(".swiper-container").hide(1000)
	$("#xxx").fadeToggle(500)
})




touch.on(window, "swipeup", function(event) {
	location.href = "5-five.html"
})
