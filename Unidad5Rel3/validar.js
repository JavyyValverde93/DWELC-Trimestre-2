window.onload = iniciar;

        var validacion = true;

        function iniciar(){
            document.getElementById("enviar").addEventListener("click", validar);

        }
        function validar(event){
            if(document.getElementById("nombre").value.length==0){
                alert("No se ha rellenado el campo nombre");
                validacion = false;
            }

            if(isNaN(document.getElementById("telefono").value)){
                alert("El número de teléfono no es correcto");
                validacion = false;
            }
            dia = document.getElementById("dia").value;
            mes = document.getElementById("mes").value;
            ano = document.getElementById("ano").value;

            var fecha = new Date(dia, mes, ano);
            if(isNaN(fecha)){
                alert("El campo fecha no es correcto");
                validacion = false;
            }
            if(!document.getElementById("mayor").checked){
                alert("No eres mayor de edad");
                validacion = false;
            }

            if(validacion == true){
                alert("Formulario válido");
            }else{
                event.preventDefault();
                alert("El formulario no es válido");
            }
        }