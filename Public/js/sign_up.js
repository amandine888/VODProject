$(document).ready(function(){

    $("#AbonnementsContainer, #Switch, h3").on("click", function(){

        if ($("#Premium").css ("display")==="none"){
            $("#Premium").css("display", "flex"); 
            $("#Basic").css("display", "none"); 
            $("#Switch h3").text("Switch pour l'abonnement Basic - 7€/mois"); 
        }
        else{
            $("#Basic").css("display", "flex");
            $("#Premium").css("display", "none"); 
            $("#Switch h3").text("Switch pour l'abonnement Premium - 11€/mois")
        }
    })
})