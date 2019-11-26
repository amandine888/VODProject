window.onload = function() {

    $("#AbonnementsContainer #Switch h3").on("click", function(){

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

    const submitBasic = document.getElementById("BoutonBasic"); 
    const basicForm = document.getElementById("BasicFormulaire"); 

    submitBasic.addEventListener("click", function(){
            let username = basicForm[3].value; 
            console.log(username); 
            
            let email = basicForm[4].value; 
            console.log(email); 

            let password = basicForm[5].value; 
            console.log(password);

            let verifPassword = basicForm[6].value; 
            console.log(verifPassword);
})}