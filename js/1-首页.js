$(function() {
	setTimeout(function() {
		$("#img1").animate({
			top: "0"
		}, 1000)
		$("#img2").animate({
			left: "0"
		}, 1000)
		$("#img3").animate({
			bottom: "0"
		}, 1000)
		$("#img4").animate({
			top: "1.42rem",
			left: "1.45rem"
		}, 1100)
		$("#img5").animate({
			top: "0"
		}, 1100)
		$("#img6").animate({
			top: "0",
			left: "3.40rem"
		}, 1100)
		$("#img7").animate({
			top: "2.36rem",
			left: "0rem"
		}, 1100)
		$("#img8").animate({
			top: "2.56rem",
			left: "1.56rem"
		}, 1100)

		$("#img9").animate({
			bottom: "0",
			left: "1.47rem"
		}, 1100, function() {
			$("#img10").css({
				"transform": "translate3d(0,0,0)",
				"transition": "1s ease-in-out",
				"opacity": "1"
			})
			$(function() {
				setTimeout(function() {
					$("#img11").css({
						"transform": "translate3d(0,0,0)",
						"transition": "1s ease-in-out",
						"opacity": "1"
					})
				}, 500)
			})

			$(function() {
				setTimeout(function() {
					$("#img12").css({
						"transform": "translate3d(0,0,0)",
						"transition": "1s ease-in-out",
						"opacity": "1"
					})
				}, 800)
			})
			$(function() {
				setTimeout(function() {
					$("#img13").css({
						"transform": "translate3d(0,0,0)",
						"transition": "1s ease-in-out",
						"opacity": "1"
					})
				}, 1100)
			})
			$(function() {
				setTimeout(function() {
					$("#img14").css({
						"transform": "translate3d(0,0,0)",
						"transition": "1s ease-in-out",
						"opacity": "1"
					})
				}, 1400)
			})
			$(function() {
				setTimeout(function() {
					$("#img15").css({
						"transform": "translate3d(0,0,0)",
						"transition": "1s ease-in-out",
						"opacity": "1"
					})
				}, 2000)
			})
			$(function() {
				setTimeout(function() {
					$("#img16").css({
						"transform": "translate3d(0,0,0)",
						"transition": "1s ease-in-out",
						"opacity": "1"
					})
				}, 2800)
			})
			$(function() {
				setTimeout(function() {
					$("#img17").css({
						"transform": "translate3d(0,0,0)",
						"transition": "1s ease-in-out",
						"opacity": "1"
					})
				}, 2800)
			})


		})
	}, 500)
})

//流星
$(function() {
	setInterval(function() {
		$("#l1").animate({
			top: "+=3.5rem",
			left: "+=7.5rem"
		}, 700, function() {
			var l1_top = parseInt($(this).css("top"))
			var l1_left = parseInt($(this).css("left"))
			if (l1_top > 3.5 || l1_left > 5.5) {
				$(this).css({
					"top": "7.5rem",
					"left": "-3.5rem"
				})
			}
		})
	}, 500)

	setInterval(function() {
		$("#l2").animate({
			top: "-=5.5rem",
			right: "+=8.5rem"
		}, 600, function() {
			var l2_top = parseInt($(this).css("top"))
			var l2_right = parseInt($(this).css("right"))
			if (l2_top = 5.5 || l2_right > 8.5) {
				$(this).css({
					"top": "7.5rem",
					"right": "-3.5rem"
				})
			}
		})
	}, 3500)

	setInterval(function() {
		$("#l3").animate({
			top: "+=4.5rem",
			right: "-=-8.5rem"
		}, 500, function() {
			var l3_top = parseInt($(this).css("top"))
			var l3_right = parseInt($(this).css("right"))
			if (l3_top > 5.5 || l3_right < -10.5) {
				$(this).css({
					"top": "7.5rem",
					"right": "-4.2rem"
				})
			}
		})
	}, 2000)
})

//向上轻扫
var slideBtn = document.getElementById("slide")
touch.on(slideBtn, "touchstart", function(e) {
	var event1 = window.event || e;
	event1.preventDefault(); //关闭系统的默认手势
});
var slideHeight = -document.documentElement.clientHeight;
console.log(slideHeight)
touch.on(slideBtn, "swipeup", function() {

	console.log("向上轻扫");
	// $("html").css({
	// 	"transform": "translateY(" + slideHeight + "px)",
	// 	"transition": "2s"
	// })
	location.href = "2-地球滚动.html";
	
});
