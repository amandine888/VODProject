$( document ).ready(function() {
    

    $.get("https://brianboudrioux.fr/simplon/api/products/", function(data, test){
    // var div = document.createElement("div")
    
    $(".vidfilms").text("")
      for (var i = 0; i < data.length; i++) {
          var div = document.createElement("div")
          var video = document.querySelector(".vidfilms")
          var img = document.createElement("img")
          video.append(div)
          div.append(img)
          $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
      }
      $("#categoriesfilms").addClass("selected")

  });



$(".listecatégories li").mouseenter(function(){
  $(this).css({"text-decoration-line":"line-through"});
  })
$(".listecatégories li").mouseleave(function(){
  $(this).css("text-decoration-line","none");
});


$("#misora").mouseenter(function(){
  $(this).css("border","none");
});


$(".icone").click(function(){
	if($("#listeuser").css("display")=== "none")
	$("#listeuser").fadeIn("fast");

	else{
		$("#listeuser").fadeOut("fast");
	}
})



// cadres + videos + border

$("#categoriesfilms").click(function(){
   $("#cat").text("Films");
   $("#categoriesfilms").addClass("selected")
   $("#categoriesseries, #categoriesanimes, #categoriesrealisateurs").removeClass("selected")
  if($(".middlefilms").css("display") === "none"){
    $(".middlefilms").fadeIn("slow").css("display","flex");
    $(".middleseries, .middleanimes, .middlerealisateurs").css("display","none");
      }
})

  

$("#categoriesseries").click(function(){
  $("#cat").text("Séries");
  $("#categoriesseries").addClass("selected")
   $("#categoriesfilms, #categoriesanimes, #categoriesrealisateurs").removeClass("selected")
  if($(".middleseries").css("display")==="none"){
    $(".middleseries").fadeIn("slow").css("display","flex");
    $(".middlefilms, .middleanimes, .middlerealisateurs").css("display","none");
  }

})



$("#categoriesanimes").click(function(){
   $("#cat").text("Animés");
   $("#categoriesanimes").addClass("selected")
   $("#categoriesseries, #categoriesfilms, #categoriesrealisateurs").removeClass("selected")
  if($(".middleanimes").css("display")==="none"){
    $(".middleanimes").fadeIn("slow").css("display","flex");
    $(".middlefilms, .middleseries, .middlerealisateurs").css("display","none");
  }
})



$("#categoriesrealisateurs").click(function(){
   $("#cat").text("Réalisateurs");
   $("#categoriesrealisateurs").addClass("selected")
   $("#categoriesseries, #categoriesanimes, #categoriesfilms").removeClass("selected")
  if($(".middlerealisateurs").css("display")==="none"){
    $(".middlerealisateurs").fadeIn("slow").css("display","flex");
    $(".middlefilms, .middleanimes, .middleseries").css("display","none");
  }
})


// images

$("#categoriesfilms").click(function oui(){
    
  $.get("https://brianboudrioux.fr/simplon/api/products/", function(data, test){
    // var div = document.createElement("div")
    
    $(".vidfilms").text("")
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidfilms")
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
      }


  });

});



                // Dans films

$("#filmsaction").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc001b01192ac774b019fe2" , function(data, test){
    // var div = document.createElement("div")
    $(".vidfilms").text("")
   
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidfilms")
      // var video = $(".vidfilms").clone(false)
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
      }

  });
});



$("#filmscomedie").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbeffb7cbd3166665f3a45b" , function(data, test){
    $(".vidfilms").text("")
   
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


$("#filmshorreur").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0a3e6cb3406eba1ac77b" , function(data, test){
    // var div = document.createElement("div")
    $(".vidfilms").text("")
   
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidfilms")
      // var video = $(".vidfilms").clone(false)
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
      console.log(div)
      }

  });
});


$("#filmsSF").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc002181192ac774b019fe3" , function(data, test){
    // var div = document.createElement("div")
    $(".vidfilms").text("")
   
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidfilms")
      // var video = $(".vidfilms").clone(false)
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
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0c7d6cb3406eba1ac781" , function(data, test){
    // var div = document.createElement("div")
    $(".vidseries").text("")
   
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidseries")
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
      console.log(div)
      }

  });
});




$("#seriesaction").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc001b01192ac774b019fe2" , function(data, test){
    // var div = document.createElement("div")
    $(".vidseries").text("")
   
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidseries")
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
      console.log(div)
      }

  });
});


$("#seriescomedie").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbeffb7cbd3166665f3a45b" , function(data, test){
    // var div = document.createElement("div")
    $(".vidseries").text("")
   
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidseries")
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
      console.log(div)
      }

  });
});


$("#serieshorreur").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0a3e6cb3406eba1ac77b" , function(data, test){
    // var div = document.createElement("div")
    $(".vidseries").text("")
   
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidseries")
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
      console.log(div)
    }

  });
});


$("#seriesSF").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc002181192ac774b019fe3" , function(data, test){
    // var div = document.createElement("div")
    $(".vidseries").text("")
   
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidseries")
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture, "width":"100%", "height":"100%"})
      console.log(div)
    }

  });
});


    // Animes


  $("#categoriesanimes").click(function(){
    $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0c166cb3406eba1ac780" , function(data, test){
      // var div = document.createElement("div")
      $(".vidanimes").text("")
     
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



  $("#categoriesanimes").click(function(){
    $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0c166cb3406eba1ac780" , function(data, test){
      // var div = document.createElement("div")
      $(".vidanimes").text("")
     
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




$("middlefilms div").click(function(){
  var att = $("img").attr()
  console.log(att)
})


$("#misora").click(function(){
  window.location="index.html"
})




});