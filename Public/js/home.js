$(document).ready(function(){

    $("#Boutons #LogIn").on("click",function(){
        $("#Accroche, #LogIn, #SignUp").css("display", "none");
        $("#ContainerLogIn").css("display", "flex"); 
        $("#MainPage #line").css({"-webkit-transform":"translateY(40px)"})
    })

    $("#ContainerLogIn #Fermeture").on("click",function(){
        $("#ContainerLogIn").css("display", "none"); 
        $("#Accroche, #LogIn, #SignUp").css("display", "flex");
        $("#MainPage #line").css({"-webkit-transform":"translateY(0px)"})
    })

    $("#Boutons #SignUp").on("click",function(){
        $("#Accroche, #LogIn, #SignUp").css("display", "none");
        $("#ContainerAbonnement").css("display", "flex"); 
        $("#MainPage #line").css({"-webkit-transform":"translateY(52px)"})
    })

    $("#ContainerAbonnement #Fermeture2").on("click",function(){
        $("#ContainerAbonnement").css("display", "none"); 
        $("#Accroche, #LogIn, #SignUp").css("display", "flex");
        $("#MainPage #line").css({"-webkit-transform":"translateY(0px)"})
    })


    

})