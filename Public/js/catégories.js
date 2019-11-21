$( document ).ready(function() {
    

$(".listecatégories li").mouseenter(function(){
  $(this).css({"text-decoration-line":"line-through"});
  })
$(".listecatégories li").mouseleave(function(){
  $(this).css("text-decoration-line","none");
});


$("nav li").mouseenter(function(){
  $(this).css({"border":"1px solid white"});
  })
$("nav li").mouseleave(function(){
  $(this).css("border","none");
});


$("#misora").mouseenter(function(){
  $(this).css("border","none");
});


$(".icone").click(function(){
	if($("#listeuser").css("display")=== "none")
	$("#listeuser").css("display","flex")

	else{
		$("#listeuser").css("display","none")
	}


})



});