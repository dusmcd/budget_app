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

	$("#total-exp").text("0");

}


$(document).ready(init);