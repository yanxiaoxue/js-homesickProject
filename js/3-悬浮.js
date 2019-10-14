$("#img1").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(0,30);
			var y = randomNum(0,30);
			$("#img1").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"3s ease-in-out"
			})
		},3000)
	})
})

$("#img2").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(0,40);
			var y = randomNum(0,40);
			var deg = randomNum(0,10)
			$("#img2").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"3s ease-in-out"
			})
		},3000)
	})
})

$("#img3").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(-10,30);
			var y = randomNum(-10,30);
			
			$("#img3").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"3s"
			})
		},3000)
	})
})

$("#img4").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(0,30);
			var y = randomNum(0,30);
			$("#img4").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"3s"
			})
		},3000)
	})
})

$("#img5").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(0,30);
			var y = randomNum(0,30);
			$("#img5").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"2s ease-in-out"
			})
		},2000)
	})
})

$("#img6").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(-10,30);
			var y = randomNum(-10,30);
			$("#img6").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"2s ease-in-out"
			})
		},2000)
	})
})

$("#img7").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(0,30);
			var y = randomNum(0,30);
			$("#img7").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"2s"
			})
		},2000)
	})
})

$("#img8").animate({},function(){
	$(function(){
		setInterval(function(){
			var x = randomNum(0,20);
			var y = randomNum(0,20);
			$("#img8").css({
				"transform":"translate3d("+x+"px,"+y+"px,0)",
				"transition":"3s"
			})
		},3000)
	})
})



function randomNum(m,n){
	return Math.floor(Math.random()*(n-m+1)+m);
}


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
	location.href = "4-人物.html";
	
});
