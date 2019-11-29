window.onload = function() {

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

    const logInForm = document.getElementById("typeForm");  
    const boutonLog = document.getElementById("BoutonLogIn");            
    

    boutonLog.addEventListener("click", function(event){
        event.preventDefault();

        let email = logInForm[0].value; 
            console.log(email); 

        let password = logInForm[1].value; 
            console.log(password);    
            

        $.post("https://brianboudrioux.fr/simplon/api/connect", { email: email, password: password}, function(data, status) {
            event.preventDefault();
            console.log(data);

            if (data.auth == true){

                localStorage.setItem("email", email)
                window.location = "sign_up.html"; }

                else {
                    alert('Account does not exist, please register');}
        })
    })
}
