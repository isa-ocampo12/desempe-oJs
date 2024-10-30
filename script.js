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
        calcularCalificaciones()

    }else {
        intento++            
        console.log('Por favor intente nuevamente')
    }
}

function calcularCalificaciones() {
    let continuar = true
  
    while (continuar) 
    {
      let nombreEstudiante = prompt('BIENVENIDO \nIngrese el nombre del estudiante: ')
      let notas = []
      let totalNotas = 0
            
      for (let i = 0; i < 5; i++) 
        {
            let nota = parseFloat(prompt('Ingrese la nota ' + (i + 1) + ' para el estudiante ' + nombreEstudiante ))
            notas.push(nota)        
            totalNotas += nota    
        }
  
      let promedio = totalNotas/5
      let resultado
  
      if (promedio < 3.0) {
        resultado = 'Reprueba'
      } else if (promedio >= 3.0 && promedio <= 4.0) {
        resultado = 'Aprueba con dificultades'
      } else {
        resultado = 'Aprueba con excelencia'
      }
  
      console.log('Estudiante: ' + nombreEstudiante)
      console.log('Notas: ' + notas)
      console.log('Promedio: ' + promedio)
      console.log('Resultado: ' + resultado)
  
      let opcion = prompt("Desea ingresar otro estudiante? Si o No:").toLowerCase()
  
      switch (opcion) {
        case "si":
          continuar = true
          break
        case "no":
          continuar = false
          console.log('Calculo de notas finalizaso')
          break
        default:
            continuar = false
            console.log("Opcion no válida.")
      }
    }
  }





