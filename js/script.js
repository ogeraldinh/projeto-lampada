
function luz_estado() {
  let btn = document.getElementById("btn").value
  let luz = document.getElementById("luz")
  
  let apagada = "img/apagada.png"
  let acesa = "img/acesa.png"
  
  if (btn == 0){
    luz.src = acesa
    document.getElementById("btn").innerHTML = "Apagar"
    document.getElementById("btn").value = 1
    document.body.style.backgroundColor = "#fff"

  } else if (btn == 1) {
    luz.src = apagada
    document.getElementById("btn").innerHTML = "Acender"
    document.getElementById("btn"). value = 0
    document.body.style.backgroundColor = "#191B1D"
    
  }
}
function luz_quebrar() {
  let luz = document.getElementById("luz")
  luz.src = "img/quebrada.png"
  document.body.style.backgroundColor = "#191B1D"
  document.getElementById("btn").innerHTML = "Consertar"
  document.getElementById("btn"). value = 1
  
}