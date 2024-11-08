let input = document.getElementById("texto");

document.addEventListener("keydown", (event) => {
    let color = input.value;
    if (color === "rojo"){
        color = "red";
    }
    if (color === "azul"){
        color = "blue";
    }
    if (color === "amarillo"){
        color = "yellow";
    }
    if (event.key === "Enter") {
        document.body.style.backgroundColor = color ;
    }
    if (event.key === "Backspace") {
        document.body.style.backgroundColor = "white" ;
    }
})