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