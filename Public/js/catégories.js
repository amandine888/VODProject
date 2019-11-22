$( document ).ready(function() {
    
$(".listecatégories li").mouseenter(function(){
  $(this).css({"text-decoration-line":"line-through"});
  })
$(".listecatégories li").mouseleave(function(){
  $(this).css("text-decoration-line","none");
});


// $("nav li").mouseenter(function(){
//   $(this).css({"border":"1px solid white"});
//   })
// $("nav li").mouseleave(function(){
//   $(this).css("border","none");
// });


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


if($(".middlefilms").css("display")==="flex"){
  $("#categoriesfilms").addClass("selected")}


$("#categoriesfilms").click(function(){
   $("#cat").text("Films");
   $("#categoriesfilms").addClass("selected")
   $("#categoriesseries, #categoriesanimes, #categoriesrealisateurs").removeClass("selected")
  if($(".middlefilms").css("display") === "none"){
    $(".middleseries .middleanimes .middlerealisateurs").css("display")==="none";
    $(".middlefilms").css("display") === "flex";
  }
})

  

$("#categoriesseries").click(function(){
  $("#cat").text("Séries");
  $("#categoriesseries").addClass("selected")
   $("#categoriesfilms, #categoriesanimes, #categoriesrealisateurs").removeClass("selected")
  if($(".middleseries").css("display")==="none"){
    $(".middleseries").css("display","flex");
    $(".middlefilms, .middleanimes, .middlerealisateurs").css("display","none");
  }

})



$("#categoriesanimes").click(function(){
   $("#cat").text("Animés");
   $("#categoriesanimes").addClass("selected")
   $("#categoriesseries, #categoriesfilms, #categoriesrealisateurs").removeClass("selected")
  if($(".middleanimes").css("display")==="none"){
    $(".middleanimes").css("display","flex");
    $(".middlefilms, .middleseries, .middlerealisateurs").css("display","none");
  }
})



$("#categoriesrealisateurs").click(function(){
   $("#cat").text("Réalisateurs");
   $("#categoriesrealisateurs").addClass("selected")
   $("#categoriesseries, #categoriesanimes, #categoriesfilms").removeClass("selected")
  if($(".middlerealisateurs").css("display")==="none"){
    $(".middlerealisateurs").css("display","flex");
    $(".middlefilms, .middleanimes, .middleseries").css("display","none");
  }
})


$("#categoriesfilms").click(function(){
  var url = $.get("https:brianboudrioux.fr/simplon/api/products");
  $.get("https://brianboudrioux.fr/simplon/api/products", function(test){
    for (var i = 0; i < url.length; i++) {
      return url[i];
    }
    console.log(url[i])
  });
});
  





});