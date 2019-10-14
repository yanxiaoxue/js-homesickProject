var wrap = document.getElementById("wrap");
var earthImg = document.getElementById("earth");
var index = 0;//记录图片

var timeId = setInterval(function(){
	// clearInterval(timeId);
	index++;
	if(index > 47){
		index = 1;
	}
	earthImg.src = "img/diqiu/"+index+".jpg";
	
	
},100)



//自动调整图片的大小
//onresize 事件会在窗口或框架被调整大小时发生
window.onresize = function(){
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	earthImg.style.width = width+"px";
	earthImg.style.height = height+"px";
	// console.log(document.documentElement.clientWidth);
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
	location.href = "3-悬浮.html";
	
});