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


// if($(".middlefilms").css("display")==="flex"){
//   $("#categoriesfilms").addClass("selected")}


// cadres + videos + border

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


// images

$("#categoriesfilms").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/", function(data, test){
    // var div = document.createElement("div")
    
   
    for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div")
    var video = document.querySelector(".videos")
    var img = document.createElement("img")
    video.append(div)
    div.append(img)
    $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
    }

  });
});


$("#filmscomedie").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbeffb7cbd3166665f3a45b" , function(data, test){
    // var div = document.createElement("div")
    
   
    for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div")
    var video = document.querySelector(".vidfilms")
    var img = document.createElement("img")
    video.append(div)
    div.append(img)
    $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
    console.log(div)
    }

  });
});


  // series

  $("#categoriesseries").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0c166cb3406eba1ac780" , function(data, test){
    // var div = document.createElement("div")
    
   
    for (var j = 0; j < data.length; j++) {
    var div = document.createElement("div")
    var video = document.querySelector(".vidseries")
    var img = document.createElement("img")
    video.append(div)
    div.append(img)
    $(img).attr({"src":data[j].picture, "width":"100%", "height":"100%"})
    console.log(div)
    }

  });
});

//   $("#categoriesseries").click(function(){
//   $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0c166cb3406eba1ac780" , function(data, test){
//     // var div = document.createElement("div")
    
   
//     for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div")
//     var video = document.querySelector(".vidseries")
//     var img = document.createElement("img")
//     video.append(div)
//     div.append(img)
//     $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
//     console.log(div)
//     }

//   });
// });





  $("#categoriesanimes").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0c166cb3406eba1ac780" , function(data, test){
    // var div = document.createElement("div")
    
   
    for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div")
    var video = document.querySelector(".vidanimes")
    var img = document.createElement("img")
    video.append(div)
    div.append(img)
    $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
    }

  });
});







});