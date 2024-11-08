let boton_money = document.getElementById("money");
let boton_miami = document.getElementById("miami");
let boton_fort = document.getElementById("fort");
let img_money = document.getElementById("img_money");
let img_miami = document.getElementById("img_miami");
let img_fort = document.getElementById("img_fort");

boton_money.addEventListener("click", function(){
    img_money.style.display = "inline";
});

boton_miami.addEventListener("click", function(){
    img_miami.style.display = "inline";
});

boton_fort.addEventListener("click", function(){
    img_fort.style.display = "inline";
});

img_money.addEventListener("click", function(){
    this.style.display = "none";
});

img_miami.addEventListener("click", function(){
    this.style.display = "none";
});

img_fort.addEventListener("click", function(){
    this.style.display = "none";
});