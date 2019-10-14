
$(function(){
	$("#block1").css({
		"transform":"translate3d(0,0,0)",
		"transition":"1s"
	})
	$("#block2").css({
		"transform":"translate3d(0,0,0)",
		"transition":"1s"
	})
	$("#block3").css({
		"transform":"translate3d(0,0,0)",
		"transition":"1.5s"
	})
	$("#block4").css({
		"transform":"translate3d(0,0,0)",
		"transition":"1.5s"
	})
	$("#block5").css({
		"transform":"translate3d(0,0,0)",
		"transition":"1s"
	})
	$("#block6").css({
		"transform":"translate3d(0,0,0)",
		"transition":"1.5s"
	})
	setTimeout(function(){
		$("#parnter").animate({
			"right":"25%",
			"opacity":"1"
		},1000,function(){
			$("#kr").animate({"top":"65%"},500,function(){
				$("#bank").animate({"top":"65%"},500,function(){
					$("#aiqiyi").animate({"top":"65%"},500)
				})
			})
		})
	},2000)
	
	setTimeout(function(){
		$("#ellemen").animate({
			"opacity":"1"
		},1000,function(){
			$("#graduation").animate({
				"opacity":"1"
			},1500)
		})
	},1000)
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
	location.href = "9-支付.html";
	
});
