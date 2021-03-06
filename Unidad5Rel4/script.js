window.onload = iniciar;
validar = true;

function iniciar(){
    username = document.getElementById("username");
    small = document.getElementsByTagName("small");

    if(document.getElementById("username").value.length<3){
        small[0].innerHTML = "Username debe tener al menos 3 caracteres";
        validar = false;
    }else{
        small[0].innerHTML = "";
    }      

    if(document.getElementById("email").value.length<5){
        small[1].innerHTML = "El email no es válido";
        validar = false;
    }else{
        small[1].innerHTML = "";
    }

    if(document.getElementById("password").value.length<6){
        small[2].innerHTML = "Password debe contener al menos 6 caracteres";
        validar = false;
    }else{
        small[2].innerHTML = "";
    }

    if(document.getElementById("password2").value.length<1){
        small[3].innerHTML = "Password2 es necesario";
        validar = false;
    }else{
        if(document.getElementById("password2").value!=document.getElementById("password").value){
            small[3].innerHTML = "Las contraseñas no coinciden";
            validar = false;
        }
        small[3].innerHTML = "";
    }
    

    document.getElementById("submit").addEventListener("click", validarFormulario);

    
    
}

mail = document.getElementById("email").value;

    function validarEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mail)){
            return true;
        } else {
            return false;
        }
      }

function validarFormulario(){
    iniciar();
    document.getElementsByTagName("style")[0].innerHTML = ".form-control small{visibility:visible}" + 
    "input:valid {"+
    "border: 2px solid rgb(3, 255, 3);"+
    "}"+
    "input:invalid {"+
        "border: 2px solid red;"+
    "}";
    if(validar == true){
        event.preventDefault();
    }
}