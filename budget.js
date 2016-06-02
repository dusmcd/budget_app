function init () {
	addCategory();
	sumExp();
};

function addCategory() {
	$('button').on("click", function() {
		$("#add-to").append("<h1>It worked!</h1>");
	})
};

function sumExp() {
	var input = document.querySelectorAll("input");
	var sum = 0;
	$("input").keyup(function() {
		sum = 0;
		for(var i = 0; i < input.length; i++ ) {
			sum += Number(input[i].value);
		}

		$("#total-exp").text(sum);		
	})


}


$(document).ready(init);