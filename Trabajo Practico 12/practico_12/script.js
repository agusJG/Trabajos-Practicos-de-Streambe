const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

function randomWords(palabras) {
    let num_random = Math.floor(Math.random() * palabras.length);
    let palabra_elegida = palabras[num_random];
    return palabra_elegida
};

let palabraAleatoria = randomWords(words);
let time_s = document.getElementById("timeSpan");
let time = 10;
let score_label = document.getElementById("score")
let score = 0;

function addToDOM(palabra){
    let h1 = document.getElementById("randomWord");
    h1.textContent = palabra
};

addToDOM(palabraAleatoria);




document.addEventListener("input", () =>{
    let input = document.getElementById("text");
    let palabra_ingresada = input.value;
    if(palabra_ingresada == palabraAleatoria){
        time += 3;
        input.value = "";
        palabraAleatoria = randomWords(words);
        addToDOM(palabraAleatoria);
        updateScore();
    };
});

let timeInterval = setInterval(() =>{
    time -= 1;
    time_s.textContent = `${time}s`
    if (time === 0){
        clearInterval(timeInterval);
        gameOver();
    };
}, 1000);

function updateScore(){
    score += 1;
    score_label.textContent = score;
};

function gameOver(){
    let game_over = document.createElement("h1");
    game_over.textContent = "Game Over, se acabo el tiempo";
    game_over.style.color = "white";
    game_over.style.textAlign = "center"
    let score_h3 = document.createElement("h3");
    score_h3.textContent = `El puntaje fue de ${score} puntos`;
    score_h3.style.color = "white"
    score_h3.style.textAlign = "center"
    let btn_replay = document.createElement("button");
    btn_replay.textContent = "Volve a empezar";
    btn_replay.style.display = "flex"
    btn_replay.style.justifyContent = "center"
    btn_replay.onclick = function(){
        location.reload();
    };
    document.body.appendChild(game_over);
    document.body.appendChild(score_h3);
    document.body.appendChild(btn_replay);
};