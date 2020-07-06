function showInput() 
{
		var songName = document.myform.input.value;
		var userComment = document.myform.comment.value;
		var userRating = document.myform.rating.value;

		document.getElementById("results1").innerHTML = "You listened to " + songName;
		document.getElementById("results2").innerHTML = "Comments: " + userComment;
		document.getElementById("results3").innerHTML = "Rating (1-5): " + userRating;

			// document.getElementById("fl").innerHTML = "You are listening to " + songName;
			// document.getElementById("fl1").innerHTML = "Comments: " + document.myform.comment.value;
			// document.getElementById("fl2").innerHTML = "Rating (1-5): " + document.myform.rating.value;

}

// tryna make an array that stores song name
// LEFT OFF HERE USE THE WEBSITE AND TRY TO GET THIS ARRAY TO WORK YEET
var songIndex     = 0;
var commentIndex  = 0;
var ratingIndex   = 0;
var songNameArray = Array();
var commentArray  = Array();
var ratingArray   = Array();

function addElementToSongNameArray() {
	songNameArray[songIndex] = document.myform.input.value;
	//alert("Element: " + songNameArray[songIndex] + " added at index " + songIndex);
	songIndex++;
	document.getElementById("results1").value = "";
}

function addElementToCommentArray() {
	commentArray[commentIndex] = document.myform.comment.value;
	//alert("Element: " + commentArray[commentIndex] + " added at index " + commentIndex);
	commentIndex++;
	document.getElementById("results2").value = "";
}

function addElementToRatingArray() {
	ratingArray[ratingIndex] = document.myform.rating.value;
	//alert("Element: " + ratingArray[ratingIndex] + " added at index " + ratingIndex);
	ratingIndex++;
	document.getElementById("results3").value = "";
}

function displaySongNameArray() {
	var output = "";
	for (var i = songNameArray.length - 1; i >= 0; i--) {
		output +=  "Element " + i + " = " + songNameArray[i] + "<br/>";
	}
	document.getElementById("results1").innerHTML = output;
}

function displayCommentArray() {
	var output = "";
	for (var i = commentArray.length - 1; i >= 0; i--) {
		output +=  "Element " + i + " = " + commentArray[i] + "<br/>";
	}
	document.getElementById("results2").innerHTML = output;
}

function displayRatingArray() {
	var output = "";
	for (var i = ratingArray.length - 1; i >= 0; i--) {
		output +=  "Element " + i + " = " + ratingArray[i] + "<br/>";
	}
	document.getElementById("results3").innerHTML = output;
}