let parrafos = document.querySelectorAll("p");
console.log(parrafos.length);
for (let i = 0; i < parrafos.length; i++){
    parrafos[i].addEventListener("click", function(){
        this.classList.toggle("resaltado");
    });
};

let perro = document.getElementById("magia");
perro.style.display = "inline";
perro.addEventListener("mouseover", function(){
    perro.style.display = "none";
});

