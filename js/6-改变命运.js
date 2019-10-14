$("#t2").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(-10,30);
			var y = randomNum(0,10);
			$("#t2").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"2.5s"
			})
		},2500)
	})
})

$("#t3").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(0,30);
			var y = randomNum(0,5);
			$("#t3").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"2s"
			})
		},2000)
	})
})

$("#t4").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(10,30);
			var y = randomNum(0,5);
			$("#t4").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"2s"
			})
		},2000)
	})
})

$("#t5").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(10,40);
			var y = randomNum(0,5);
			$("#t5").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"2.5s"
			})
		},2500)
	})
})

$("#t6").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(0,5);
			var y = randomNum(0,20);
			$("#t6").css({
				"transform":"translate3d(0,"+y+"px,0)",
				"transition":"2s"
			})
		},2000)
	})
})

$(function(){
	setTimeout(function(){
		$("#titleName").animate({
			"opacity":"1"
		},function(){
			$("#titlet").animate({
				"opacity":"1"
			},function(){
				$("#linemask").animate({
					"top":"+=100%"
				},3000)
				$("#wo1").css({
					"left":"35%",
					"transition":"1s",
				})
				setTimeout(function(){
					$("#wo2").css({
						"left":"10%",
						"transition":"1s",
					})
				},1000)
				setTimeout(function(){
					$("#wo3").css({
						"left":"35%",
						"transition":"1s",
					})
				},2000)
			})
		})
		
	},2000)
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
	location.href = "7-market.html";
	
});




function randomNum(m,n){
	return Math.floor(Math.random()*(n-m+1)+m);
}