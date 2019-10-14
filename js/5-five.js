var timeId;
$("#tamen").animate({
	opacity:"1",
},2000,function(){
	$(".img").slideUp()
	setTimeout(function(){
		$("#img1").slideDown(function(){
			$("#img1").css({
				"transform":"translate3d(-0.32rem,-0.075rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow1").css("display","block")

		})
	},3500)
	setTimeout(function(){
		$("#img2").slideDown(function(){
			$("#img2").css({
				"transform":"translate3d(-0.32rem,-0.285rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow2").css("display","block")

		})
	},3300)
	setTimeout(function(){
		$("#img3").slideDown(function(){
			$("#img3").css({
				"transform":"translate3d(-0.28rem,-0.535rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow3").css("display","block")

		})
	},3000)
	setTimeout(function(){
		$("#img4").slideDown(function(){
			$("#img4").css({
				"transform":"translate3d(-0.12rem,-0.335rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow4").css("display","block")

		})
	},2500)
	setTimeout(function(){
		$("#img5").slideDown(function(){
			$("#img5").css({
				"transform":"translate3d(0.02rem,-0.035rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow5").css("display","block")

		})
	},2000)
	setTimeout(function(){
		$("#img6").slideDown(function(){
			$("#img6").css({
				"transform":"translate3d(0.02rem,-0.535rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow6").css("display","block")

		})
	},1800)
	setTimeout(function(){
		$("#img7").slideDown(function(){
			$("#img7").css({
				"transform":"translate3d(-0.22rem,-0.635rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow7").css("display","block")

		})
	},1500)
	setTimeout(function(){
		$("#img8").slideDown(function(){
			$("#img8").css({
				"transform":"translate3d(-0.42rem,-0.535rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow8").css("display","block")

		})
	},1300)
	setTimeout(function(){
		$("#img9").slideDown(function(){
			$("#img9").css({
				"transform":"translate3d(-0.12rem,-0.935rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow9").css("display","block")

		})
	},1000)
	setTimeout(function(){
		$("#img10").slideDown(function(){
			$("#img10").css({
				"transform":"translate3d(-0.42rem,-0.835rem,1.5rem) rotateZ(15deg)",
			})
			$("#shadow10").css("display","block")
		})
	},500)
	
	setTimeout(function() {
		timeId = setInterval(function() {
			$("#tap").toggle()
		}, 500)
	}, 4000)
	
})

//点击事件
$(".shadow").click(function(){
	clearInterval(timeId)
	var index = $(this).index();
    var value = $(".user:eq("+$(this).index()+")").css("transform")
	console.log(value)
	$(".user:eq("+$(this).index()+")").css({
		"opacity":"1",
		"visibility":"visible",
		"transform": "translate3d(0,0,0)",
		"transition": "1s",
		"z-index":"2"
	})
	$(".fx").click(function(){
		$(".user:eq("+index+")").css({
			"opacity":"0",
			"visibility":"hidden",
			"transform": value,
			"transition": "1s ",
			"z-index":"-1"

		})
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
	location.href = "6-改变命运.html";
	
});






