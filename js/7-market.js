var timeId;
$("#t1").css({
	"transform":"translate3d(0,0,0)",
	"transition":"2s"
})
$("#t2").css({
	"transform":"translate3d(0,0,0)",
	"transition":"2s"
})
$("#t3").css({
	"transform":"translate3d(0,0,0)",
	"transition":"2s"
})
$("#t4").css({
	"transform":"translate3d(0,0,0)",
	"transition":"2s"
})
$("#t5").css({
	"transform":"translate3d(0,0,0)",
	"transition":"2s"
})
$("#t6").css({
	"transform":"translate3d(0,0,0)",
	"transition":"2s"
})
$("#t7").css({
	"transform":"translate3d(0,0,0)",
	"transition":"2s"
})
$(function(){
	setTimeout(function(){
		$("#ttw").animate({
			"opacity":"1"
		},function(){
			$("#ttww").css({
				"opacity":"0.8",
				"transition":"2s"
			})
			
			timeId=setInterval(function(){
				var n = randomNum(1,7);
				$("#user #user"+n).css({
					"opacity":"1"
				})
				
			},100)
		})
	},2000)
})
function randomNum(m,n){
	return Math.floor(Math.random()*(n-m+1)+m);
}

$("#t7").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(0,20);
			var y = randomNum(0,5);
			$("#t7").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"2s"
			})
		},2000)
	})
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
	location.href = "8-战略合作.html";
	
});
