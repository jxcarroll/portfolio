$( "#Mars" ).validate({
 
});

function DefaultDate() {
	if (document.getElementById("rovercuriosity").checked) {
		document.getElementById("picturedate").value = "2012-08-06"
	}
	if (document.getElementById("roveropportunity").checked) {
		document.getElementById("picturedate").value = "2004-01-26"
	}
	if (document.getElementById("roverspirit").checked) {
		document.getElementById("picturedate").value = "2004-01-05"
	}
}


function GetData() {
    if ($( "#Mars" ).valid()) {



		if (document.getElementById("rovercuriosity").checked) {
        	rover = document.getElementById("rovercuriosity").value;
    	}
		if (document.getElementById("roveropportunity").checked) {
        	rover = document.getElementById("roveropportunity").value;
    	}
		if (document.getElementById("roverspirit").checked) {
        	rover = document.getElementById("roverspirit").value;
    	}

		picturedate = document.getElementById("picturedate").value;
	
		/* URL for AJAX Call */
		var myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + picturedate + "&page=1&api_key=dIR6t8rXh5gawDBGkh6gWdnMiVlnO8LPtnFAShe5";
        
		/* AJAX Method */
		var myMethod = "GET";

		/* Make sure the document is ready */
		$(document).ready(function() { 

			/* Perform AJAX call - Note that the AJAX function 
			does not have a selector */

			$.ajax({
			method: myMethod,
			url: myURL
			})

			/* AJAX complete - result is in msg */
			.done(function( msg ) {

				/* Your code to process the result goes here - display the returned message */
				fLen = msg.photos.length;
				document.getElementById("photos").innerHTML = fLen + " photos "
				for (i = 0; i < 25; i++) {
					if (i < fLen) {
						document.getElementById("image" + i).src = msg.photos[i].img_src;
						document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
						document.getElementById("anchor" + i).href = msg.photos[i].img_src;
						document.getElementById("image" + i).style.display = "inline";
					}
					else
					{
						document.getElementById("image" + i).src = "#";
						document.getElementById("anchor" + i).href = "#";
						document.getElementById("image" + i).style.display = "none";
					}
				}
			});
		});

	}
}

function ClearForm() {
	document.getElementById("rovercuriosity").checked = false;
	document.getElementById("roveropportunity").checked = false;
	document.getElementById("roverspirit").checked = false;
	document.getElementById("roverError").innerHTML = "";
	document.getElementById("picturedate").value = "";
	document.getElementById("picturedateError").innerHTML = "";
  document.getElementById("photos").innerHTML = "";
  /*	document.getElementById("anchor0").innerHTML = "";
    document.getElementById("anchor1").innerHTML = "";
    document.getElementById("anchor2").innerHTML = "";
    document.getElementById("anchor3").innerHTML = "";
    document.getElementById("anchor4").innerHTML = "";
    document.getElementById("anchor5").innerHTML = "";
    document.getElementById("anchor6").innerHTML = "";
    document.getElementById("anchor7").innerHTML = "";
    document.getElementById("anchor8").innerHTML = "";
    document.getElementById("anchor9").innerHTML = "";
    document.getElementById("anchor10").innerHTML = "";
    document.getElementById("anchor11").innerHTML = "";
    document.getElementById("anchor12").innerHTML = "";
    document.getElementById("anchor13").innerHTML = "";
    document.getElementById("anchor14").innerHTML = "";
    document.getElementById("anchor15").innerHTML = "";
    document.getElementById("anchor16").innerHTML = "";
    document.getElementById("anchor17").innerHTML = "";
    document.getElementById("anchor18").innerHTML = "";
    document.getElementById("anchor19").innerHTML = "";
    document.getElementById("anchor20").innerHTML = "";
    document.getElementById("anchor21").innerHTML = "";
    document.getElementById("anchor22").innerHTML = "";
    document.getElementById("anchor23").innerHTML = "";
    document.getElementById("anchor24").innerHTML = "";
    */
