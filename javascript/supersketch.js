//creates a new grid with user defined dimensions
function newgrid(x){
	for (var row = 1; row <= x; row++){
		for (var col = 1; col <= x; col++){
			$("#container").append("<div class='grid'></div>");	
		};
	};
	$(".grid").width(960/x);
	$(".grid").height(960/x);
};

//removes old grid
function cleargrid(){
	$(".grid").remove();
};	

//calls cleargrid, then prompts user for new grid dimensions
function refreshgrid(){
	cleargrid();
	var numSquares = prompt("How many squares would you like per side of your grid?", "Please enter a number between 1 and 45");
	if (numSquares >= 1 && numSquares <= 45){
		newgrid(numSquares);	
	}
	else {
		refreshgrid();
	};
};

//starts with 16x16 grid
$(document).ready(function(){
	newgrid(16);

	$(".grid").mouseover(function(){
		var randcol = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		$(this).css("background", randcol);
	});

	$("button").on("click", function(){
		refreshgrid();
		$(".grid").mouseover(function(){
			var randcol = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			$(this).css("background", randcol);
		});
	});
});
	
	

