document.getElementById("submit").addEventListener('click', submit);

function submit(e) {
    if (validar == true) {
        e.preventDefault();

    }
    for (i = 0; i < document.getElementsByTagName("small").length; i++) {
        document.getElementsByTagName("small")[i].style.visibility = "visible";
        document.getElementsByTagName("small")[i].innerText = " ";
    }
}

function validar() {
    let validacion = true;

    username = document.getElementById("username");
    small1 = document.getElementsByTagName("small")[0];
    email = document.getElementById("email").innerText;
    small2 = document.getElementsByTagName("small")[1];

    pass1 = document.getElementById("password").value;
    small3 = document.getElementsByTagName("small")[2];

    pass2 = document.getElementById("password2").value;
    small4 = document.getElementsByTagName("small")[3];

    if (username.value.length <= 3) {
        if (username.value == 0) {
            small1.innerText = "Este campo esta vacio";
        }else{
            small1.innerText = "El nombre de usuario es demasiado corto";
        }
        validacion = false;
    } else {
        small1.innerText = "";
    }
    if (!document.getElementById("email").checkValidity()) {
        if(email.length==0){
            small2.innerText = "El campo esta vacio";
        }else{
            small2.innerText = "El correo no es correcto";
        }
        validacion = false;
    }else{
        small2.innerText = "";
    }
    if (pass1.length<6) {
        if (pass1 == 0) {
            small3.innerText = "Este campo esta vacio";
        } else {
            small3.innerText = "Contraseña demasiado corta";
        }
        validacion = false;
    } else {
        small3.innerText = "";
    }
    if(pass2.length == 0){
        small4.innerText = "El campo esta vacio";
        validacion = false;
    }else{
        if (pass1 === pass2) {
            small4.innerText = "";
        } else {
            small4.innerText = "Las contraseñas no coinciden";
            validacion = false;
        }

    }
    return validacion;
}