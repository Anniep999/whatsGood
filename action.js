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