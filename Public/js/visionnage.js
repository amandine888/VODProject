$(document).ready(function() {

$("#soustitres").click(function(){
	if($(".langues").css("display")=== "none")
	$(".langues").css("display","flex")

	else{
		$(".langues").css("display","none")
	}
})

});