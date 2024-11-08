let auto_rojo = document.getElementById("rojo");
let auto_azul = document.getElementById("azul");
let gato = document.getElementById("gato");

let acumulador_1 = 0;
let acumulador_2 = 0;
let acumulador_3 = 0

window.addEventListener("keyup", (event) => {
    if (acumulador_1 >= 1110){
        alert("El ganador de la carrera fue el auto azul");
    }
    else if (acumulador_2 >= 1110){
        alert("El ganador de la carrera fue el auto rojo");
    }
    else if (acumulador_3 >= 1110){
        alert("El ganador de la carrera fue el gato");
    }
    else if (event.key === "a"){
        acumulador_1 += 50
        auto_azul.style.marginLeft = `${acumulador_1}px`;
    }
    else if (event.key === "r"){
        acumulador_2 += 50
        auto_rojo.style.marginLeft = `${acumulador_2}px`;
    }
    else if (event.key === "g"){
        acumulador_3 += 50
        gato.style.marginLeft = `${acumulador_3}px`;
    }

})