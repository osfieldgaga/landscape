$(document).ready( function(){
	$("#header").hide();
	$("#menu").hide();
	var bottomOfPresentation = $("#top").offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() > bottomOfPresentation){
			$("#header").show();

		}
		else{
			$("#header").hide();
		}
		
	});

	var menu = document.getElementById("menu");
	var btn = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var closeMenu = document.getElementById("close-menu");
	//btn.onClick = function(e){
		//$("#menu").show();
		//menu.show();
	//}
	btn.addEventListener("click",function(e){
		$("#menu").show();
		//menu.show();
	},false);
	btn2.addEventListener("click",function(e){
		$("#menu").show();
		//menu.show();
	},false);
	closeMenu.addEventListener("click",function(e){
		$("#menu").hide();
	})
});
