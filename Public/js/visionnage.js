$(document).ready(function() {

var params = new window.URLSearchParams(window.location.search);
var lien = params.get("lien")

$("#frame").attr("src",lien)

$("#retour").click(function(){
	window.history.back();
})


$(".retourparametre").fadeOut(2000)

// function fade(){
// 	$(".retourparametre").fadeOut(4000);

// 		$("#frame").mousemove(function(){
// 			fade().stop();
// 	  		$(".retourparametre").show("slow");
// 	  		// fade();
// 		});
// };


// $("body").mousemove(function(){
// 			$(".retourparametre").show();
// 			$(".retourparametre").fadeOut(2000);
// });

function fade(){
  	setTimeout(function(){ $(".retourparametre").fadeOut(1500); 
	}, 3000);
}

$("body").mousemove(function(){
			$(".retourparametre").show("fast")
			fade();

})
	
			







})

