$(document).ready(function(){
	var arr = new Array();
	arr[0] = "images/r4.jpg";
	arr[1] = "images/r5.jpg";
	arr[2] = "images/r6.jpg";
	arr[3] = "images/r7.jpg";
	arr[4] = "images/sub-slider3.jpg";
	arr[5] = "images/sub-slider4.jpg";
	arr[6] = "images/sub-slider5.jpg";
	arr[7] = "images/sub-slider6.jpg";
	setInterval(function(){
		$(".item").hide(1000,function(){
		    $(".item1").attr("src",arr[0]);
		    $(".item2").attr("src",arr[1]);
		    $(".item3").attr("src",arr[2]);
		    $(".item4").attr("src",arr[3]);
		    $(".item5").attr("src",arr[4]);
		    $(".item6").attr("src",arr[5]);	
		    $(".item7").attr("src",arr[6]);
		    $(".item8").attr("src",arr[7]);
		});
		$(".item").show(1500);
	},3000);
});