let intento = 0

function iniciarSesion(){
    if(intento >= 3){
        console.log('Llegaste al maximo numero de intentos, sistema cerrado')
        return
    }
    let usuario = document.querySelector("#usuario").value
    let contraseña = document.querySelector("#contraseña").value

    if(usuario == 'admin' && contraseña == '1234'){
        console.log('Bienvenido')
        

    }else {
        intento++            
        console.log('Por favor intente nuevamente')
    }
}





